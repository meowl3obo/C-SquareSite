import Product, { ProductState } from './product'
import Global, { GlobalState } from './global'

export type TState = ProductState & GlobalState

export const modules = {
  Product,
  Global,
};