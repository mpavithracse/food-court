
import{Route, Routes} from  'react-router-dom';
import HomeComp from './HomeComp/HomeComp';
import About from './HomeComp/About';
import Contact from './HomeComp/Contact';
import Menu from './HomeComp/Menu';
import MenuComp from './MenuComp/MenuComp';

const Router = () =>{

    return(
        <Routes>
        <Route path="/" element={<HomeComp/>} />
        <Route path="/Home" element={<HomeComp/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/MenuComp/:id" element={<MenuComp />} />
      </Routes>
    )
}

export default Router;