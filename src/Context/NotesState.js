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

  
  const deleteTask=(id)=>{
    console.log("Deleting the note with id" + id);
    let newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);

  }
  
    return (
      <NotesContext.Provider
        value={{
          tasks,
          setTasks,
          deleteTask

        }}
      >
{props.children}
      </NotesContext.Provider>
    );
  };
  
  export default NotesState;