import React, { useState } from "react";
import "../Styles/CenterSection.css";
import NewTaskModal from "./NewTaskModal";
import "../Styles/NewTaskModal.css";
import Card from "./Card";
import { useContext } from "react";
import NotesContext from "../context/NotesContext.js";
// import $ from 'jquery'

export default function CenterSection(props) {
  const { tasks,addTask,  toggleFav, toggleStatus } = useContext(NotesContext);

  var date = new Date().toDateString();
  const [list, setlist] = useState(false);
  const [id,setId]=useState(3)

  const listView = () => {
    setlist(true);
    console.log(list);
  };

  const gridView = () => {
    setlist(false);
  };
  const [task, setTask] = useState({
    title: "",
    important: false,
    description: "",
    date: "",
    dir: "",
    completed: false,
    id: "",
  });

  const handleClick = () => {
    console.log("Clicked");
    addTask(id,task.title,task.description,task.date,task.dir,task.important,task.completed)
    setId(id+1)
  };
  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row d-flex">
        <form className="d-flex col-5 my-4 nosubmit" role="search">
          <input
            className="form-control me-2 nosubmit "
            type="search"
            placeholder="Search Task"
            aria-label="Search"
            data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
            // style={{color:"red",backgroundColor:"#e0cfcf"}}
          />
        </form>
        <span className="col my-4"> {`${date}`}</span>
        <div className="col-1 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            // onClick={onClick}
            className="bi bi-bell-fill "
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary text-center align-center my-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            
          >
            Add a Task
          </button>

          <div
            className={`modal fade ${
              props.isDarkMode ? "dark-mode " : "light-mode "
            }`}
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add a Task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="task-name" className="col-form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Eg : Study for the exam"
                        name="title"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="task-date" className="col-form-label">
                        Date
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        placeholder="DD-MM-YYYY"
                        name="date"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="task-description"
                        className="col-form-label"
                      >
                        Description (Optional)
                      </label>
                      <textarea
                        type="text-area"
                        className="form-control"
                        id="description"
                        placeholder="Eg : Study for the exam"
                        name="description"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="task-directory"
                        className="col-form-label"
                      >
                        Select a directory
                      </label>
                      <select
                        className="form-control"
                        name="dir"
                        onChange={onChange}
                      >
                        <option>Main</option>
                        <option>Sub</option>
                      </select>
                    </div>

                    <div className="mb-3 input-group mx-3">
                      <input
                        className="mx-3 checkbox"
                        type="checkbox"
                        name="important"
                        id="important"
                        onChange={onChange}
                      />

                      <span className="text">Mark as important</span>
                    </div>
                    <div className="mb-3 input-group mx-3">
                      <input
                        className="mx-3 checkbox"
                        type="checkbox"
                        id="completed"
                        name="completed"
                        onChange={onChange}
                      />

                      <span className="text">Mark as Completed</span>
                    </div>
                  </form>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleClick}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex my-5 row">
          <div className="col-6 align-self-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list-task mx-2"
              viewBox="0 0 16 16"
              onClick={listView}
            >
              <path
                fillRule="evenodd"
                d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
              />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path
                fillRule="evenodd"
                d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-grid mx-2"
              viewBox="0 0 16 16"
              onClick={gridView}
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </svg>
          </div>
          <div className="col-3 align-self-end">
            <select
              className="form-select sortlist"
              aria-label="Default select example"
              data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
            >
              <option defaultValue={true}>Sort by</option>
              <option value="1">Order Added</option>
              <option value="2">Earliest First</option>
              <option value="3">Older First</option>
              <option value="4">Completed First</option>
              <option value="5">Uncompleted First</option>
            </select>
          </div>
        </div>
        {tasks.map((task, index) => {
          return (
            <Card
              index={index}
              toggleFav={toggleFav}
              toggleStatus={toggleStatus}
              isListView={list}
              isDarkMode={props.isDarkMode}
              title={task.title}
              important={task.important}
              description={task.description}
              date={task.date}
              dir={task.dir}
              completed={task.completed}
              id={task.id}
            />
          );
        })}
        <span className="col-8">
          <NewTaskModal isDarkMode={props.isDarkMode} isListView={list} />
        </span>
      </div>
      {/* <footer className="mt-auto fixed-bottom text-center">
          <p className="footer mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <a
              className="no-text-decoration link-offset-2 link-underline link-underline-opacity-0 mx-2"
              href="https://github.com/charankulal"
            >
              Charan-k-github
            </a>
          </p>
        </footer> */}
    </>
  );
}
