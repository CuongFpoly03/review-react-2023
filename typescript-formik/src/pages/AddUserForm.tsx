import React, {useState} from 'react'
import {User} from "../components/users"
import { useFormik } from 'formik'; // formik, form, field

interface AddUserFormProps {
    addUser: (user: User) => void;
}


const AddUserForm: React.FC<AddUserFormProps> = ({addUser}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: values => {
            const newUser: User = {
                id: Date.now(),
                name: values.name,
                email:values.email
            };
            addUser(newUser);
            formik.resetForm();
        }
    })
    // console.log(formik.values) 
    // const [name, setName] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // const handleSubmit = (e: React.FormEvent) =>{
    //     e.preventDefault();
    //     const newUser : User = {
    //         id: Date.now(),
    //         name,
    //         email
    //     };
    //     addUser(newUser);
    //     setName('');
    //     setEmail('');
    // }
    return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            />
             <label htmlFor="">Email:</label>
            <input type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            />
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default AddUserForm