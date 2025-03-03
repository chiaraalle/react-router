/*Creiamo il frontend del nostro Blog e le sue pagine!
- Partiamo installando React Router DOM: npm install react-router-dom
- Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
- Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
Bonus
- Centralizzare la Navbar grazie a un Layout
- Gestire la classe active */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter> {/* BrowserRouter è il componente principale che ci permette di utilizzare il routing */}
        <Routes> {/* Routes è il componente che ci permette di definire le rotte della nostra applicazione */}
          <Route path="/" element={<Home />} /> {/* Route è il componente che ci permette di definire quale componente deve essere mostrato per un determinato percorso (URL) */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
