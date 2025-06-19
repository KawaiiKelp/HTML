let todos = []; // 할 일 목록 배열

function createTodoElement(todo, index) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.onchange = () => {
        todos[index].done = checkbox.checked
        saveTodos();
        renderTodos();
        if (checkbox.checked) {
            span.classList.add("done");
        } else {
            span.classList.remove("done");
        }
    };
    
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.marginLeft = "8px";
    if (todo.done) {
        span.classList.add("done");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => {
        deleteTodo(index);
  };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}

// 할일 추가

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text === "") return;

    const newTodo = { text, done: false };
    todos.push(newTodo);
    saveTodos();
    renderTodos();

    input.value = ""; // 입력창 초기화
    input.focus(); // 커서 입력창으로 보내기

}

// 삭제
function deleteTodo(index) {
    todos.splice(index, 1); // 해당 인덱스의 요소 제거
    saveTodos();
    renderTodos();
}

function clearAll() {
  if (!confirm("정말로 모든 할 일을 삭제하시겠습니까?")) return;
  todos = [];
  saveTodos();
  renderTodos();
}

// 할일 목록 저장
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 할일 목록 불러오기
function loadTodos() {
    const stored = localStorage.getItem("todos");
    if (stored) {
        todos = JSON.parse(stored);
    }
}

// 화면에 표시
function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = ""; // 비우고 다시 그림

    todos.sort((a, b) => {
        return a.done - b.done; // false(0)가 앞에, true(1)가 뒤에
    })

    todos.forEach((todo, index) => {
        const li = createTodoElement(todo, index);
        list.appendChild(li);
    })
}

document.getElementById("todoInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

loadTodos();
renderTodos();