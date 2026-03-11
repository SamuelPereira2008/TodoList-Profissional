import { useState } from "react";
import { InputAdd } from "../../components/Todo/InputAdd";
import { PageLayout } from "../../shared/layout/pageLayout/PageLayout";
import { Container, TodoForm } from "./Todo-style";
import { TodoItem } from "../../components/Todo/TodoItem";

function Todo() {
  const [list, setList] = useState([
    { id: "1", text: "Learn React", complete: false },
    { id: "2", text: "Build a Todo App", complete: false },
  ]);

  const HandleAdd = (value: string) => {
    setList([
      ...list,
      { id: Date.now().toString(), text: value, complete: false },
    ]);
  };

  const HandleComplete = (id: string) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };

  const HandleDelete = (id: string) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <PageLayout title="Todo List">
      <Container>
        <TodoForm>
          <InputAdd onAdd={HandleAdd} />

          <ol>
            {list.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                text={item.text}
                complete={item.complete}
                onComplete={(id) => HandleComplete(id)}
                onDelete={(id) => HandleDelete(id)}
              />
            ))}
          </ol>
        </TodoForm>
      </Container>
    </PageLayout>
  );
}

export { Todo };
