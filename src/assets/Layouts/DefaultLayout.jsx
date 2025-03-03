import { Outlet } from "react-router-dom";

function DefaultLayout(){
    return (
        <>
        <header><h1>titolo</h1></header>
        <Outlet /> {/* Outlet è il componente che ci permette di definire dove verranno visualizzati i componenti figli all'interno di un layout */}
        </>
    )
}

export default DefaultLayout;