/*PARTE 1:Creiamo il frontend del nostro Blog e le sue pagine!
- Partiamo installando React Router DOM: npm install react-router-dom
- Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
- Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
Bonus
- Centralizzare la Navbar grazie a un Layout
- Gestire la classe active
PARTE 2: Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio!
- Aggiungiamo i link alla lista dei post
- Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post
Bonus
Proviamo a inserire nella pagina di dettaglio una navigazione che ci consenta di andare al post precedente e a quello successivo */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import AboutUs from "./assets/Pages/AboutUs"; 
import Posts from "./assets/Pages/Posts";
import SinglePost from "./assets/Pages/SinglePost";
import DefaultLayout from "./assets/Layouts/DefaultLayout";


function App() {

  return (
    <>
      <BrowserRouter> {/* BrowserRouter è il componente principale che ci permette di utilizzare il routing */}
        <Routes> {/* Routes è il componente che ci permette di definire le rotte della nostra applicazione */}
          <Route element={<DefaultLayout />}> 
            <Route path="/" element={<Home />} /> {/* Route è il componente che ci permette di definire quale componente deve essere mostrato per un determinato percorso (URL) */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
          </Route>  
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
