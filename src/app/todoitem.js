'use client';

import Image from "next/image";
import minus from "../../public/minus.svg";

export default function TodoItem({ task, taskId, taskIndex, taskList, setTaskList}) {

    const toggleCompletion = () => {
        const updatedTasks = taskList.map((t, i) => {
            if (i === taskIndex) {
                t.complete = !t.complete;
                return t;
            } else {
                return t;
            }
        });

        setTaskList(updatedTasks);
    }

    const deleteItem = () => {
        let tempList = taskList.filter(t => t.id !== taskId);

        setTaskList(tempList);
    }

    return (
        <li className="flex flex-row justify-between w-full">
            <div>
            <input type="checkbox"
                className="mr-2"
                defaultChecked={task.complete ? 'checked' : ''}
                onClick={toggleCompletion}></input>
            <span className={task.complete ? "line-through text-gray-500" : ""}
            >{task.taskName}</span>
            </div>

            <button onClick={deleteItem}>
                <Image src={minus} 
                alt="-" tite="remove task" />
            </button>
        </li>
    );
}