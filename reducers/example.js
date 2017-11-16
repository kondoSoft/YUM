const initialState = {
  saludo: 'hello world'
}

const blankReducer = (state = initialState, action) => {
  if (action.type === 'EXAMPLE_ACTION') {
    return {
      ...state,
      newValue: action.payload
    }
  } else {
    return state
  }
}

export default blankReducer
