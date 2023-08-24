import { UserDataProps, UserPostDataType } from "@/types"
import React from "react"

const SinglePost =  ({post}:{post: UserPostDataType}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

    </div>
  )
}

export const getServerSideProps = async(context:any)=>{

  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const res = await response.json()

  return{props: {
    post:res
  }}
}
export default SinglePost
