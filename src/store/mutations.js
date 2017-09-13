import * as types from './types'

export default {
  [types.SIDEBAR_SHOW]: (state) => {
    state.sidebarState = true;
    state.iconSidebarState = true;
  },
  [types.SIDEBAR_HIDE]: (state) => {
    state.sidebarState = false;
    state.iconSidebarState = false;
  },
  [types.CHANGE_TOPTIPS]: (state, msg) => {
    state.headerTips = msg;
  }
}
