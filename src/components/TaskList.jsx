export const Tasks=(props)=>{
    const {id,text,completed}=props;
    // console.log(completed)
        return(
        <div className="tasklist">
            <h3 className="id">id: {id}</h3>
            <h3 className="task">Tarea: {text}</h3>
            <h3 className="status">Estado: {(completed==true)?'Completado':'No completado'}</h3>
            <hr />
        </div>
        );
        
}