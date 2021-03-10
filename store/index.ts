import {
  getAccessorType,
  mutationTree,
  actionTree,
  getterTree,
} from 'typed-vuex'
import wait from '~/assets/js/helpers/wait'

export const state = () => ({
  modal: '' as string, // モーダル名
  wh: 100, // 画面の高さ
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  setModal(state, modal: string) {
    state.modal = modal
  },
  setWh(state, wh: number) {
    state.wh = wh
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    updateModal({ commit }, modal: string) {
      commit('setModal', modal)
    },
    resetModal({ commit }) {
      commit('setModal', '')
    },
    async updateWh({ commit }) {
      await wait(10)()
      commit('setWh', Number(window.innerHeight))
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
})
