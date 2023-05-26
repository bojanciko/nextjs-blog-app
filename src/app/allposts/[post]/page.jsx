import MarkdownPreview from "@/app/components/MarkdoenPreview";
import { FetchMdPost } from "@/firebase/firebase";


export default async function Post ({params}) {
  
  const post = params.id
  const content = await FetchMdPost(params.post)
  
  return (
    <div className='flex pl-48'>
    <div className='text-white prose prose-img:rounded-xl'>
    <MarkdownPreview  markdown={content?.content} />
    </div>
  </div>
  )
}