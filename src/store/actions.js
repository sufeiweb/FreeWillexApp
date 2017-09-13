import * as types from './types'

export default {
  showSidebar: ({commit, state}) => {
    commit(types.SIDEBAR_SHOW);
  },
  hideSidebar: ({commit, state}) => {
    commit(types.SIDEBAR_HIDE);
  },
  changeTopTips: ({commit, state}, msg) => {
    commit(types.CHANGE_TOPTIPS, msg);
  }
}
