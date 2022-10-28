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

export const updateTodoRequest = (
  setIsUpdata,
  id,
  todo,
  { isCompleted: check }
) => {
  setIsUpdata(false);
  fetch(`${API.Todo}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": " Application/json",
    },
    body: JSON.stringify({
      todo,
      isCompleted: check,
    }),
  });
};

export const deleteTodoRequsest = (id) => {
  fetch(`${API.Todo}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
