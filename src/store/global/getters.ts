import { GetterTree } from "vuex"
import { TState } from "./state"

type Getters = {
  GetWidth(state: TState): number
}

export const getters: GetterTree<TState, TState> & Getters = {
  GetWidth(state) {
    return state.width
  }
}