export const setRoute = (route) => ({ type: 'SET_ROUTE', route})

export const setSearchTerm = (term) => ({ type: 'SET_SEARCH_TERM', term})

export const openAddTokenModal = () => ({ type: 'OPEN_ADD_TOKEN_MODAL'})
export const closeAddTokenModal = () => ({ type: 'CLOSE_ADD_TOKEN_MODAL'})
export const addToken = (token) => ({ type: 'ADD_TOKEN', token })
