import {obc} from '../App';
import React, { useContext } from "react";
import '../css/panel.css'
import cart from  '../layout/spring.jpg';
function Discover(){
    const {ob,setob} = useContext(obc);
  
    return( 
        <div id="mydiscover" className="modal">

        
        <div className="modal-content">
          <div className="modal-header">
            <span className="close"  onClick={()=>{var modal = document.getElementById("mydiscover");modal.style.display='none';}}>&times;</span>
            <h5>{ob[0]}</h5>
          </div>
          <div className="modal-body fluid-container" id="discover">
          <div className='row'>
    
    <div className="card h-10 shadow-sm"><br></br><div><img src={cart} style={{width:200}} className="card-img-top rounded float-left " alt="..."/> <span className="float-end badge rounded-pill bg-danger">{ob[2]} OFF</span> <span className="float-end price-hp">{ob[1]}&euro; &nbsp;</span> </div> 
    <div className="card-body">
      <h5 className="card-title"><h3>{ob[0]}</h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5> 
    <div className="text-center my-4"> <a href="#" className="btn btn-primary">ADD TO PANEL</a> </div> 
    </div> 
    
    </div>
    </div>
    
          </div>
         
        </div>
      
      </div>);
}
export default Discover;