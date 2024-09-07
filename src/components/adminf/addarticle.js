import mycss from '../../css/mycss.css';
import React, { useState } from 'react';
import axios from 'axios';


export default function Control(){




  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const imgElement = document.getElementById('uploaded-image');
    if (event.target.files.length > 0) {
      const file =event.target.files[0];
      const objectURL = URL.createObjectURL(file);
      imgElement.src = objectURL;
    } else {
      imgElement.src = ''; // Clear the image if no file is selected
    }
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios
      .post('http://localhost:5000/admin/controll', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setUploadedFileName(response.data.filename);
      })
      .catch((error) => {
        console.error('Error uploading file: ' + error);
      });
  };


return(
   

    <div className="container"  >

      
        
    <div className='row'>
    <nav className="navbar navbar-expand-lg mynav custom-navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#"><b>Add Article</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><b>Celles</b></a>
        </li>
      </ul>
    </nav>
    </div>

    <br></br>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card" style={{width:'420px',height:'400px'}}>
          <div className="card-header">
            Image Preview
          </div>
          <div class="card-body" >

            <img id="uploaded-image" src="*" class="img-fluid" style={{width:'420px',height:'320px'}}  alt="Uploaded Image"/>
          </div>
        </div>
      </div>
    </div>
    
    
    <br></br>

    <div className='row'>
 
<form>

            <label style={{color:'green'}}><b>Name</b></label>
    <input type="text" className="form-control border-success" id="name" aria-describedby="emailHelp" placeholder="Article Name"/>
<br></br>
            <label style={{color:'green'}}><b>Description</b></label>
    <input type="text" className="form-control border-success" id="exampleInputPassword1" placeholder="Description"/>
              

<br></br>
    <label style={{color:'green'}}><b>price</b></label>
    <input type="text" className="form-control border-success" id="exampleInputPassword1" placeholder="price"/>

       <br></br>
       <div>
     
     <input type="file" className="border-success form-control" onChange={onFileChange} />
    
     {uploadedFileName && (
       <p>Uploaded File: {uploadedFileName}</p>
     )}
   </div>
  

               <br></br>
               <br></br>
                <button type="submit" className="btn btn-success form-control" onClick={onFileUpload}>add</button>              
                
       
    
</form>


    

    
    
    
    
    </div>
      
       
        
    
       </div>
      



);

}