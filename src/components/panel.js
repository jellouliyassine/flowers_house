import React from "react";
import '../css/panel.css'

function Panel(){

  var list=<div className="row"><div className="col"></div><div className="col"></div></div>
    return( 
        <div id="myModal" className="modal">

        
        <div className="modal-content">
          <div className="modal-header">
            <span className="close"  onClick={()=>{var modal = document.getElementById("myModal");modal.style.display='none';}}>&times;</span>
            <h5>buy list</h5>
          </div>
          <div className="modal-body" id="myModalbody">
            <div>helloooooo</div>
          </div>
          <div className="modal-footer">
           
          </div>
        </div>
      
      </div>);
}
export default Panel;