import { API } from "./api";

export const todoRequest = (setTodoData) => {
  fetch(API.Todo, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setTodoData(res);
    });
};

export const createTodoRequest = (todo, setTodoValue) => {
  fetch(API.Todo, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": " Application/json",
    },
    body: JSON.stringify({
      todo,
    }),
  });

  setTodoValue({ todo: "" });
};
