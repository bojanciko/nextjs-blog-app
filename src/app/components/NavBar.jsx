import Link from 'next/link'

export default function NavBar() {

  return (
    <>
      <div className='flex justify-center px-24 bg-gray-900'>

        <div className='flex justify-between items-center bg-gray-900 h-20 text-white gap-20'>
          <Link className='hover:underline' href='/'>
            Home
          </Link>
          <Link className='hover:underline' href='allposts'>
            Explore
          </Link>
          <Link className='hover:underline' href='create-post'>
            New Post
          </Link>
          <Link className='hover:underline' href='/'>
            About
          </Link>
          <Link className='hover:underline' href='/'>
            Contact
          </Link>
          
        </div>
      </div>
    </>
  )
}
