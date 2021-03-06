import { FormEvent, useState, ChangeEvent } from 'react';
import { setUserInLocalStorageWithResponseData } from '../../services';
import { loginUser, createNewUser } from '../../api/users/authentication';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
const Form = ({ url }: { url: string }) => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response;
        if (email.trim() !== '' && password.trim() !== '') {
            try {
                if (url === 'login') {
                    response = await loginUser({ email, password });
                }

                if (url === 'signup') {
                    response = await createNewUser({ email, password });
                }

                if (response) {
                    setUserInLocalStorageWithResponseData(response.data);
                    navigate('/');
                }
            } catch (err) {
                if (err instanceof AxiosError && err.response) {
                    setError(err.response.data.error);
                }

                if (err instanceof Error) {
                    setError(err.message);
                }
            }
        } else {
            setError('Please fill in all the fields!');
        }
    };
    return (
        <div className="min-h-screen relative">
            <div className="absolute top-1/2 -translate-y-1/2">
                {error && (
                    <p className="bg-red-400 text-white px-4 py-2 mb-6">
                        {error}
                    </p>
                )}
                <h1 className="text-5xl font-bold mb-6">
                    {url === 'login' ? 'Login' : 'Sign up'}
                </h1>
                <form onSubmit={onFormSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={onEmailChange}
                        className="bg-white block border-black border-b-2 w-full text-xl text-black py-4 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={onPasswordChange}
                        className="bg-white block border-black border-b-2 w-full text-xl text-black py-4 focus:outline-none"
                    />
                    <p className="mt-2">
                        {url === 'login' ? (
                            <>
                                You can login with email:
                                <b>eve.holt@reqres.in </b>
                                and password: <b>pistol</b>
                            </>
                        ) : (
                            <>
                                You can register with email:
                                <b>eve.holt@reqres.in </b>
                                and password: <b>cityslicka</b>
                            </>
                        )}
                    </p>

                    <input
                        type="submit"
                        value={url === 'login' ? 'Login' : 'Sign up'}
                        className="bg-orange px-4 py-2 text-white mt-6 inline-block border-2 border-transparent mr-6"
                    />

                    {url === 'login' ? (
                        <Link to="/signup">Sign up</Link>
                    ) : (
                        <Link to="/login">Log in</Link>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Form;
