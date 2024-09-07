// src/Navbar.js
import React from 'react';
import mycss from '../css/mycss.css';
import cart from  '../layout/cart.png';

function Navbar() {
  return (
    
    
    <div className='mydiv'>
    <div className="container"  >

      
        
    <div className='col'><nav className="navbar navbar-expand-lg navbar-dark mynav " >
      <div className="container ">
      
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item cart ">
              <a className="nav-link " href="#" onClick={()=>{var modal = document.getElementById("myModal");modal.style.display='block';}}><img style={{with:'30px',height:'30px'}} src={cart}/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <form className="background" >
     <br></br>
<br></br>          <br></br>
<br></br>     <br></br>
<br></br>   
     <div className="input-group">
    
       <input type="text" className="form-control" placeholder="Search" />
       <div className="input-group-append">
       <button type="button" className="btn btn-success">Search</button>
       </div>
     </div>
   </form>


    
    
    
    
    </div>
      
       
        
    
       </div>
      
       </div>
       

       
  


   

  );
}

export default Navbar;
