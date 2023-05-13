import { Form } from "react-bootstrap";
import { useId } from "react";

type SelectProps = {
  label: string;
  options: string[];
  onChange: (value: string) => void;
};

export function Select({ label, options, onChange }: SelectProps) {
  const id = useId();

  return (
    <>
      <Form.Label htmlFor={id}>{label}: </Form.Label>
      <Form.Select onChange={(e) => onChange(e.target.value)} id={id}>
        <option value=''>Toutes</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </>
  );
}
