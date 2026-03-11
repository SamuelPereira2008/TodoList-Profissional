import { Button, ButtonSmall } from "./Todo_style";

interface ITodoItemProps {
  id: string;
  text: string;
  complete: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}
function TodoItem({
  id,
  text,
  complete,
  onComplete,
  onDelete,
}: ITodoItemProps) {
  return (
    <li key={id}>
      {text}
      <b>{complete ? " (completed)" : " (pending)"}</b>
      <ButtonSmall onClick={() => onComplete(id)}>Toggle</ButtonSmall>
      <ButtonSmall onClick={() => onDelete(id)}>Delete</ButtonSmall>
    </li>
  );
}

export { TodoItem };
