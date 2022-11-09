import { ActionContext, ActionTree } from "vuex"
import { TState } from "./state"
import { MutauionType, Mutations } from "./mutations"

const enum ActionType {
  SetWidth= "SetWidth"
}

type ActionAugments = Omit<ActionContext<TState, TState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
type Actions = {
  [ActionType.SetWidth](context: ActionAugments, width: number): void
}

export const actions: ActionTree<TState, TState> & Actions = {
  [ActionType.SetWidth]({ commit }, width) {
    commit(MutauionType.SetWidth, width)
  }
}