export const addToProgress = id => ({
  type: 'ADD_TO_PROGRESS',
  id,
})

export const addToDone = id => ({
    type: 'ADD_TO_DONE',
    id,
})

export const addToRead = id => ({
  type: 'ADD_TO_READ',
  id,
})

export const changeFilter = activeFilter => ({
  type: 'CHANGE_FILTER',
  activeFilter
})

