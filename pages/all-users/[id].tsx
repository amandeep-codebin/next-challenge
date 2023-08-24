import { UserDataProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const SingleUser = ({user}:{user: UserDataProps}) => {

  return (
    <>
    {user ? 
    <div>
      <h1> Name: {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <h3>Phone: {user.phone}</h3>
      <p>Address: {user?.address?.street}</p>

      <Link href={{
        pathname:`/all-posts`,
        query:{userId: user.id}
      }}>View All posts by this user</Link>
    </div> :
     <div className='flex justify-center'>
            <h1>No Data Found</h1>
     </div> }
    </>
  )
}
export const getServerSideProps = async(context: any)=>{

  const {id} =context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const res = await response.json()

  return{props: {
    user:res
  }}
}

export default SingleUser
