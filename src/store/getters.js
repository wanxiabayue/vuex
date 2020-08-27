
// 不用import state
// 第一个参数为state，第二个参数为自己getters
// TODO getters传参功能未实现
const getters = {
  address: state => 'from ' + state.from,
  addressMore: (state, getters) => 'I come ' + getters.address
  // addressMostArgu: state => id => { return state.from + id }
}

export default getters
