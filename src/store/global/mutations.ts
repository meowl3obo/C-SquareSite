import { MutationTree } from "vuex"
import { TState } from "./state"

export const enum MutauionType {
  SetWidth = "SetWidth"
}

export type Mutations = {
  [MutauionType.SetWidth](state: TState, width: number): void
}

export const mutations: MutationTree<TState> & Mutations = {
  [MutauionType.SetWidth](state, width) {
    state.width = width
  }
}