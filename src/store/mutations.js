export default {
  loginState (state, userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    state.userInfo = userInfo
  }
}
