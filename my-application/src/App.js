import { useEffect, useState } from 'react';
import { getDatabase,onChildAdded, ref,push, onValue,set,updateStarCount,postElement} from "firebase/database";
import './App.css';
import './Components/initial_2.css';




function App(props) {
	useEffect(()=>{
		scrollToBottom()
	})

	const [name, setName] = useState('');
	var [id, setId] = useState('');


	const [msg_date, setmsg_date] = useState('');
	const [msg,setMsg]=useState([]);
	const [chat_msg,setChat_msg]=useState('')
	const [date_cre,setdate_cre]=useState('')
	const db = getDatabase();
	const postListRef = ref(db, 'data_chat');


	useEffect(()=>{
		onChildAdded(postListRef, (x) => {
			console.log(x.val())
			setMsg(msg=>[...msg,x.val()])

		});
	},[]);




	useEffect(()=>{
        setId(localStorage.getItem("username"))
		setName(localStorage.getItem("name"))
		setdate_cre(localStorage.getItem('creation'))






	});


	const logout=()=>{
		localStorage.clear();
		window.location.reload(true)

	}


	// const Push = (event) => {
	// 	console.log("ssd")
	// 	setChat_msg(event.target.value)
		
	// //   const newPostRef = push(postListRef);
	// //   set(newPostRef, {
	// // 	 	id: id,
	// // 		username: name,
	// // 		msg:chat_msg,
			
	//   };
	// //   setChat_msg("")


	


	const send_data = (event) => {
		setChat_msg(event.target.value)
		if (event.key === "Enter") {
		   console.log("Enter key is pressed");
	  const newPostRef = push(postListRef);
	  const dateObject = new Date();

	  let date = dateObject.toUTCString().slice(0, 22);;
	  
	  set(newPostRef, {
		 	id: id,
			username: name,
			msg:chat_msg,
			creation_date:date_cre,
			msg_date:date



		})
				setChat_msg("")



	 }}






	 function scrollToBottom() {

        var objDiv = document.getElementById("x");
        objDiv.scrollTop = objDiv.scrollHeight;
    }



	return (













		


    <div classNameName=''>

{ id!=null?


<div className="container center">
<div className="row clearfix" >
    <div className="col-lg-12">
        <div className="card chat-app" >
   
            <div className="chat">
                <div className="chat-header clearfix">








  <div class="row">

    <div class="col-8">



<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
	<img src="https://cdn-icons-png.flaticon.com/128/11029/11029633.png" alt="avatar"/>
</a>
<div className="chat-about">
	<h6 className="m-b-0">{name.toLocaleUpperCase()}<br></br> <span className='text-muted  ' style={{fontSize:'12px'}}>Created On : {date_cre}</span></h6>
</div>



  </div>


    <div class="col-4 ">

{/* <button type="button" class="btn btn-danger">Danger</button> */}

	<a onClick={logout} className="btn btn-sm btn-outline-danger float-sm-end rounded-5">Leave Chat</a>
</div>    </div>





                </div>
                <div className="chat-history text-wrap" id="x">






                    <ul className="m-b-0">













					 {msg.map((c,i) => (
         
		 
	

		 <>
 
 { c.id==id?








<div >
            <div className="d-flex flex-row justify-content-end mb-3 pt-1 text-wrap">
              {/* <p className="small mb-1 text-muted">23 Jan 6:10 pm</p> */}
            </div>
            <div className="d-flex flex-row justify-content-end mb-3 pt-1">
              <div>
                <p className="small text-wrap p-1 me-2 mb-2 text-white  p-3 text-response " style={{backgroundColor:'#4a74ea',borderRadius:'15px 15px 1px 15px'}}>{c.msg}</p>
				  <p className="small mb-1 text-muted " style={{size:'5px'}}>{c.msg_date}</p>



              </div>
              {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style={{width: '25px', height: '70%'}}/> */}
            </div> 

			</div>

 :
 
 


<li className="clearfix">
<div className="message-data">
<img src="https://cdn-icons-png.flaticon.com/128/924/924915.png" alt="avatar"/>

	<span className="message-data-time">{c.username}</span>
</div>
<div className="text-wrap message other-message text-response p-3 ">{c.msg}</div>
<p className="small mb-1 text-muted  ">{c.msg_date}</p>

</li>
	   
 
 }
 
 
		 
 
		
 
			 </>
 
 
			 ))}




                      

						
                     
						                         
                  


                    </ul>



                </div>
                <div className="chat-message clearfix">
                    <div className="input-group mb-0">
						
                        {/* <div className="input-group-prepend no-border">
                            <span className="input-group-text no-border"  style={{border: 'none',fontSize:'20px'}}><i className="fa fa-send"></i></span>
                        </div> */}

						
                        <input type="text" style={{    outline: 'none', paddingLeft:'50px'}} className="inp-x input-group  text-wrap" placeholder="Enter text here..."   onKeyPress={send_data} value={chat_msg}  onChange={send_data}/>    

						  <div className="input-group-prepend no-border">
                            <span className="input-group-text no-border inp-icon "  ><i className="fa fa-send"></i></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>




// <section className=' content' style={{background: '#111619',height:' fit-content;'}}>







	
//   <div className="container-fluid  "  style={{height:' fit-content; '}}>

//     <div className="row  d-flex justify-content-center">
//       <div className="col-md-8 col-lg-6 col-xl-5">

//         <div className="card h-100" style={{backgroundColor:'#111619'}} >
//           <div style={{backgroundColor:'#111619',color:'white'}} className=" card d-flex justify-content-between  align-items-center p-3"
//            >

// <div>


// <div className="d-flex flex-row align-items-center">
// <center><h6 style={{color:'White'}}>{name.toLocaleUpperCase()}</h6></center>
//             </div>

           
				  



//               </div>

     
//           </div>


//           <div  className="card-body  x " data-mdb-perfect-scrollbar="true x" id='x' style={{position: 'relative',border:'None',backgroundColor:'#111619'}}>




// {msg.map((c,i) => (
         
		 
	

// 		<>

// { c.id==id?

// <div >
//             <div className="d-flex flex-row justify-content-end mb-3 pt-1">
//               {/* <p className="small mb-1 text-muted">23 Jan 6:10 pm</p> */}
//               {/* <p className="small mb-1" style={{color:'white'}}>You</p> */}
//             </div>
//             <div className="d-flex flex-row justify-content-end mb-3 pt-1">
//               <div>
//                 <p className="small p-1 me-2 mb-2 text-white rounded-4 " style={{backgroundColor:'#2abf98'}}>{c.msg}</p>
// 				  <p className="small mb-1 text-muted ">23 Jan 2:00 pm</p>

//               </div>
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//                 alt="avatar 1" style={{width: '25px', height: '70%'}}/>
//             </div> 

// 			</div>
// :


// <div>
//              <div className="d-flex justify-content-between">
//               <p style={{color:'#fff'}} className="small mb-1">{c.username}</p>
//               <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
//             </div>
//             <div className="d-flex flex-row justify-content-start">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
//                 alt="avatar 1" style={{width: '25px', height: '70%'}}/>
//               <div>
//                 <p className="small p-2 ms-3 mb-3 rounded-3" style={{background: '#1f282b',color:'#fff'}}> {c.msg}</p>
//               </div>
//             </div> 
// </div>
      

// }


		

       

// 			</>


// 			))}

//           </div>



//           <div className="card text-muted d-flex justify-content-start align-items-center p-4" style={{background:'#111619'}}>
//             <div className="input-group ">
//               <input type="text" style={{border:'2px solid #333b3e',background:'#20282b',borderRadius:'35px',paddingTop:'20px',paddingBottom:'20px'}} className="form-control " placeholder="   Enter your Message..."
//                 aria-label="Recipient's username" aria-describedby="button-addon2"  onKeyPress={send_data} value={chat_msg}  onChange={send_data}/>
        
//             </div>








//           </div>


//         </div>

//       </div>
//     </div>

//   </div>
// </section>




:




<div></div>
}





</div>
);
}


export default App;
