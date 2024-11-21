'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const page = () => {
  const [image,setImage] = useState(false);
return(
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload the Thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''></Image>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog Title</p>
        <input type="text"placeholder='Type here' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>

        <p className='text-xl mt-4'>Blog Description</p>
        <input type="text"placeholder='Write the content here' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>

      </form>
    </>
  )
}

export default page