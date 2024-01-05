import { Task } from "../models/Tasks";

interface taskRowProps {
    task:Task,
    toggleTask:(task:Task)=> void,
}
export const TaskRow = (props:taskRowProps) => {
    const {task,toggleTask} = props;
    return (
    <tr key={task.name}>
        <td className="d-flex justify-content-between">{task.name}
        <input type="checkbox" checked={task.done} onClick={()=>{toggleTask(task)}}/>
        </td>
    </tr>);
}