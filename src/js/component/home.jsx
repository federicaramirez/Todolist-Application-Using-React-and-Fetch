import React, {useState} from "react";


// create your first component
const Home = () => {

    const [tarea, setTarea] = useState("")
    const [listaTareas, setListaTareas] = useState([])
    const [listaVacia, setListaVacia] = useState ("No hay tareas")

    function subirTarea(e) {
        if (e.key === 'Enter') {
            e.preventDefault();

            setListaTareas([
                ...listaTareas,
                tarea
            ]); // suma la nueva sin borrar lo anterior
            console.log(listaTareas);
            setTarea("");
            setListaVacia("")
        } 

    }


    function eliminarElemento(id) {
        let sinEliminado = [];
        sinEliminado = listaTareas.filter((item,index) => {
            if (index !== id)  {
                return item
            } 
            if (listaVacia == "" && listaTareas.length == 1 ) {
                setListaVacia("No hay tareas")
            } 
        } ) 
        setListaTareas(sinEliminado);
    }
      


    return (
        <div>
            <div>
            <h1>Tareas</h1>
            </div>
            <div>
                <input type="text" className="form-control justify-content-center" id="formGroupExampleInput" placeholder="Escribir tarea"
                    value={tarea}
                    onChange={
                        (e) => setTarea(e.target.value)
                    }
                    onKeyDown={subirTarea}/>
            </div>
                <ul className="list-group list-group-flush">
					{listaTareas.map((item, id) => 
                    <li className = "list-group-item hidden" key={id}>{item} 
                    <button type="button" className="btn btn-outline-primary float-end" 
                    onClick={()=> eliminarElemento(id)}>x
                    </button>
                    </li> ) }
				</ul>
                {listaVacia}

            </div>
    );
};

export default Home;
