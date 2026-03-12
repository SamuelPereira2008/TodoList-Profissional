import { useEffect, useState } from "react";
import { InputAdd } from "../../components/Todo/InputAdd";
import { PageLayout } from "../../shared/layout/pageLayout/PageLayout";
import { Container, TodoForm, TodoList } from "./Todo-style";
import { TodoItem } from "../../components/Todo/TodoItem";
import { TodoAPI, type ITodo } from "../../shared/services/TodoAPI";

function Todo() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const todos = await TodoAPI.getAll();
        setList(todos);
      } catch (error) {
        console.error("Erro ao carregar todos:", error);
      }
    })();
  }, []);

  const HandleAdd = async (value: string) => {
    try {
      const newTodo = await TodoAPI.create({
        label: value,
        complete: false,
      });
      setList([...list, newTodo]);
    } catch (error) {
      console.error("Erro ao adicionar todo:", error);
    }
  };

  const HandleComplete = async (id: string) => {
    try {
      await TodoAPI.updateById(id, {
        complete: !list.find((todo) => todo.id === id)?.complete,
      });
      setList(
        list.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : todo,
        ),
      );
    } catch (error) {
      console.error("Erro ao atualizar todo:", error);
    }
  };

  const HandleDelete = async (id: string) => {
    try {
      await TodoAPI.deleteById(id);
      setList(list.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao excluir todo:", error);
    }
  };

  return (
    <PageLayout title="Todo List">
      <Container>
        <TodoForm>
          <InputAdd onAdd={HandleAdd} />

          <TodoList>
            {list && list.length > 0 ? (
              list.map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.label}
                  complete={item.complete}
                  onComplete={(id) => HandleComplete(id)}
                  onDelete={(id) => HandleDelete(id)}
                />
              ))
            ) : (
              <p>Nenhuma tarefa adicionada</p>
            )}
          </TodoList>
        </TodoForm>
      </Container>
    </PageLayout>
  );
}

export { Todo };
