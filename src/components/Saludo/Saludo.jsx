import React, { useState, useEffect } from "react";

const Saludo = () => {
    const [mensaje, setMensaje] = useState("Cargando...");
    const [error, setError] = useState("");
    useEffect(() => {
        const obtenerSaludo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Saludos estimado cliente!");
        }, 3000);
        });
    obtenerSaludo
        .then((respuesta) => {
            setMensaje(respuesta);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);
    return (
        <div>
        <h1>{mensaje}</h1>
        </div>
    );
};

export default Saludo;
