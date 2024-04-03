export const Color=(props)=>{
    const {nombre, color}=props
    return(
    <div className='cuadrado' style={{backgroundColor: color}}>{nombre}</div>
    );
}