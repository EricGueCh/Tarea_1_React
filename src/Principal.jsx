import { Color } from './components/ColorChanger';
import './index.css';
import { colores } from './utils/colores';
import { tasks } from './utils/tareas';
import { Tasks } from './components/TaskList';

export const Principal =()=>{
    return(
        <main>
            <h1>Componente: "ColorChanger"</h1>
            {
            colores.map((color)=>(
                <Color
                key={color.nombre}
                {...color}
                />
            ))
            }
            <hr />
            <h1>Componente: "TaskList"</h1>
            {
            tasks.map((task)=>(
                <Tasks
                key={task.id}
                {...task}
                />
            ))
            }
        </main>
    );
}