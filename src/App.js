import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    city: "",
    phoneNumber: "",
  })

  const [users, setUsers] =useState([])

  const [editableUser, setEditableUser] = useState({
    value: "",
    isBeingEdited: false,
    isCompleted: false,
  })

  const handleDeleteUsers = () => {

  }


  const handleUser = (value) => {
    setUser(prev => {
      return { ...prev, [value.name]: value.value};
    })

  }

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user])
    setUser({
      firstName: "",
      lastName: "",
      avatar: "",
      city: "",
      phoneNumber: "",

    })
  }

  const handleDeleteUser = (users) => {
    const newUser = [...users]
    newUser.splice(users, 1);
    setUsers(newUser);

  }

  const handleEditMode = (user) => {
    setEditableUser({...user});
    const newUsers = [...users];
    newUsers[users.indexOf(user)].isBeingEdited = true;
    setUsers(newUsers);
  }

  const handleEditUser = (value) => {
    setEditableUser({...editableUser, [user.target.name]: user.target.value });
  }




  return (
    <div className="App-header">
      <div>
        <div>
          <label>Enter your Photo URL</label>
          <br />
          <input name='avatar' placeholder='...Photo' value={user.avatar} onChange={(event) => handleUser(event.target)}/>
        </div>
        <div>
          <label>Enter your Firstname</label>
          <br />
          <input name='firstName' placeholder='...John' value={user.firstName} onChange={(event) => handleUser(event.target)} />
        </div>
        <div>
          <label>Enter your Lastname</label>
          <br />
          <input name='lastName' placeholder='...Doe' value={user.lastName} onChange={(event) => handleUser(event.target)} />
        </div>
        <div>
          <label>Enter your Phone Number</label>
          <br />
          <input name='phoneNumber' placeholder='+995 555 123 456' value={user.phoneNumber} onChange={(event) => handleUser(event.target)} />
        </div>
        <div>
          <label>Enter your City</label>
          <br />
          <input name='city' placeholder='...Tbilisi' value={user.city} onChange={(event) => handleUser(event.target)} />
        </div>
        <button onClick={() => handleAddUser(user)}>Add User</button>

      </div>
      {users.map(user =>
        <div className='card'>
          <button onClick={() => handleDeleteUser(users)}>Delete Card</button>
          <div className='card-header'>
            <img  
              src={user.avatar} width='50px' height='50px'
            />
            <p>
              <strong>{user.firstName}</strong><button onClick={() => handleEditMode(users)}>Edit</button> 
              <br ></br>
              <strong>{user.lastName}</strong><button>Edit</button>
            
            </p>
          </div>
          <br />
          

            <div className='card-info'>
              <p>Phone Number: <strong>{user.phoneNumber}</strong></p><button>Edit</button>
              <br />
              <p>City <strong>{user.city}</strong></p><button>Edit</button>
            </div>
        
        </div>
      
       )}
      
      

    </div>
  );
}

export default App;
