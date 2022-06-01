import { ProductProps } from '../types/db'

type ReviewsProps = {
  id: string,
  date: string,
  title: string,
  comment: string,
  rating: number,
  productId: string,
}

export type CategoryProps = {
  products: ProductProps[]
  reviews: ReviewsProps[]
}

export const Category = {
  products: (parent: { id: string }, args: any, context: CategoryProps) => {
    if (args.filter && args.filter.onSales) {
      return context.products.filter(product => product.categoryId === parent.id && product.onSale)
    }

    return context.products.filter(product => product.categoryId === parent.id)
  }
}
