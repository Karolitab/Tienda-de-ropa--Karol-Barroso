import react from 'react';
import React, { useState } from 'react'; 
export default function Counter(){

const min = 1;
const max = 10;

const [add, setAdd] = useState(min);

function adittion() {
const newValue = add + 1;
if (newValue <= max) {

    setAdd(newValue);
    }
}
function substraction() {
    const newValue = add - 1;
    if (newValue >= min) {
        setAdd(newValue);
    }

}
function onAdd() {
    alert(`Compraste ${add} items!`);
    }

return (
    <>
    <div className="counter">
    <button onClick={substraction}> - </button>
    <span>{add} </span>
    <button onClick={adittion}>+ </button>
    <button onClick={onAdd}>Agregar al carrito</button>
    </div>
    </>
);
};
