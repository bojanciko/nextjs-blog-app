import Link from "next/link";
import Image from "next/image";
import kos from '../../../public/dummy/kos.jpg'

const PostCard = ({props}) => {
  const { title, excerpt, createdAt, thumbnail, categories, slug } = props

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(createdAt)

  const dummy = kos
  

  const toDisp = () => {
    if(thumbnail !== undefined) return thumbnail
    else return dummy
  }

  

  return (
    <div className='flex flex-col border-2 border-slate-400 w-52'>
      <Image src={toDisp()} width={150} height={150} alt="title" />
      <div className='p-4'>
        <h5 className='text-gray-600 text-sm'>{ date.toDateString() }</h5>
        <Link href={`/allposts/${slug}`}><h2 className='text-lg font-bold hover:cursor-pointer'>{ title }</h2></Link>
        <p className='text-gray-600'>{ excerpt }</p>
        <div className='flex justify-between'>
        {
          categories?.map((category) => {
            return <span key={category} className='capitalize hover:cursor-pointer'>{ category }</span>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default PostCard