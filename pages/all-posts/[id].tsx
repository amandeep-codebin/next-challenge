import { CommentDataProps, UserDataProps, UserPostDataType } from "@/types"
import React from "react"

const SinglePost =  ({post,comments}:{post: UserPostDataType, comments: CommentDataProps[]}) => {
  return (
    <div>
      <h1>POST</h1>
      <h2>Post title: {post.title}</h2>
      <p>Post body: {post.body}</p>

      <h1>Comments</h1>
      {comments ? 
      <ol>
        {comments && comments.map((item)=>(
          <li key={item.id}>{item.body}</li>
        ))}
      </ol> :
      <h1>No Comments</h1> }
    </div>
  )
}

export const getServerSideProps = async({params}:any)=>{

  const {id} = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const postComment =await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

  const res = await response.json()
  const commentByPost = await postComment.json()

  return{props: {
    post:res,
    comments:commentByPost 
  }}
}
export default SinglePost
