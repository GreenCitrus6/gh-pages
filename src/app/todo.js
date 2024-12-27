'use client';

import TodoItem from "./todoitem";
import {v4 as uuidv4} from "uuid";
import { useState, useEffect } from "react";

import Image from "next/image";
import plus from "../../public/plus.svg";
import trash from "../../public/trash.svg";


export default function ToDo() {
    const [taskList, setTaskList] = useState([]);
    const taskInput = document.querySelector("#todoInput");

    //if localstorage isn't empty, load it into taskList
    useEffect(() => {
        const taskData = window.localStorage.getItem('TASKS');
        if (taskData === null) {window.localStorage.setItem('TASKS', JSON.stringify(taskList));}
        if (taskData != null)  { setTaskList(JSON.parse(taskData)); }
        // console.log("b");
    }, [])

    //update tasks in localstorage on each change of TaskList's state
    useEffect(() => {
            window.localStorage.setItem('TASKS', JSON.stringify(taskList));
            // console.log("a")
    }, [taskList]);

    const addTask = () => {
        let newTask = {
            id: uuidv4(),
            taskName: taskInput.value,
            complete: false
        };
        
        //create a copy of taskList's current state
        let tasksArr = [
            ...taskList
        ];
        
        //update copied arr
        tasksArr.push(newTask);
        
        //update state with the new arr
        setTaskList(tasksArr);
        console.log(taskList);

        taskInput.value = "";
    }

    const clearTasks = () => {
        setTaskList([]);
    }

    return(
        <section className="flex flex-col justify-between items-start
        max-w-80 w-full h-[450px]
        bg-sky-200 bg-opacity-70
        border-2 border-black rounded-lg 
        p-2">

            {/* title plus todos container */}
           <div className="w-full h-full">
                <h2 className="font-bold text-black">todo list</h2>
            {/* ul container */}
                <div className="w-full h-full">
                    <ul className="flex flex-col">
                        {taskList.map((task, index) => {
                            return(
                                <TodoItem task={task} key={task.id} taskIndex={index} taskId={task.id}
                                taskList={taskList} setTaskList={setTaskList} />
                            );
                        })}
                    </ul>
                </div> 
            </div> 

            {/* input container */}
            <div id="inputContainer" className="w-full 
            flex flex-row justify-between">
                <input type="text" id="todoInput"
                    className="w-full 
                    text-black 
                    border-slate-500 border-[1.5px] rounded-sm"
                ></input>
                
                <div className="flex flex-row">
                    <button onClick={addTask}>
                        <Image src={plus} 
                        alt="+" title="add task" />
                    </button>
                    <button onClick={clearTasks}>
                        <Image src={trash}
                        alt="c" title="delete all tasks" />
                    </button>
                </div>

            </div>
        </section>
    );
}