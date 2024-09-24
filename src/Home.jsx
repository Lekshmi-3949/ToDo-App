import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import SideBar from "./components/Drawer"
import ads1 from "../src/assests/ads1.jpg"
import ads2 from "../src/assests/adss2.png"
import ads3 from "../src/assests/ads3.png"
import Carousel from "./components/Carousel";
import { motion } from "framer-motion";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ViewProfile from "./Pages/Profile/ViewProfile";

const ads = [
  { image: ads1 , description: 'Amazon' },
  { image: ads2, description: 'Boat' },
  { image: ads3, description: 'Spotify' },
  
];
function Home() {
  return (
    // <div>
    
    <div className="App">
      {/* < SideBar /> */}
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
      
        <Todos />
        <DisplayTodos />
      </motion.div>
      <Carousel ads={ads} />
    </div>
  

// </div>

  );
}

export default Home;