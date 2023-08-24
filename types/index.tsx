export interface UserDataProps {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserPostDataType {
  userId: string,
  id: string,
  title: string,
  body: string

}

export interface CommentDataProps {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string,
}