import { Todo } from "./pages/Todo/Todo";
import { BrowserRouter, Route, Routes } from "react-router";
import {} from "./styles/App";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
