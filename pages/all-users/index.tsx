import { UserDataProps } from "@/types"
import Link from "next/link"
import React from "react"

const Users =  ({users}:{users: UserDataProps[]}) => {

  return (
    <div>
      <h1>User Page</h1>

    <ul>
      {users && users.map((item: UserDataProps)=> (
        <li key={item.id}><Link href={`/all-users/${item.id}`}>{item.name}</Link></li>
      ))}
    </ul>
    </div>
  )
}

export const getStaticProps = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const res = await response.json()

  return{props: {
    users:res
  }}
}
export default Users
