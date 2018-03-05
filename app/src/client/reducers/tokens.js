import { generate } from 'shortid'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      const newToken = {
        id: generate(),
        ...action.token
      }
      return [...state, newToken]
    default:
      return state
  }
}
