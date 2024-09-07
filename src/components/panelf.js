import React, { useContext } from "react";
import cart from  '../layout/spring.jpg';
import {obc} from '../App';
function Panelf(){
    let pro ='10%';
    let pri =12345;
    let nom='plant';
    let img='non';
    const {ob,setob} = useContext(obc);
const tob =[nom,pri,pro,img];
    const Call=()=>{setob(tob);var modal = document.getElementById("mydiscover");modal.style.display='block';
        };
    const Fill=()=>{const bdy = document.getElementById('myModalbody');const inerhtml ='<div style="display: flex; justify-content: space-between;" ><span>'+nom+'</span><span style="margin: 0 auto;font-size:20px;"><span style="margin-left: auto;font:blue;" >-</span>5<span style="margin-left: auto;font:blue;" >+</span></span><span style="margin-left: auto;" class="btn btn-danger">Delete</span></div>';bdy.innerHTML+=inerhtml;};
  
    return(
<>

<div className="col">
 <div className="card h-10 shadow-sm"> <img src={cart} className="card-img-top" alt="..."/> 
<div className="card-body">
 <div className="clearfix mb-3"> 
<span className="float-start badge rounded-pill bg-danger">{pro} OFF</span>
 <span className="float-end price-hp">{pri}&euro;</span> 
</div> <h5 className="card-title"><h3>{nom}</h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5> 
<div className="text-center my-4"><button className="btn btn-success" onClick={Call}>Discover</button> <button className="btn btn-primary" onClick={Fill}>+</button></div> 
</div> 

</div></div></>);
}
export default Panelf;