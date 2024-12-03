import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
  <div className='min-h-screen  mt-20'>
    <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
      <div className="flex-1">
        {/* {left side dive} */}
        <Link to="/" className=' font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-green-500 via-amber-500 to-indigo-500 text-white'>
         Korrect
        </span>Gist
        </Link>
        <p className='text-sm mt-5'>Korrect Gist is an engaging blog site that offers a blend of insightful content, fresh perspectives, and up-to-date news across a variety of topics.</p>
        </div>
        <div className="flex-1">
          {/* {right side div} */}
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username '/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div>
              <Label value='Your  Email '/>
              <TextInput type='email' placeholder='johndoe@gmail.com' id='email'/>
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput type='password' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='greenToBlue' type='submit'>Sign Up</Button>
          </form>
         <div className="flex gap-3 text-sm mt-5">
          <span>Have an Account?</span>
          <Link to='/signin' className='text-blue-500'> Sign In</Link>
         </div>
      </div>
      </div>
    </div>
  )
}
