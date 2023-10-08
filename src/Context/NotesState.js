import React, { useState } from "react";

import NotesContext from "./NotesContext";


const NotesState = (props) => {
  
    const tasksInitial = [
        {
          title: "Task 1",
          important: false,
          description: "This is the description for this task",
          date: "2023-04-12",
          dir: "Main",
          completed: true,
          id: "t1",
        },
        {
          title: "Task 2",
          important: true,
          description: "This is the description for this task",
          date: "2023-05-15",
          dir: "Main",
          completed: true,
          id: "t2",
        },
        {
          title: "Task 3",
          important: false,
          description: "This is the description for this task",
          date: "2023-08-21",
          dir: "Main",
          completed: false,
          id: "t3",
        },
      ];
  
    const [tasks, setTasks] = useState(tasksInitial);
  
  
    // //Edit a note
    // const editTask = async (id, title, description, tag) => {
    //   //API Call
  
    //   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": localStorage.getItem("token"),
    //     },
  
    //     body: JSON.stringify({ title, description, tag }),
    //   });
    //   const json = response.json();
    //   console.log(json);
  
    //   //Logic to edit a note
    //   for (let index = 0; index < tasks.length; index++) {
    //     let element = tasks[index];
    //     if (element._id === id) {
    //       element.title = title;
    //       element.description = description;
    //       element.tag = tag;
    //     }
    //   }
    //   props.showAlert("Edited the note successfully", "success");
    // };
  
    return (
      <NotesContext.Provider
        value={{
          tasks,
          setTasks

        }}
      >
{props.children}
      </NotesContext.Provider>
    );
  };
  
  export default NotesState;