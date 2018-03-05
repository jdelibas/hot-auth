
export default (state = [], action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return Object.assign({}, state, {
        stage: action.route
      })
    default:
      return state
  }
}
