import React, { useRef,useState } from 'react';

const SelectedUser = ({selectedUser}) => {


  const [error, setError]=useState(null);

  const latitude = selectedUser.address.geo.lat;
  const longitude =selectedUser.address.geo.lng;

  const titleInputRef =useRef();
  const bodyInputRef =useRef();

  const postDataHandler =(event)=>{
    event.preventDefault();

    const title = titleInputRef.current.value;
    const body = bodyInputRef.current.value;
    
    if(title.trim().length <=0 || body.trim().length <=0){
      setError("Fields can't be empty..!")
      return;
    }

    const data = {
      title,
      body,
      userId :selectedUser.id
    }
    console.log(data);

    const sendPostRequest = async () =>{
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        header: {
          'Content-Type': 'application/json'
        }
      });

      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      titleInputRef.current.value="";
      bodyInputRef.current.value="";
      alert('Post Request sent successfully..!');
    }

    sendPostRequest().catch(err =>{
      setError(err.message);
    })


  }







  return (
  <div className='user-detail'> 

    <div className='content'>
        <p>Name : <span>{selectedUser.name}</span></p>
        <p>Email : <span>{selectedUser.email}</span></p>
        <p>Mobile : <span>{selectedUser.phone}</span></p>

       </div>

        <iframe width="100%" src= {`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&ampoutput=embed`} ></iframe>
        <p style={{fontSize : '1.6rem'}}>Wan't able to emmbed Map 🙃🙃😕</p>

        <form onSubmit={postDataHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='Title' id='title' ref={titleInputRef}/>
          </div>
          
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <input type="text" placeholder='body' id='body' ref={bodyInputRef}/>
          </div>
         <p> {error}</p>
          <button className='btn'>Send data</button>
        </form>
  </div>);
};

export default SelectedUser;