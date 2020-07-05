const initState = {
  byStatus: 'toRead',
  byTags: []
}

const filter = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        byStatus: action.activeFilter
      }
    default:
      return state
  }
}

export default filter
