import mycss from '../../css/mycss.css';
function Admin(){
    return(
<div className="admindiv">
<form>

            <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

            <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              
               <br></br>
                <button type="submit" class="btn btn-primary" onClick={()=>{
window.location.pathname = '/admin/controll';
                }}>Submit</button>              
                
       
    
</form>

</div>
    );

}
export default Admin;