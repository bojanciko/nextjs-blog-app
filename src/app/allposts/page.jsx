import PostCard from "../components/PostCard"
import { getAllPosts } from "@/firebase/firebase"

export const revalidate = 0;

export default async function AllPosts() {
  const postMap = await getAllPosts()
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