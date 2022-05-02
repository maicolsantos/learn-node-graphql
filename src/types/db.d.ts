export type ProductProps = {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  image: string
  onSale: boolean
  categoryId: string
}

export type CategoriesProps = {
  id: string
  name: string
}

export type ReviewsProps = {
  id: string
  date: string
  title: string
  comment: string
  rating: number
  productId: string
}
