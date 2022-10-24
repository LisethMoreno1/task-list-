import "../tasklist.css";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";


export function TaskList(props) {
  return (
    <div className="">
      <input
        type="text"
        className="InputAgregar"
        placeholder="Add your new todo"
      />
      <button class="btn btn-primary btn-sm" type="submit">
        {props.botones}
      </button>

      <div className="Listado">
        <label className="container-1">
          <input type="checkbox" className="Marcador" />
          <span className="checkmark-1">{props.tarea}</span>
          <span className="Editarboton"><AiFillEdit/></span>
          <span className="Eliminarboton"><AiOutlineCloseCircle /></span>
        </label>
        <label className="container-2">
          <input type="checkbox" className="Marcador" />
          <span className="checkmark-1">{props.tarea1}</span>
          <span className="Editarboton"><AiFillEdit/></span>
          <span className="Eliminarboton"><AiOutlineCloseCircle /></span>
        </label>
        <label className="container-3">
          <input type="checkbox" className="Marcador" />
          <span className="checkmark"> {props.tarea2}</span>
          <span className="Editarboton"><AiFillEdit/></span>
          <span className="Eliminarboton"><AiOutlineCloseCircle /></span>
        </label>
        <label className="container-4">
          <input type="checkbox" className="Marcador" />
          <span className="checkmark"> {props.tarea3}</span>
        </label>
      </div>
    </div>
  );
}
