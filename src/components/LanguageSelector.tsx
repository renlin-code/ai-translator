import { Form } from "react-bootstrap";
import { AUTO_LANG, SUPPORTED_LANGS } from "../consts";
import { FromLanguage, Language, SectionType } from "../types.d";

type LanguageSelectorProps = 
    | {type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SectionType.To, value: Language, onChange: (language: Language) => void}
    
export const LanguageSelector = ({ value, type, onChange }: LanguageSelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <Form.Select aria-label="Select Language" onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANG}>Detect Language</option>}
      {Object.entries(SUPPORTED_LANGS).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};