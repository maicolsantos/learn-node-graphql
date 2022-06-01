import { CategoryProps } from './Category'
import { ProductProps } from './Product'

type ProductsArgsProps = {
  filter?: {
    onSales: boolean
    avgRating: number
  }
}

export const Query = {
  hello: () => 'Hello world!!',
  products: (parent: any, args: ProductsArgsProps, context: CategoryProps) => {
    let filteredProducts = context.products

    if (args.filter && args.filter.onSales) {
      return filteredProducts.filter(product => product.onSale)
    }

    if ([1, 2, 3, 4, 5].includes(args.filter?.avgRating || 1)) {
      filteredProducts = filteredProducts.filter((product) => {
        let sumRating = 0
        let numbersOfReviews = 0

        context.reviews.forEach(review => {
          if (review.productId === product.id) {
            sumRating += review.rating
            numbersOfReviews++
          }
        })

        const avgProductRating = sumRating / numbersOfReviews

        return avgProductRating >= (args.filter?.avgRating || 1)
      })

    }

    return filteredProducts
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
