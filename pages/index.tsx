import Link from "next/link"

const HomePage = () =>{

  return (
    <div className="flex flex-row gap-4">
      <Link className="mr-4" href={'/all-users'}>All Users</Link><br/>
      <Link href={'/all-posts'}>All Posts</Link>

    </div>
  )

}
export default HomePage