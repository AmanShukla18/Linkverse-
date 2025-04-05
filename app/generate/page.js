"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()

   // const [link, setlink] = useState("")
   // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{link: "", linktext: ""}])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks)=>{
           return initialLinks.map((item, i)=>{
                if (i==index) {
                    return{link, linktext}
                } else {
                    return item
                }
            })
        })
    }
    

    const addLink = () => {
        setLinks(links.concat([{link: "", linktext: ""}]))
    }
    

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json() 
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        } else {
            toast.error(result.message) 
        }
            
    }

    return (
        <div className='bg-[#2259bf] min-h-screen grid grid-cols-2'>
            <div className='col1 flex justify-center items-center flex-col text-gray-900 mt-40'>
                <h1 className='font-serif font-bold text-4xl mr-60'>Create your Bittree</h1>
                <p className='font-serif text-[#676B5F] pt-2 mr-60'>Sign up for free</p>
                <div className='flex flex-col gap-5 my-5'>
                    <div className='item'>
                        <h2 className='font-serif font-semibold text-2xl mt-15'>Step 1: Claim your handle</h2>

                        <div className='mx-5'>
                            <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='bg-[#F6F7F5] px-4 py-2 mx-2 my-2 focus:outline-blue-400 rounded-md  ' type='text' placeholder='Choose a handle' />
                        </div>
                    </div>

                    <div className='item'>
                        <h2 className='font-serif font-semibold text-2xl'>Step 2: Add Links</h2>

                        {links && links.map((item, index)=>{
                            return <div key={index} className='mx-5'>   
                            <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}} className='bg-[#F6F7F5] px-4 py-2 mx-2 my-2 focus:outline-blue-400 rounded-md ' type='text' placeholder='Enter link-text' />
                            <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='bg-[#F6F7F5] px-4 py-2 mx-2 my-2 focus:outline-blue-400 rounded-md ' type='text' placeholder='Enter link' />
                        </div>
                        })}
                            <button onClick={()=> addLink()} className='px-5 py-2 mx-2 bg-[#c2d816] text-white font-bold rounded-full'>+ Add Links</button>
                    </div>

                    <div className='item'>
                        <h2 className='font-serif font-semibold text-2xl'>Step 3: Add Picture and Description </h2>

                        <div className='mx-5 flex flex-col'>
                            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='bg-[#F6F7F5] px-4 py-2 mx-2 my-2 focus:outline-blue-400 rounded-md ' type='text' placeholder='Enter link to your picture' />
                            <input value={desc || ""} onChange={e=>{setdesc(e.target.value)}} className='bg-[#F6F7F5] px-4 py-2 mx-2 my-2 focus:outline-blue-400 rounded-md ' type='text' placeholder='Enter description' /> 
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={()=>{submitLinks()}} className='disabled:bg-slate-500 px-5 py-2 mx-2 w-fit my-5 bg-[#c2d816] text-white font-bold rounded-full'>Create your Bittree</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col2 w-full h-screen bg-[#2259bf]'>
                <img className='h-full object-contain' src='/bg_image.webp' alt='Generate your links' />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate