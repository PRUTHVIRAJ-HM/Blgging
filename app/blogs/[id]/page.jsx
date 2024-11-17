'use client'
import React ,{ useEffect, useState } from 'react';
import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';


const page = ({params}) => {

    const [data,setData]=useState(null);
    const fetchBlogData = ()=>{
        for(let i=0;i<blog_data.length;i++){
            if(Number(params.id)===blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
                
            }
        }
    }
    useEffect(()=>{
        fetchBlogData();
    },[])

  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button className='flex items-center py-1 px-3 gap-2 font-medium sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' /></button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-color-white rounded-full' src={data.author_img} widht={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-[22px] max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
        <p className='text-[18px]'>{data.description}</p>
        <h3></h3>

    </div>
    </>:<> </>
  )
}


export default page