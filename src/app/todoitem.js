
export default function TodoItem({task}) {

    return (
        <li>
            <input type="checkbox"
                className="mr-2"></input>
            <span>{task}</span>
        </li>
    );
}