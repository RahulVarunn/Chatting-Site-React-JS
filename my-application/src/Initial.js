import { useEffect, useState } from 'react';
import App from './App'
import './initial.css';

function Initial() {
    var [id, setId] = useState(localStorage.getItem("username"));
    var [name, setName] = useState('');
    var [date, setdate] = useState('');
    


    



const xyz = (event) => {
        if (event.key === "Enter") {
           console.log("Enter key is pressed");
        const result = Math.random().toString(36).substring(2,10);
           localStorage.setItem("username", event.target.value+result);
           localStorage.setItem("name", event.target.value);
           var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;

           localStorage.setItem("creation",today)
           setName(localStorage.getItem("name"))
           setId(localStorage.getItem("username"))
           setdate(localStorage.getItem("creation"))
           
           
        }  
 }



  return (


<div>



{ id!=null?

<App username={name}></App>

:




<div> 
   
<div className="newsletter-subscribe center rounded-5 p-4" style={{background:'#efeef0'}}>
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Welcome To The World of Anonymous</h2>
                <p className="text-center"></p>
            </div>
            <form className="form-inline" >
                <div className="form-group inp-x"><input className="form-control" onKeyPress={xyz} placeholder="Enter Your User Name "/></div>
                {/* <div className="form-group"><button className="btn btn-primary" type="submit">Subscribe </button></div> */}
            </form>
        </div>

</div>

   
   







</div>








}


</div>
        
  )
}

export default Initial