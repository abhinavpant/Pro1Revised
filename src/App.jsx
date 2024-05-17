import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Products from "./Components/Products/Products"
import AOS from "aos";
import "aos/dist/aos.css"
const App= ()=> {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <Navbar />
      <Hero/>
      <Products/>
    </div>
  )
}

export default App