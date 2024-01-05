
interface VisibilityControlProps{
    setShowCompleted:(boolean:boolean)=>void;
    cleanTasks:() => void;
    isChecked:boolean;
}
export const VisibilityControl = (props:VisibilityControlProps):React.JSX.Element =>{
    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete it?")){
            props.cleanTasks();
        }
    }
    
    return ( <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div>
        <input type="checkbox" checked={props.isChecked}onChange={e=> props.setShowCompleted(!e.target.checked)} className="form-check form-switch" ></input> <label>Show tasks done</label>
        </div>
        <button onClick={()=>handleDelete()} className="btn btn-danger btn-sm ">Clear</button>
      </div>
    );
}