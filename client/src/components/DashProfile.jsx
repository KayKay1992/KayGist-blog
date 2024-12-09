import { Button, TextInput } from "flowbite-react"
import { useEffect, useRef, useState } from "react"
import {useSelector} from "react-redux"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'



export default function DashProfile() {
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const {currentUser} = useSelector(state => state.user)
 
  const filePickerRef = useRef()

  const handleImageChange = (e) => {
    //creating an image url
    const file = e.target.files[0];
    if(file){
    setImageFile(file)
    setImageFileUrl(URL.createObjectURL(file))
    }
    

  }
  //  console.log(imageFile, imageFileUrl)
  useEffect(() => {
    if(imageFile){
      uploaodImage();
    }
  }, [imageFile])

  const uploaodImage = async (e) => {

    // const file = e.target.files[0];
    if(!imageFile) return;
    // console.log('uploaodImage imageFile...')
    const data = new FormData();
    data.append('file', imageFile);
    data.append (
      'upload_preset', 'Korrect-Gist-Blog'
    )
    data.append('cloud_name', 'dyrteayr3');
  const res = await fetch('https://api.cloudinary.com/v1_1/dyrteayr3/image/upload', {
      method: 'POST',
      body: data,
    })
  const dataRes = await res.json()
  
  }
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="py-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex  flex-col gap-4">
        <input type="file" accept="image/*" onChange={handleImageChange} ref={filePickerRef} hidden/>
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={()=>filePickerRef.current.click()}>  
        <img src={imageFileUrl || currentUser.profilePicture} alt="profile picture" className="rounded-full w-full h-full object-cover border-4 border-[lightgray]" />
        </div>
        <TextInput type="text" id='username' placeholder="username" defaultValue={currentUser.username}/>
        <TextInput type="email" id='email' placeholder="email" defaultValue={currentUser.email}/>
        <TextInput type="password" id='password' placeholder="password"/>
        <Button type="submit" gradientDuoTone="greenToBlue" outline>Update</Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
