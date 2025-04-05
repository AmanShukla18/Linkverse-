"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")
  const createTree = () => {

    router.push(`/generate?handle=${text}`)

  }
  
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-1 ">
          <p className="text-[#D2E822] font-extrabold text-6xl ">Everyting you</p>
          <p className="text-[#D2E822] font-extrabold text-6xl">are. In one,</p>
          <p className="text-[#D2E822] font-extrabold text-6xl"> simple link in bio.</p> 
          <p className="text-[#D2E822] text-xl my-8">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
          <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md bg-white" type="text" placeholder="Enter your handle"/>
          <button onClick={()=> createTree()} className="bg-[#E9C0E9] rounded-full px-4 py-4 font-semibold">Claim Your Bitree</button>
        </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw] pt-25">
          <img src="/image.jpg" alt="image"/> 
        </div>
      </section>
      <section className="bg-red-700 min-h-[100vh]">

      </section>
    </main>
  );
}
