import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Navigation from "./components/Navigation";

import 'bootstrap/dist/css/bootstrap.css'
import StartPage from "./pages/StartPage";
import ContactPage from "./pages/ContactPage";
import MenuPage from "./pages/MenuPage";
import MenuTempuraSushiPage from "./pages/MenuTempuraSushiPage";
import MenuPokeBowlPage from "./pages/MenuPokeBowlPage";
import MenuEggRollsPage from "./pages/MenuEggRollsPage";
import MenuDishPage from "./pages/MenuDishPage";

function App() {
  return (
    <div className="container">

      <h1>My restaurant</h1>
      <Navigation />
      <Routes>
        <Route 
          path="/" element={<StartPage/>} 
        />
        <Route 
          path="/contact" element={<ContactPage />} 
        />
        <Route 
          path="/menu" element={<MenuPage />} 
        />
        <Route path="/menu/:dish" element={<MenuDishPage/>} />
        {/* <Route 
          path="/menu/tempura-sushi" element={<MenuTempuraSushiPage />} 
        />
        <Route 
          path="/menu/poke-bowl" element={<MenuPokeBowlPage />} 
        />
        <Route 
          path="/menu/egg-rolls" element={<MenuEggRollsPage />} 
        /> */}
      </Routes>
    </div>
  );
}

export default App;
