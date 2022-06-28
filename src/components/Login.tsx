import {FormEvent, useState, ChangeEvent} from "react";
import { setUserInLocalStorageWithResponseData } from "./../services";
import { loginUser } from "./../api/users/authentication";

const Login = () => {
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
            setUserInLocalStorageWithResponseData(response);
        } catch(err: any) {
           setError(err.error)
        }
    }   
    return (
       <>
         {error && error}
         <form onSubmit={onFormSubmit}>
            <input type="email" placeholder="email" onChange={onEmailChange} />
            <input type="password" placeholder="password" onChange={onPasswordChange} />
            <input type="submit" value="login" />
        </form>
       </>
    )
}

export default Login;