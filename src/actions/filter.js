export const addToProgress = id => ({
  type: 'ADD_TO_PROGRESS',
  payload: id,
})

export const addToDone = id => ({
    type: 'ADD_TO_DONE',
    payload: id,
})

export const addToRead = id => ({
  type: 'ADD_TO_READ',
  payload: id,
})

export const changeFilter = activeFilter => ({
  type: 'CHANGE_FILTER',
  payload: activeFilter
})

export const addTagFilter = tag => ({
  type: 'ADD_TAG_FILTER',
  payload: tag
})

export const removeTagFilter = index => ({
  type: 'REMOVE_TAG_FILTER',
  payload: index
})

export const removeAllTagFilter = () => ({
  type: 'REMOVE_ALL_TAG_FILTER'
})

