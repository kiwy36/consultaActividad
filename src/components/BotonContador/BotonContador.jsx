import { useState } from 'react';
import './Boton.css';


const BotonContador = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);

    const Increment = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };

    const Decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>tienes {count} cosos marcados</h1>
            <button onClick={Decrement}>-</button>
            <button onClick={Increment}>+</button>
            <button onClick={()=>setCount(0)}> re iniciar </button>
        </div>
    );
};

export default BotonContador;




/*

const BotonContador = ()=> {
    const [contador, setContador] = useState(0);
    return (
    <div>
        <h1>tienes {contador} cosos marcados</h1>
        <button onClick={()=>setContador(contador+1)}> Sumar una unidad</button>
        <button onClick={()=>setContador(contador-1)}> restar una unidad</button>
        <button onClick={()=>setContador(0)}> re iniciar </button>
    </div>
    );
}

export default BotonContador;






*/