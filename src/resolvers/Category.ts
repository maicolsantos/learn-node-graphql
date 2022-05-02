import { ProductProps } from '../types/db'

export type CategoryProps = {
  products: ProductProps[]
}

export const Category = {
  products: (parent: { id: string }, args: any, context: CategoryProps) => {
    if (args.filter && args.filter.onSales) {
      return context.products.filter(product => product.categoryId === parent.id && product.onSale)
    }

    return context.products.filter(product => product.categoryId === parent.id)
  }
}
