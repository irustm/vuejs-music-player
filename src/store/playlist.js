import list from '../api/list'

const state = {
  all: [],
  currentIndex: 0,
  isPlay: false
}

const actions = {
  getAllPlayList ({commit}) {
    list.getList(playlist => {
      commit('recieve_list', playlist)
    })
  },
  playSound ({commit, state}, index) {
    if (state.currentIndex == index && state.isPlay) {
      commit('pause_sound')
    } else {
      commit('play_sound', index)
    }
  },
  pauseSound ({commit}) {
    commit('pause_sound')
  },
  nextSound ({commit, state}) {
    let index = 0
    if ((state.all.length - 1) > state.currentIndex) {
      index = state.currentIndex + 1
    }
    commit('play_sound', index)
  },
  prevSound ({commit, state}) {
    let index = state.all.length - 1
    if (state.currentIndex >= 1) {
      index = state.currentIndex - 1
    }
    commit('play_sound', index)
  }
}

const mutations = {
  recieve_list (state, playlist) {
    state.all = playlist
  },
  play_sound (state, index) {
    state.isPlay = true
    state.currentIndex = index
  },
  pause_sound (state) {
    state.isPlay = false
  }
}

const getters = {
  allPlayList (state) {
    return state.all
  },
  currentIndex (state) {
    return state.currentIndex
  },
  isPlay (state) {
    return state.isPlay
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
