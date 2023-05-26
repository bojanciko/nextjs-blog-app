'use client'

import MarkdownContext from '@/context/MarkdownContext'
import React, { useState, useContext } from 'react'

export default function CreatePostForm() {
  // const [name, setName] = useState('')
  // const [content, setContent] = useState('')
  const { uploadPost, setContent, setName, name, content, excerpt, setExcerpt, handleFileChange, thumbnail, setThumbnail } = useContext(MarkdownContext)


  return (
    <form onSubmit={(e) => uploadPost(e)} className='flex flex-col px-24'>
      <label className='flex flex-col mt-8'>
        Post Title:
        <input className='text-black mt-2 rounded-md bg-slate-600 w-1/3 h-12 pl-8 text-white border border-white' onChange={(e) => setName(e.target.value)} value={name} type="text" />
      </label>
      <label className='flex flex-col mt-8'>
        Write or paste your content here:
        <textarea onChange={(e) => setContent(e.target.value)} value={content} className='p-8 text-white border-2 border-white focus:border-blue-500 bg-slate-500 mb-12 mt-2 rounded-md w-2/3' id="text-input" cols="30" rows="15"></textarea>
      </label>
      <label className='flex flex-col mt-8'>
        Write an excerpt of your post:
        <textarea onChange={(e) => setExcerpt(e.target.value)} value={excerpt} className='p-8 text-white border-2 border-white focus:border-blue-500 bg-slate-500 mb-12 mt-2 rounded-md w-2/3' id="text-input" cols="30" rows="8"></textarea>
      </label>
      <label className='flex flex-col my-8'>
        Upload a thumbnail for your post:
        <input className='mt-2' type="file" onChange={(e) => handleFileChange(e)} />
      </label>
      
      <button className='w-1/4 h-12 bg-blue-700 border border-white hover:bg-blue-500 hover:border-2 rounded-md mb-24' type='submit'>Upload post</button>
    </form>
  )
}

