import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <section>
      
      <div className='login-page'>
        
                       <div className='login-main'> 
                       <img src="./Foodian_logo.png" alt="logo" className='login-i'  />
                       <h2 className='login-h'>Welcome Back</h2>
                       <form className='Form'>

                            <label>Email</label>
                            <input className='login-ip 'type="email" placeholder="  Enter Email address"/>
                            <label>Password</label>
                            <input className='login-ip'type="password" placeholder="  Enter Password"/>
                            <button className='button1'>Log In</button>
                       </form>

                      
                        <h5>Don't have an account</h5>
                        <h6>Sign Up</h6>
                       
</div>


      </div>
    </section>
  )
}

export default Login


