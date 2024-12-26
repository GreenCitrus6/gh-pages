'use client';

import TodoItem from "./todoitem";
import {v4 as uuidv4} from "uuid";
import { useState, useEffect } from "react";


export default function ToDo() {
    const [taskList, setTaskList] = useState([]);
    const taskInput = document.querySelector("#todoInput");

    //if localstorage isn't empty, load it into taskList
    useEffect(() => {
        const taskData = window.localStorage.getItem('TASKS');
        if (taskData.length > 0) setTaskList(JSON.parse(taskData));
    }, [])

    //update tasks in localstorage on each change of TaskList's state
    useEffect(() => {
        window.localStorage.setItem('TASKS', JSON.stringify(taskList));
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
        min-w-[25%] w-48 h-[450px]">

           <div className="w-full h-full">
                <h2>todo list</h2>
                <div className="w-full h-full">
                    <ul className="flex flex-col">
                        {taskList.map((task, index) => {
                            return(
                                <TodoItem task={task} key={task.id} taskIndex={index} taskId={task.id}
                                taskList={taskList} setTaskList={setTaskList} />
                            );
                        })}

                        {/* <TodoItem task="hi"/> */}
                    </ul>
                </div> 
            </div> 

            <div id="inputContainer" className="w-full">
                <input type="text" id="todoInput"></input>
                <button onClick={addTask}
                >+</button>
                <button onClick={clearTasks}>
                    c
                </button>
            </div>
        </section>
    );
}