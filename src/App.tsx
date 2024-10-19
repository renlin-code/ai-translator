import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANG } from "./consts";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { IconSwitch } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { Textarea } from "./components/Textarea";
import { SectionType } from "./types.d";
import { useEffect } from "react";
import { translateText } from "./services/translate";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const {
    langFrom,
    langTo,
    textFrom,
    result,
    isLoading,
    switchLang,
    setLangFrom,
    setLangTo,
    setTextFrom,
    setResult,
  } = useStore();

  const debouncedTextFrom = useDebounce(textFrom, 300);

  useEffect(() => {
    if (debouncedTextFrom.trim() === "") return;

    translateText(debouncedTextFrom, langTo).then((res) => {
      const [result, sourceLang] = res;
      
      setResult(result);
      setLangFrom(sourceLang);
    });
  }, [debouncedTextFrom, langTo]);

  return (
    <Container fluid>
      <h1 style={{marginBottom: "20px", textAlign: "center"}}>My Translator</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={langFrom} except={langTo} onChange={setLangFrom} />
            <Textarea 
              type={SectionType.From}
              placeholder="Enter text"
              value={textFrom}
              onChange={setTextFrom}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button variant="link" disabled={langFrom === AUTO_LANG} onClick={switchLang}>
            <IconSwitch />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={langTo} except={langFrom} onChange={setLangTo} />
            <Textarea 
              type={SectionType.To}
              placeholder="Translated text"
              loading={isLoading}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
export default App;





