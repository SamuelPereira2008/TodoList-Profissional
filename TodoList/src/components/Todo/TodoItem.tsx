import { ButtonSmall, TodoItemList, Text, Bold } from "./Todo_style";

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
    <TodoItemList key={id}>
      <Text $complete={complete}>{text}</Text>
      <Bold $complete={complete}>
        {complete ? " (completed)" : " (pending)"}
      </Bold>
      <ButtonSmall onClick={() => onComplete(id)}>Toggle</ButtonSmall>
      <ButtonSmall onClick={() => onDelete(id)}>Delete</ButtonSmall>
    </TodoItemList>
  );
}

export { TodoItem };
