// CONSTS
import {INCREMENT_COUNTER} from '../actions'

const initialState = {
  counter: 0
}

const increment = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return Object.assign({}, {counter: state.counter + 1})
  } else {
    return state
  }
}

export default increment
