import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'



export default function OAuth() {
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.getCustomParameters({prompt: 'select_account'});
        try{
            const resultsFromGoogleAuth = await signInWithPopup(auth, provider)
            // console.log(resultsFromGoogleAuth);
            const res = await fetch('api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name: resultsFromGoogleAuth.user.displayName,
                email: resultsFromGoogleAuth.user.email,
                googlePhotoUrl: resultsFromGoogleAuth.user.photoURL,
                }),
                
            })
            const data = await res.json();
           if(res.ok){
            dispatch(signInSuccess(data))
            navigate('/')
           }

        }catch(error){
            console.error(error);
        }
    };

  return (
    <Button type='button' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-3'/>
        Sign In with Google
    </Button>

  )
}
