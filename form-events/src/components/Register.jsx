"use client"

import { useForm } from "react-hook-form"

const Register = () =>{
    const {register, handleSubmit, formState: {errors}} = useForm()

    const ShowData = (data) =>{
        console.log(data.name, data.email, data.password)
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(ShowData)}>
                <div>
                    <input type="text" placeholder="Enter Name" {...register('name',{
                        required: "Name is required"
                    })} />
                    {errors.name &&(
                        <p>{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <input type="text" placeholder="Enter Email" {...register('email',{
                        required: "Email is required"
                    })} />
                    {errors.email &&(
                        <p>{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <input type="password" placeholder="Enter Password" {...register('password',{
                        required: "Password is required"
                    })} />
                    {errors.password &&(
                        <p>{errors.password.message}</p>
                    )}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register