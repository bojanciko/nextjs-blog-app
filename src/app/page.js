import Image from 'next/image'
import Hero from './components/Hero'

export default function Home() {
    return (
      <>
      <div className='font-bold underline'>
        {/* <RandomPostHome /> */}
        <Hero />
        <div className='flex justify-between'>
        {/* <PostContainer /> */}
        </div>
      </div>
      </>
    )
}
