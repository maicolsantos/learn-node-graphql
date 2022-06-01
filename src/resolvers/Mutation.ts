import { v4 as uuidv4 } from 'uuid'

import { CategoriesProps } from '../types/db'

type AddCategoryProps = {
  input: {
    name: string,
  }
}

type CategoriesListProps = {
  categories: CategoriesProps[]
}

export const Mutation = {
  addCategory: (parent: any, args: AddCategoryProps, context: CategoriesListProps) => {
    const newCategory = {
      id: uuidv4(),
      name: args.input.name,
    }

    context.categories.push(newCategory)

    return newCategory
  },
}
