
import './App.css';
import Panel from './components/panel';
import Discover from './components/discover';
import Plants from './components/articles';
import Plantinfo from './components/plantInfo';

import Navbar from './components/navbar';  
import {Route, Routes} from "react-router-dom";
import Admin from './components/adminf/admin';
import Control from './components/adminf/addarticle';
import {createContext, useState } from 'react';
export const obc = createContext(null);
function App() {
   const [ob,setob]=useState([]);


   //setob({a:'a1',b:'b1'});
   //alert(ob.a+ob.b);
   // return (<Navbar/>); 
 return (
   
 <Routes>
    <Route path="/" element={
    
    <obc.Provider value={{ob,setob}}>
    <Navbar/><div className="container-fluid bg-trasparent my-4 p-3" style={{position:'relative'}}><Plantinfo/><br></br><div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"><Plants v={10}/></div></div><Panel/><Discover/>
    </obc.Provider>
   } />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/admin/controll" element={<Control/>} />
    </Routes>
 );
}

export default App;
