import {useState, ChangeEvent, FormEvent} from "react";
import { createNewUser } from "../api/users/authentication";
import { setUserInLocalStorageWithResponseData } from "../services";
const Register = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {  
            const response = await createNewUser({email, password});
            console.log(response)
            setUserInLocalStorageWithResponseData(response);
            // redirect to homepage
            
        } catch(err: any) {
           setError(err.error)
        }
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }   
    return (
        <>
        <form onSubmit={onFormSubmit}>
            <input type="email" placeholder="email" onChange={onEmailChange} />
            <input type="password" placeholder="password" onChange={onPasswordChange} />
            <input type="submit" value="signup" />
        </form>
        </>
    )
}

export default Register;