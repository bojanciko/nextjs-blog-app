import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import Search from './Search'
const Heading = () => {
  return (
    <>
    <div className='flex'>

    <div className='flex h-20 items-center bg-slate-800 gap-2 pl-12'>
      <p><a href="https://www.facebook.com" target="_blank" ><BsFacebook className='text-white hover:cursor-pointer' /></a></p>
      <p><a href="https://www.instagram.com" target="_blank" ><BsInstagram className='text-white hover:cursor-pointer' /></a></p>
      <p><a href="https://www.twitter.com" target="_blank" ><BsTwitter className='text-white hover:cursor-pointer' /></a></p>
    </div>
    <div className='flex items-center justify-center h-20 bg-slate-800 w-full'>
      <h1 className='text-white text-4xl font-bold'>Name of the blog</h1>
    </div>
    <div className='flex items-center justify-center h-20 bg-slate-800 pr-12'>
      <Search />
    </div>
    </div>
    </>
  )
}

export default Heading