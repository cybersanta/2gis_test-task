const initState = {
  byStatus: 'toRead',
  byTags: []
}

const filter = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        byStatus: action.payload
      }

    case 'ADD_TAG_FILTER': 
      return {
        ...state,
        byTags: addToTagFilter(state, action.payload)
      }

    case 'REMOVE_TAG_FILTER': 
      return {
        ...state,
        byTags: removeFtomTagFilter(state, action.payload)
    }

    case 'REMOVE_ALL_TAG_FILTER': 
      return {
        ...state,
        byTags: []
    }

    default:
      return state
  }
}

const addToTagFilter = (state, tag) => {
  const { byTags } = state;
  const idx = byTags.find((el) => el === tag)

  if(!idx){
    return [...byTags, tag]
  }

  return byTags
};

const removeFtomTagFilter = (state, idx) => {
  const { byTags } = state;

  return [
    ...byTags.slice(0, idx),
    ...byTags.slice(idx + 1)
  ]
};


export default filter
