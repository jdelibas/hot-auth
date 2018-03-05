
export default (state = [], action) => {
  switch (action.type) {
    case 'OPEN_ADD_TOKEN_MODAL':
      return Object.assign({}, state, {
        addToken: true
      })
      case 'CLOSE_ADD_TOKEN_MODAL':
      return Object.assign({}, state, {
        addToken: false
      })
    default:
      return state
  }
}
