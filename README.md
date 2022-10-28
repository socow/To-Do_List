# To-Do List

## DEMO

DEMO : [DEMO](https://dapper-paletas-87347a.netlify.app/)

# 프로젝트 설치 및 실행 방법

```
$ npm install
$ npm start
```

# 주요기능

1.로그인/회원가입<br>
2.To-DO List /작성/조회/수정/삭제

# 폴더 구조

```bash
![image](스크린샷 2022-10-29 오전 12.46.50.png)
1. apis : api 통신 함수 관리
2. Components : 공통된 컴포넌트 관리
3. pages : 페이지 단위 컴포넌트 폴더

```

### 사용 기술 stack

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=Styled Components&logoColor=white">

---

## 구현사항

# 로그인 / 회원가입

> Assignment1
> 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
> 이메일 조건: @ 포함
> 비밀번호 조건: 8자 이상
> 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요

- 로그인, 회원가입 버튼의 disabled로 조건을 충족할 경우 버튼이 활성화 되도록 설정하였습니다

```js
disabled={!(inputValue.email.includes("@") && inputValue.password.length > 7)}
```

> Assignment2
> 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
> 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
> 응답받은 JWT는 로컬 스토리지에 저장해주세요

- 로그인 실행되는 Fetch입니다
  `fetch`로 각 아이디, 비밀번호 입력 값을 담아 토큰 발행 요청을 보내어 로컬 스토리지에 저장 후, `todo` 페이지로 바로 이동합니다. 조건 미충족 및 입력을 잘못하여 토큰을 받을 수 없는 경우에는 로그인이 불가함을 `alert` 창 으로 안내 메세지를 보여줍니다.

```js
const handleRequest = (e) => {
  e.preventDefault();
  fetch(API.Login, {
    method: "POST",
    headers: { "Content-Type": " application/json" },
    body: JSON.stringify({
      email: inputValue.email,
      password: inputValue.password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        alert("로그인이 완료되었습니다");
        navigate(`/Todo`);
      } else {
        alert("아이디 또는 비밀번호를 확인해주세요");
      }
    });
};
```

> Assignment3
> 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
> 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
> 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

```js
// 토큰이 있는 상태로 `/`에 접속할 경우 `todo` 페이지로 useNavigate함수를 사용하여 이동하게 했습니다
const navigate = useNavigate();
useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate(`/todo`);
  }
});

// 토큰이 없는 상태로 `todo`에 접속할 경우 `/` 페이지로 useNavigate함수를 사용하여 이동하게 했습니다
useEffect(() => {
  if (!localStorage.getItem("token")) {
    navigate(`/`);
  }
});
```

---

# 투두 리스트

> Assignment4
> /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
> 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
> 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

```js
//투두리스트 페이지 연결시 useEffect로 해당 계정의 투두리스트 데이터를 받아온 뒤,map함수를 사용해서 렌더링하여 투두 리스트의 목록을 보여줍니다

const getTodo = () => {
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

useEffect(() => {
  getTodo();
}, []);

{
  todoData?.map(({ id, isCompleted, todo }) => (
    <TodoList
      key={id}
      id={id}
      isCompleted={isCompleted}
      todo={todo}
      getTodo={getTodo}
    />
  ));
}

//작성 버튼을 클릭하면 함수가 실행됩니다 할 일을 작성한것을 스테이트에 저장하여 관리하고 API를 호출하여 서버데이터에 데이터를 추가합니다
const createTodoFunction = () => {
  fetch(API.Todo, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": " Application/json",
    },
    body: JSON.stringify({
      todo: todoValue.todo,
    }),
  });
  setTimeout(() => {
    getTodo();
  }, 200);

  setTodoValue({ todo: "" });
};
```

- Update

```js
//실행된 컴포넌트에 부여받은 id를 사용하여 API를 호출합니다 원래 존재하는 투두리스트의 내용을 수정하고 수정된 투두 리스트를 리렌더링 합니다
const updateTodo = () => {
  setIsUpdata(false);
  fetch(`${API.Todo}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": " Application/json",
    },
    body: JSON.stringify({
      todo: todoValue.todo,
      isCompleted: check,
    }),
  });
  setTimeout(() => {
    getTodo();
  }, 200);
};
```

- Delete

```js
//실행된 컴포넌트의 id를 기준으로 해당하는 투두리스트를 삭제합니다 그리고 다시 데이터를 호출하여 리렌더링합니다
const deleteTodo = () => {
  fetch(`${API.Todo}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  setTimeout(() => {
    getTodo();
  }, 200);
};
```
