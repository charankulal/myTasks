import React, { useState } from "react";

import NotesContext from "./NotesContext";


const NotesState = (props) => {
    const host = "https://tasks.free.beeceptor.com";
    const notesInitial = [
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
  
    const [tasks, setTasks] = useState(notesInitial);
  
    // Get all notes
    const getAllTasks = async () => {
      var response = await fetch(`${host}/api/fetchalltasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      var json = await response.json();
  
      console.log("response is ", json);
      setTasks(json);
    };
    // // Add a note
  
    // const addTask = async (title, description, tag) => {
    //   //TODO:API call
    //   // API Call
    //   const response = await fetch(`${host}/api/notes/addnote`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": localStorage.getItem("token"),
    //     },
    //     body: JSON.stringify({ title, description, tag }),
    //   });
  
    //   const note = await response.json();
    //   setTasks(tasks.concat(note));
    //   props.showAlert("Created Notes successfully", "success");
    // };
  
    // // Delete a note
    // const deleteTask = async (id) => {
    //   //API call
    //   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": localStorage.getItem("token"),
    //     },
    //   });
    //   var json = response.json();
    //   console.log(json);
  
    //   //Logic to delete node
    //   console.log("Deleting the note with id" + id);
    //   let newNotes = tasks.filter((note) => {
    //     return note._id !== id;
    //   });
    //   setTasks(newNotes);
    //   props.showAlert("Deleted a note successfully", "danger");
    // };
  
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
        //   addTask,
        //   deleteTask,
        //   editTask,
          getAllTasks,
        }}
      >
        {" "}
        {props.children}{" "}
      </NotesContext.Provider>
    );
  };
  
  export default NotesState;