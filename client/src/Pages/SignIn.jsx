import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import  { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  // handle form input change event
  const handleChange =(e) => {
  //  console.log(e.target.value)
   setFormData({...formData, [e.target.id]: e.target.value.trim() });
  //  console.log(formData);
  if( !formData.email || !formData.password){
    return setErrorMessage('Please enter a username')
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    // implement signup logic here
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
       return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    }catch(error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
   
  };
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
        <p className='text-sm mt-5'>Please sign in to your account to access exclusive features and personalized content.</p>
        </div>
        <div className="flex-1">
          {/* {right side div} */}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your  Email '/>
              <TextInput type='email' placeholder='johndoe@gmail.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>{
              loading ? (
              <>
               <Spinner size='sm'/> 
               <span className='pl-3'>loading ...</span>
               </>
              ) : 'Sign In'}</Button>
          </form>
         <div className="flex gap-3 text-sm mt-5">
          <span>Dont Have an Account?</span>
          <Link to='/signup' className='text-blue-500'> Sign Up</Link>
         </div>
          {errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>}
      </div>
      </div>
    </div>
  )
}
