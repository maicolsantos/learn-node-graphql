import { CategoryProps } from './Category'
import { ProductProps } from './Product'

type ProductsArgsProps = {
  filter?: {
    onSales: boolean
  }
}

export const Query = {
  hello: () => 'Hello world!!',
  products: (parent: any, args: ProductsArgsProps, context: CategoryProps) => {
    if (args.filter && args.filter.onSales) {
      return context.products.filter(product => product.onSale)
    }

    return context.products
  },
  product: (parent: any, args: { id: string }, context: CategoryProps) => {
    const { id } = args

    return context.products.find(product => product.id === id)
  },
  categories: (parent: any, args: any, context: ProductProps) => context.categories,
  category: (parent: any, args: { id: string }, context: ProductProps) => {
    const { id } = args

    return context.categories.find(category => category.id === id)
  },
}
