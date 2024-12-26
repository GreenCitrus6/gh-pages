'use client';

import TodoItem from "./todoitem";
import {v4 as uuidv4} from "uuid";
import { useState } from "react";

export default function ToDo() {
    const [taskList, setTaskList] = useState([]);
    let tasks = [];
    
    function addTask(taskName) {
        let newTask = {
            id: uuidv4(),
            taskName: taskName,
            complete: false
        };
        
        tasks.push(newTask);
        setTaskList(tasks);
    }


    return(
        <section className="flex justify flex-col items-start
        min-w-[25%]">
            <h2>todo list</h2>
            <div>
                <ul className="flex flex-col">
                    {tasks.map((task) => {
                        return(
                            <TodoItem task={task.taskName} key={task.id}/>
                        );
                    })}
                    
                    {/* <TodoItem task="hi"/> */}
                </ul>
            </div>
            <div id="inputContainer">
                <input type="text" id="todoInput"></input>
                <button
                >+</button>
            </div>
        </section>
    );
}