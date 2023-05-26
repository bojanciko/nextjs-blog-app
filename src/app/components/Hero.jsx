'use client'
import { getHeroPosts } from '@/firebase/firebase'
import PostCard from './PostCard'

export default async function Hero() {
  
  const posts =  await getHeroPosts()

    

  return (
    <div className='flex flex-wrap px-20 gap-4'>
      {
        posts.map((post) => {
          return (
            <div key={post.slug}>
              <PostCard props={post} />
            </div>
          )
        })
      }
    </div>
  )
}
