import { createServer, Model } from "miragejs";

createServer({
  models: {
    todo: Model,
  },

  seeds(server) {
    const storedTodos = localStorage.getItem("MOCK_TODOS");
    if (storedTodos === null) {
      return;
    }
    const todos = JSON.parse(storedTodos);
    todos.forEach((todo: any) => server.schema.create("todo", todo));
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return {
        todos: schema.all("todo").models,
      };
    });

    this.post("/todos", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const todo = schema.create("todo", attrs);

      const todos = schema.all("todo").models;
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {
        todo: todo,
      };
    });

    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const newAttrs = JSON.parse(request.requestBody);
      const todo = schema.find("todo", id);
      todo?.update(newAttrs);

      const todos = schema.all("todo").models;
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {};
    });

    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todo", id);
      todo?.destroy();

      const todos = schema.all("todo").models;
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {};
    });
  },
});
