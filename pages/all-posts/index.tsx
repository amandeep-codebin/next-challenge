import { UserDataProps, UserPostDataType } from "@/types"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const Posts =  ({posts}:{posts: UserPostDataType[]}) => {

  const [userPosts,setUserPosts] = useState(posts)

  const router = useRouter()
  console.log('router',router.query)

  const {userId} = router.query


  return (
    <div>
      <h1>Post Page</h1>

    <ul>
      {posts && posts.map((item: UserPostDataType)=> (
        <li key={item.id}><Link href={`/all-posts/${item.id}`}>{item.title}</Link></li>
      ))}
    </ul>
    </div>
  )
}

export const getServerSideProps = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const res = await response.json()

  return{props: {
    posts:res
  }}
}
export default Posts
