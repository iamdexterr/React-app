import React,{useState} from 'react';
import SelectedUser from './SelectedUser';

const UserDetails = ({userData}) => {

    const [selectedUser, setSelectedUser] = useState(null);

const userChangeHandler =(event)=>{
    const [filteredUser] = userData.filter(user => user.id == event.target.value);
    setSelectedUser(filteredUser)
    // console.log(filteredUser);
    // console.log('inside change handler',event.target.value)
}


  return (
    <section >
           <div className='user-data'>
                <div className="select-user">
                <label htmlFor="">Select a username : </label>
                <select onChange={userChangeHandler}>
                    <option disabled selected>Select a user</option>
                    {userData.map(user=> {
                        return <option value={user.id} key={user.id}>{user.username}</option>
                    })}
                </select>
                </div>

            {!selectedUser && <h1>Please select a user</h1>}
            {selectedUser && <SelectedUser selectedUser={selectedUser}/>}
        </div>
        
    </section>)
};

export default UserDetails;
