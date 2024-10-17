import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

function App() {
  const {
    langFrom,
    langTo,
    textFrom,
    result,
    isLoading,
    setLangFrom,
  } = useStore();

  console.log(langFrom, langTo, textFrom, result, isLoading);

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={()=> {
        setLangFrom("en");
      }}>CHANGE</button>
    </>
  );
}
export default App;





