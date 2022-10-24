import "../task.css";


function Task(props) {
  return (
    <div>
      <span>{props.pendientes}</span>

      <button className="boton-personalizado-3">{props.button}</button>
    
    </div>
  );
}

export default Task;
