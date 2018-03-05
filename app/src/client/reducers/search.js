
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return Object.assign({}, state, {
        term: action.term
      })
    default:
      return state
  }
}
