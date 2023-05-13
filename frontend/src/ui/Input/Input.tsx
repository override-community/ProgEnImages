import { Form } from "react-bootstrap";
import { useId } from "react";

type InputProps = {
  onChange: (value: string) => void;
  label: string;
  type?: string;
  helpertext?: string;
};

export function Input({
  onChange,
  label,
  type = "text",
  helpertext,
}: InputProps) {
  const id = useId();
  return (
    <>
      <Form.Label htmlFor={id}>{label} </Form.Label>
      <Form.Control
        type={type}
        id={id}
        onChange={(e) => onChange(e.target.value)}
      />
      {helpertext && (
        <Form.Text id='searchHelpText' muted>
          {helpertext}
        </Form.Text>
      )}
    </>
  );
}
