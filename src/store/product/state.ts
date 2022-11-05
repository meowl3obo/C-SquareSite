import { IParentClassify } from '@/types/product/Classify'

export type TState = {
  classify: Array<IParentClassify>
}

export const state: TState = {
  classify: [],
}