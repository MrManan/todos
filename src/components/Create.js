import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
function Create() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodos = [...todos, { id: Date.now(), text: newTodo }];
    setTodos(newTodos);
    setNewTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center vh-100 justify-content-center">
          <div className="col-md-6">
            <h2 className="text-danger text-center mb-5">
              TODO LIST USING LOCALSTORAGE
            </h2>
            <div className="form-group">
              <TextField
                id="standard-name"
                label="Add"
                className="form-control"
                onChange={handleNewTodoChange}
                InputProps={{
                  endAdornment: (
                    <AddIcon cursor="pointer" onClick={handleAddTodo} />
                  ),
                }}
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="shadow p-4 ">
              <button type="button" className="btn  btn-primary ">
                Create
              </button>
              <table className="table text-center table-hover text-primary border  mt-3 ">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>ID</th>
                    <th>NAMES</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.text}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
