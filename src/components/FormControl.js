import React, { useState } from 'react';

const FormControl = (props) => {


    const [nameInput,setNameInput] =useState('');
    const [passwordInput,setPasswordInput] =useState('');

    const [nameIsValid,setNameIsValid]=useState(false);
    const [passwordIsValid,setPasswordIsValid]=useState(false);

    const [nameFoucs,setNameFocus]=useState(false);
    const [passwordFocus,setPasswordFocus]=useState(false);

    const formIsValid = nameIsValid && passwordIsValid;

    const nameChangeHandler =(event)=>{
        if(event.target.value.trim().length > 6){
            setNameIsValid(true)
        }
        else{
            setNameIsValid(false)

        }
        setNameInput(event.target.value);
    }

    const passwordChangeHandler =(event)=>{
            
        if(event.target.value.trim().length > 6){
            setPasswordIsValid(true)
        }
        else{
            setPasswordIsValid(false)
        }
        setPasswordInput(event.target.value);
    }



    const formSubmiHandler = (event)=>{
        event.preventDefault();
        setNameFocus(true);
        setPasswordFocus(true);
        
        if(formIsValid){

            console.log(nameInput,passwordInput)
            props.onLogin();
        }

    }


  return (
      <section className='form-component'>
          <form onSubmit={formSubmiHandler}>
          <h1>User Login!!</h1>
          <div className="form-control">
             <label htmlFor='userInput'>Username :</label>
              <input type='text' id="userInput" onChange={nameChangeHandler} value={nameInput} onBlur={()=>{setNameFocus(true)}} placeholder='username' />
              {!nameIsValid && nameFoucs && <p>Username length should be greater than 6!!!</p>}
          </div>

          <div className="form-control">
          <label htmlFor='passInput'>Password :</label>
             <input type="password" id='passInput' onChange={passwordChangeHandler} value={passwordInput} onBlur={()=>{setPasswordFocus(true)}} placeholder='password' />
             {!passwordIsValid && passwordFocus && <p>Password length should be greater than 6!!!</p>}
          </div>

          <button className="btn">Login</button>
          </form>
      </section>
  )
};

export default FormControl;
