import {FormEvent, useState, ChangeEvent} from "react";
import { setUserInLocalStorageWithResponseData } from "./../services";
import { loginUser, createNewUser } from "./../api/users/authentication";
import {useNavigate} from "react-router-dom";

interface FormProps {
    url: string
}

const Form: React.FC<FormProps> = (props: FormProps) => {
    const navigate = useNavigate();
    const { url } = props;
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
        let response;
        try {  
            if (url === "/login") {
                response = await loginUser({email, password});
            }

            if (url === "/signup") {
               response = await createNewUser({email, password});
            } 
            setUserInLocalStorageWithResponseData(response);
            navigate("/")
            
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
                <input type="submit" value={url === "/login" ? "login": "sign up"} />
            </form>
        </>
    )
}

export default Form;