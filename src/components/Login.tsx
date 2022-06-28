import {FormEvent, useState, ChangeEvent} from "react";
import { setUserInLocalStorageWithResponseData } from "./../services";
import { loginUser } from "./../api/users/authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }    

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {  
            const response = await loginUser(email, password);
            console.log(response)
            setUserInLocalStorageWithResponseData(response);
            // redirect to homepage
            
        } catch(err: any) {
           setError(err.error)
        }
    }   
    return (
       <>
         {error && error}
         <h1>You can log in with eve.holt@reqres.in and cityslicka</h1>
         <form onSubmit={onFormSubmit}>
            <input type="email" placeholder="email" onChange={onEmailChange} />
            <input type="password" placeholder="password" onChange={onPasswordChange} />
            <input type="submit" value="login" />
        </form>
       </>
    )
}

export default Login;