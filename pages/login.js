import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Link from "next/link";


export default function Example() {
    const router = Router;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('/')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        const res = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()


        console.log(json.email)
        console.log(json.token)
        setEmail("")
        setPassword("")
        if (json.success) {
            localStorage.setItem('myuser', JSON.stringify({ email: json.email, token: json.token }));
            toast.success('Login Success', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                router.push('/')
            }, 1500);
        } else {
            toast.error(json.error, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* <div className="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-md space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                or Signup                            </a>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    // autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    // autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}

            <div className="h-screen text-center pt-20">
                <h1 className="text-3xl font-semibold mt-20">
                    Login to your account
                </h1>

                <div className=" w-full ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">

                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Email address"
                        />
                        <input
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Password"
                        />
                        <Link href="/forgot"><a><p className="text-sm text-gray-500 flex justify-end cursor-pointer hover:text-gray-800">forgot password?</p></a></Link>
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
                        >
                            Login
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">Don't have an account? <Link href="/signup"><a><span className="text-black cursor-pointer hover:text-gray-800">Sign up</span></a></Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}
