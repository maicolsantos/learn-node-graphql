import { CategoriesProps, ReviewsProps } from '../types/db'

export type ProductProps = {
  categories: CategoriesProps[]
}

export type ReviewsResolversProps = {
  reviews: ReviewsProps[]
}

export const Product = {
  category: (parent: { categoryId: string }, args: any, context: ProductProps) => {
    return context.categories.find(category => category.id === parent.categoryId)
  },
  reviews: (parent: { id: string }, args: any, context: ReviewsResolversProps) => {
    return context.reviews.filter(review => review.productId === parent.id)
  }
}
