import { useState } from "react";

interface taskCreatorProps {
    createNewTask: (taskname: string) => void;
}

export const TaskCreator = (props: taskCreatorProps): React.JSX.Element => {

    const [newTaskName, setNewTaskName] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.createNewTask(newTaskName);
        setNewTaskName("");
    }

    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
                <input type="text" placeholder="Enter a new task" value={newTaskName} onChange={(event) => { setNewTaskName(event.target.value) }} className="form-control"></input>
            </div>
            <div className="col-3 p-0 d-flex align-items-center">
                <button type={"submit"} className="btn btn-primary btn-sm">Save</button>
            </div>
        </form>

    );
}