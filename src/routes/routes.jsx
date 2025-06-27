import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuidado from "../views/cuidado/index";
import Elevador from "../views/elevador/index"; 
import Semaforo from "../views/semaforo/index";    
import Todo from "../views/todo/index";    
import '../../src/index.css';
import Home from "../../src/views/home/index";



export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cuidado" element={<Cuidado/>} />
                <Route path="/elevador" element={<Elevador/>} />
                <Route path="/semaforo" element={<Semaforo />} />
                <Route path="/todo" element={<Todo/>} />
            </Routes>
        </BrowserRouter>
    );
}
