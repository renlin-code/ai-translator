import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface TextareaProps {
    type: SectionType
    placeholder: string
    loading?: boolean
    value: string
    onChange: (value: string) => void 
}
export const Textarea = ({ loading, placeholder, type, value, onChange }: TextareaProps) => {
  const commonStyles = { border: 0, height: "200px" };
  const  styles = type === SectionType.From
    ? { ...commonStyles, backgroundColor: "#f9f9f9" }
    : { ...commonStyles, backgroundColor: "#f4f4f4" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <Form.Control
      as="textarea"
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      placeholder={ loading ? "Loading..." : placeholder}
      style={styles}
      value={value}
      onChange={handleChange}
    ></Form.Control>
  );
};
