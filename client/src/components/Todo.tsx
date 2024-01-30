import React, { useEffect, useState } from "react";
import axios from "axios";
const Todo = () => {
  interface TODO {
    idWork: number;
    name: string;
    status: number;
  }
  const [listTodo, setListTodo] = useState<TODO[]>([]);
  const [newtodo, setNewtodo] = useState("");
  //get All
  const loadTodo = () => {
    axios
      .get("http://localhost:8080/api/v1/todo/")
      .then((res) => setListTodo(res.data.data))
      .catch((err) => console.log(err));
  };
  //Xoa
  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/api/v1/todo/${id}`)
      .then(() => loadTodo())
      .catch((err) => console.log(err));
  };
  //them
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/todo/", { work: newtodo })
      .then(() => {
        loadTodo();
        setNewtodo("");
      })
      .catch((err) => console.log(err));
  };
  //Update
  const handleUpdate = (id: number) => {
    axios
      .put(`http://localhost:8080/api/v1/todo/${id}`)
      .then(() => loadTodo())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadTodo();
  }, []);
  console.log(listTodo);

  return (
    <div className="container">
      <>
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="myInput"
              placeholder="Title..."
              value={newtodo}
              onChange={(e) => setNewtodo(e.target.value)}
            />
            <button className="addBtn" type="submit">
              Add
            </button>
          </form>
        </div>
        <ul id="myUL">
          <ul id="myUL">
            {listTodo.length > 0 &&
              listTodo.map((e, i) => (
                <li key={i} className={e.status === 1 ? "checked" : ""}>
                  {e.name}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.idWork)}
                  >
                    Xóa
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleUpdate(e.idWork)}
                  >
                    Hoàn thành
                  </button>
                </li>
              ))}
          </ul>
        </ul>
      </>
    </div>
  );
};

export default Todo;
