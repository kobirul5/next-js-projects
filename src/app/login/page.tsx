'use client'
import React, { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function page() {
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    });
    console.log(user)
    const onLogin = async () => {

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(e)=> setUser({...user, username: e.target.value})}                         
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />                      
                    </div>

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e)=> setUser({...user, email: e.target.value})}  
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e)=> setUser({...user, password: e.target.value})}  
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />                       
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                    >
                       Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account? <Link href="/signup" className="text-blue-500">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}
