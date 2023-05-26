'use client'

import React, { createContext, useEffect, useState } from 'react'
import { createMdPost, getAllPosts, createRefForImage } from '../firebase/firebase'
import { v4 } from 'uuid'


export const MarkdownContext = createContext({
  content: '',
  name: '',
  excerpt: '',
  uploadPost: () => null,
  setPostMap: () => null,
  handleFileChange: () => null,
  postMap: []
})


export const MarkdownContextProvider = ({ children }) => {
  const [content, setContent] = useState('')
  const [name, setName] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [postMap, setPostMap] = useState([])

 
  
  // const savePost =  () => {
  //   setPost({name: 'example-md', data: content})
  // }
  
  const uploadPost = async (e) => {
    e.preventDefault()

    const thumbnailUrl = await createRefForImage(thumbnail, name)

    const post = {
      data: content,
      slug: `${name}-${v4()}`,
      name: name,
      excerpt: excerpt,
      thumbnail: thumbnailUrl
    }
    try {
      await createMdPost(post)
      setContent('')
      setName('')
      setExcerpt('')
    } catch (error) {
      alert('Unable to create post!')
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setThumbnail(e.target.files[0]);
    }
  };

 

  const value={content, setContent, uploadPost, name, setName, postMap, setPostMap, excerpt, setExcerpt, handleFileChange, thumbnail, setThumbnail}

  return (
    <MarkdownContext.Provider value={value}>{children}</MarkdownContext.Provider>
  )
}

export default MarkdownContext