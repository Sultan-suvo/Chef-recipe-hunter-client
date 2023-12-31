import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const [error , setError] = useState('')
    const { signIn, signInWithGoogle,signInWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('')

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true})

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .error(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = ()=>{
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* Component: Card with form */}
            <form onSubmit={handleLogin} className="max-w-[415px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                {/* Body*/}
                <div className="p-6">
                    <header className="mb-4 text-center">
                        <h3 className="text-xl font-medium text-slate-700">Login</h3>
                    </header>
                    <div className="flex flex-col">
                        {/* Input field */}
                        <div className="relative my-6">
                            <input
                                id="id-b03"
                                type="email"
                                name="email"
                                placeholder="your name"
                                required
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b03"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your email
                            </label>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                <span>Type your email address</span>
                            </small>
                        </div>
                        {/* Input field */}
                        <div className="relative my-6">
                            <input
                                id="id-b13"
                                type="password"
                                name="password"
                                placeholder="your password"
                                required
                                className="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b13"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your password
                            </label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                />
                            </svg>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                <span>Type your password</span>
                            </small>
                        </div>
                    </div>
                </div>
                {/* Action base sized basic button */}
                <div className="flex justify-end p-6 -mt-5">
                    <button
                        type="submit"
                        className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-success disabled:cursor-not-allowed disabled:borde"
                    >
                        <span>Login</span>
                    </button>
                </div>
                <div className="-mt-1 text-center text-md transition text-slate-400 peer-invalid:text-pink-500">
                    Create New Account
                    <Link className="ml-1 text-success font-semibold" to="/register">
                        Register
                    </Link>
                </div>
                <p className='text-danger text-center mt-4'><small>{error}</small></p>
                <div className="w-full px-6 flex items-center text-center mx-auto py-5">
                    <hr className="flex-1 border-t border-slate-200" />
                    <span className="my-0 mx-[10px] font-bold text-slate-400">or</span>
                    <hr className="flex-1 border-t border-slate-200" />
                </div>
                <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border bg-blue-200 hover:bg-blue-500 border-slate-200 rounded-md cursor-pointer">
                <FaGoogle className="w-8 h-8 rounded-md" ></FaGoogle>
                    <span>Continue with Google</span>
                </div>

                <div onClick={handleGithubSignIn} className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border bg-emerald-200 hover:bg-emerald-500 border-slate-200 rounded-md cursor-pointer mt-3 mb-7">
                    
                    <FaGithub className="w-7 h-7 rounded-md"></FaGithub>
                    <span>Continue with Github</span>
                </div>
            </form>
            {/* End Card with form */}
        </section>
    );
};

export default Login;