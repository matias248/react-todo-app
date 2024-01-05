import { Task } from "../models/Tasks";
import { TaskRow } from "./TaskRow";

interface taskTableProps {
    tasks:Task[],
    toggleTask:(task:Task)=> void,
    showCompleted?:boolean;
}

export const TaskTable = (props:taskTableProps): React.JSX.Element => {
    const taskTableRows = (doneValue:boolean) =>{
        return (props.tasks.filter(task => task.done === doneValue).map((task:Task) => <TaskRow toggleTask={props.toggleTask} task={task}></TaskRow> ));
    }
    
    return ( <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
            {taskTableRows(props.showCompleted ?? false)}
        </tbody>
      </table>);

}
