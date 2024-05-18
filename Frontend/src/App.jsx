import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"

import {Home} from "./Pages/Home/Home"
import Navbar from './Components/Navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css"
function app() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return(
  <BrowserRouter>
  <Navbar handleOrderPopup={handleOrderPopup}/>
  <Routes>
    <Route path='/' element= {<Home />}  />
  </Routes>
  </BrowserRouter>
  )
}
export default app