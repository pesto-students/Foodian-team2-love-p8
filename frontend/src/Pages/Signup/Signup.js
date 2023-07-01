import React from 'react'
import "./Signup.css"
import s_img from "../../Assets/Imags/Foodian_logo.png"
const Signup = () => {
  return (
    <section>
      
      <div className='login-page'>
        
                       <div className='login-main'> 
                       <img src={s_img} alt="logo" className='login-i'  />
                       <h2 className='login-h'>Create Account</h2>
                       <form className='Form'>

                       <label>Name</label>
                            <input className='login-ip 'type="Name" placeholder="  Enter Name"/>
                            
                            <label>Mobile no</label>
                            <input className='login-ip 'type="mobile" placeholder="  Enter Mobile no"/>
                            <label>Email</label>
                            <input className='login-ip'type="email" placeholder="  Enter Email address"/>
                            <label>Password</label>
                            <input className='login-ip 'type="password" placeholder="  Enter password"/>
                            <label></label>
                            <input className='login-ip'type="password" placeholder="  Re Enter Password"/>
                            <button className='button1'>Sign Up</button>
                       </form>

                      
                        <h5>Already have an account</h5>
                        <h6>Log In</h6>
                       
</div>


      </div>
    </section>
  )
}

export default Signup


