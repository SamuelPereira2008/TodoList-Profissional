import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

export interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}

export interface ITodoWitchoutId {
  label: string;
  complete: boolean;
}
export const TodoAPI = {
  async getAll() {
    const response = await axiosInstance.get("/todos");
    return response.data.todos as ITodo[];
  },

  async create(data: ITodoWitchoutId) {
    const response = await axiosInstance.post("/todos", data);
    return response.data.todo as ITodo;
  },

  async updateById(id: string, data: Partial<ITodoWitchoutId>) {
    await axiosInstance.put(`/todos/${id}`, data);
    return;
  },

  async deleteById(id: string) {
    await axiosInstance.delete(`/todos/${id}`);
    return;
  },
};
