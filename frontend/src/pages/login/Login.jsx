import React, {useState} from 'react'

const Login = () => {

  // use State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // error state
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // validation
  var validation = () => {
    let isValid = true;

    if(email === '' || email.includes('@' === false)) {
      setEmailError('Email is empty or invalid')
      isValid = false
    }
    if(password.trim() === ''){
      setPasswordError('Password is empty')
      isValid = false
    }

    // return the value
    return isValid;

  }

  // login function
  const handleLogin = (e) => {
    e.preventDefault()

    // validation
    if(!validation()){
      return;
    }

    console.log(email, password)
  }


  return (
    <div className='container'>

      <h1>Login to your Account!</h1>

      <form className='w-50'>
        <label>Enter your email : {email}</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter your email address' />

        {
          emailError && <p className='text-danger'>{emailError}</p>
        }

        <label className='mt-2'>Enter your password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="email" className='form-control' placeholder='Enter your password' />

        {
          passwordError && <p className='text-danger'>{passwordError}</p>
        }

        <button onClick={handleLogin} className='btn btn-danger w-100 mt-2'>Login</button>

      </form>

    </div>
  )
}

export default Login