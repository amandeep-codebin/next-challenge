import { CommentDataProps, UserPostDataType } from "@/types"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const Posts =  ({posts,comments}:{posts: UserPostDataType[], comments:CommentDataProps[]}) => {

  const [userPosts,setUserPosts] = useState<UserPostDataType[]>(posts)

  const router = useRouter()

  const {userId} = router.query


  useEffect(()=>{
    if(userId){
      const fetchUserPost = async() =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if(response.status === 200){
          const data = await response.json()
          setUserPosts(data)
        }
      }
      fetchUserPost()
    }
  },[])

  return (
    <div>
      <h1>Post Page</h1>

    <ol>
      {userPosts && userPosts.map((item: UserPostDataType)=> (
        <li key={item.id}><Link href={`/all-posts/${item.id}`}>{item.title}</Link></li>
      ))}
    </ol>
    <p>Comments : </p>
    </div>
  )
}

export const getStaticProps = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const AllComments = await fetch('https://jsonplaceholder.typicode.com/comments')

  const res = await response.json()
  const commentsResponse = await AllComments.json()

  //const postsWithComments = 



  return{props: {
    posts:res,
    comments:commentsResponse
  },
revalidate:10}
}
export default Posts
