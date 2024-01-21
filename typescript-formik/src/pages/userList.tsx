import React from 'react'
import {User} from '../components/users'
interface UserListProps {
    users: User[];
}
const userList: React.FC<UserListProps> = ({users}) => {
  return (
    <div>
      {users.map(user => (
        <li key={user.id}>
            {user.name} - {user.email}
        </li>
      ))}
    </div>
  )
}

export default userList
