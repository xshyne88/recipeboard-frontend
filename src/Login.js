import React, { useState } from 'react'

function Login() {
    const [email, cEmail] = useState("")
    const [pwd, cPwd] = useState("")
    const [cpwd, ccPwd] = useState("")
    return <>
    <h1>Login</h1>
    <div>email</div>
    <input onChange={(e) => cEmail(e.target.value)} />
    <div>password</div>
    <input type="password" onChange={(e) => cPwd(e.target.value)} />
    <div>confirm password</div>
    <input type="password" onChange={(e) => ccPwd(e.target.value)} />
    <div>
        {JSON.stringify({
            email: email,
            pwd: pwd,
            cpwd: cpwd,
        })}
    </div>
    </>
}

export default Login;