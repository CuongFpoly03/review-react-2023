import React, {useState} from "react";
import "./App.css";
import {User} from './components/users'
import Formadd from './pages/AddUserForm'
import UserList from './pages/userList'
const App: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
const [users, setUsers] = useState<User[]>([]);
const addUser = (user: User) => {
  setUsers(prevUsers => [...prevUsers, user]);
}
  return (
    <div>
      <h1>quản lí người dùng</h1>
      <UserList users={users}/>
      <Formadd addUser ={addUser}/>
      <h1>quản lí người dùng 2</h1>
      
    </div>
  );
}

export default App;
