import React from "react"
const LoginPage = () => {
  return (
    <div className="flex justify-center flex-col items-center p-4 gap-4 ">
      <h1 className="text-red-800 text-xl">Login Page</h1>
      <div className="flex flex-row gap-3">
        <label className="flex self-center text-lg">Username</label>
        <input
          type="text"
          className="border-2 border-black p-2"
          name="username"
          placeholder="Enter UserName"
        />
      </div>
      <div className="flex flex-row gap-3">
        <label className="flex self-center text-lg">Password</label>
        <input
          type="password"
          className="border-2 border-black p-2"
          name="password"
          placeholder="Enter password"
        />
      </div>

      <button className="border-2 border-black p-2 rounded">Submit</button>
    </div>
  )
}

export default LoginPage
