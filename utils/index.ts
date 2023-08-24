const getPostsByUser = async({userId}:{userId:string | undefined}) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  if(!response.ok) throw new Error('Something went wrong')
  return response.json()
}