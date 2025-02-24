import React from 'react'
import GoggleIcon from '../assets/Images/icons-google.png'
import facebookIcon from '../assets/Images/icon-facebook.png'
import loginBG from '../assets/Images/login-bg.png'

function Login() {
  return (
    <>
        <div className='login-main bg-white h-screen w-full flex flex-col justify-center items-center font-open bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${loginBG})` }}>
            <div className='login-wrap bg-[#f3f7ff] w-full max-w-[900px] m-auto: rounded-2xl'>
                <div className='content-wrap w-full max-w-[650px] p-2 py-28 m-auto'>
                    <h1 className='text-center text-3xl font-bold font-open text-theme capitalize mb-2'>get started</h1>
                    <p className='text-center text-base text-theme-gray capitalize mb-4'>already have an account? <a href="#" className='text-theme font-semibold'>Sign in</a></p>
                    <form className='pt-12 pb-4'>
                        <input type="text" placeholder='Email' className='w-full placeholder:text-base placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 mb-6 focus:outline-2 focus:outline-theme'/>
                        <input type="password" placeholder='Password' className='w-full placeholder:text-base placeholder:text-theme-gray bg-white rounded-xl h-[50px] py-2 px-4 focus:outline-2 focus:outline-theme'/>
                        <button type='submit' className='bg-theme border border-theme text-white text-base py-3 px-4 rounded-xl w-full capitalize mt-12 transition-all duration-150 
                        ease-linear hover:bg-transparent hover:text-theme cursor-pointer'>sign in</button>
                    </form>
                    <p className='text-center text-base text-theme-gray uppercase font-semibold my-2'>or</p>
                    <div className='social-btns flex flex-wrap justify-between mt-4 mb-8 gap-y-2'>
                    <a href="#" className='w-full sm:w-[48.5%] capitalize rounded-lg py-2 px-4 flex justify-center items-center text-base font-semibold border-1 border-theme-gray'><img src={GoggleIcon} className='w-[30px] mr-3' alt="google-icon" />sign up with google</a>    
                    <a href="#" className='w-full sm:w-[48.5%] capitalize rounded-lg py-2 px-4 flex justify-center items-center text-base font-semibold border-1 border-theme-gray'><img src={facebookIcon} className='w-[30px] mr-3'alt="facebook-icon" />sign up with google</a>
                    </div> 
                    <p className='text-theme-gray text-sm text-center max-w-[340px] mx-auto'>by signing up, i agree to the <a href="#" className='text-theme capitalize'>Terms of service</a> and 
                    <a href="#" className='text-theme capitalize'> Privacy policy</a></p>    
                </div>
            </div>
        </div>
    </>
  )
}

export default Login