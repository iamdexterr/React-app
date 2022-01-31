import { useState } from 'react';
import FormControl from './components/FormControl';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
function App() {

  const [isLogin,setIsLogin] =useState(false);
  const [userData,setUserData] =useState([]);

  const userLoginHandler = ()=>{
    
    const fetchUsers = async ()=>{
      const response =await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUserData(data)
    }
    
    setIsLogin(true);
    fetchUsers();
  }
  const userLogoutHandler = ()=>{
    setIsLogin(false);
  }




  return (
    <>
      <Header loginStatus={isLogin} onLogout={userLogoutHandler}/>
     {!isLogin && <FormControl onLogin={userLoginHandler}/>}
     {isLogin&& <UserDetails userData={userData}/>}
    </>
  );
}

export default App;
