import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {

    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[age,setAge] = useState()
    const navigate = useNavigate()
 
    const Submit = (e) =>{
        e.preventDefault();
        axios.post("https://apk-crud-api.vercel.app/createUser",{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')

    })
        .catch(err => console.log(err))

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className='mb-2 text-start'>
                        <label htmlFor="">Name</label>
                        <input type='text' placeholder='Enter the name' className='form-control'
                        onChange={(e) => setName(e.target.value)}></input>

                    </div>
                    <div className='mb-2 text-start'>
                        <label htmlFor="">Email</label>
                        <input type='text' placeholder='Enter the email' className='form-control'
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-2 text-start'>
                        <label htmlFor="">Age</label>
                        <input type='text' placeholder='Enter the age' className='form-control'
                        onChange={(e) => setAge(e.target.value)}></input>
                    </div>
                    <button className='btn btn-success' >Submit</button>


                </form>
            </div>

        </div>
    )
}

export default CreateUser;
