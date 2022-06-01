import { ProductProps, ReviewsProps } from '../types/db'

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
