import React from "react"
import { useState } from "react"

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => { // e 为事件参数
    e.preventDefault()          //通过调用 e.preventDefault() 方法来阻止表单的默认提交行为
    console.log(email, password, name)
  }

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>REGISTER INTERFACE</h2>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id='name' placeholder="full name" />
        <label htmlfor='email'>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' placeholder="abc123@youremail.com" />
        <label htmlfor='password'>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' placeholder="********" />
        <button type='submit'>LOG IN!</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?Login here.</button>
    </div>
  )
}