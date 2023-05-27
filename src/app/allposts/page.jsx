import PostCard from "../components/PostCard"
import { getAllPosts } from "@/firebase/firebase"

export default async function AllPosts() {
  const postMap = await getAllPosts({cache: 'no-store'})
  return (

    <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
      {
        postMap?.map((singlePost) => {
          return <div key={singlePost.title} >
            <PostCard props={singlePost} />
            </div>
        })
      }
    </div>
      )
}