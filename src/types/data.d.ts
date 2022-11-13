export type Category = 'shoes' | 'clothes' | 'book'

export type Confition = 'new' | 'used'

export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

export type Product = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Confition
  owner: User
}

export type APIContext = {
  apiRootUrl: string
}
