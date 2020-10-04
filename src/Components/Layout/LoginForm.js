import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

function LoginForm() {

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        password: yup
            .string()
            .required()
            .min(4, "password must be greater than 4 character")
            .max(10, "password must be less than 10 characters")
    });
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {
        console.log("data", data);        
    };    

    return (
        <form id="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>Name </div>
                <input type="text" name="firstName" placeholder="Enter your name" ref={register}/>
                {errors.firstName && <p>{errors.firstName.message}Please write name</p>}
            </div>

            <div>
                <div>password </div>
                <input type="password" name="password" placeholder="Enter your password" ref={register}/>
                {errors.password && <p>{errors.password.message}Please write password correctly. Use 4 characters at least</p>}
           </div>

        <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;