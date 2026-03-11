import { useState } from "react";
import { Button, Input, Container } from "./Todo_style";

interface IInputAddProps {
  onAdd: (value: string) => void;
}
function InputAdd({ onAdd }: IInputAddProps) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Container>

      <Input
        type="text"
        placeholder="Add a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />

      <Button onClick={handleAdd}>Add</Button>
    </Container>
  );
}

export { InputAdd };
