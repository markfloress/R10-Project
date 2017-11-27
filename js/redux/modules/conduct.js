const getConductBegin = () => {
  return { type: 'GET_CONDUCT_BEGIN' }
}

const getConductSuccess = ( data ) => {
  return { type: 'GET_CONDUCT_SUCCESS', data }
}

const getConductError = (Err) => {
  return { type: 'GET_CONDUCT_ERROR', Err }
}

export const getConduct = () => async dispatch => {
    dispatch(getConductBegin())
    try{
      const data = await fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      const conduct = await data.json()
      dispatch(getConductSuccess(conduct))
    } catch (Err) {
      dispatch(getConductError(Err))
    }
}

const initialState = {
  conduct: [],
  errorMsg: {},
  isLoading: false
}

const conductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONDUCT_BEGIN':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_CONDUCT_SUCCESS':
      return {
        ...state,
        conduct: action.data,
        isLoading: false
      }

    case 'GET_CONDUCT_ERROR':
      return {
        ...state,
        errorMsg: action.Err,
        isLoading: false
      }

    default:
      return state
  }
}

export default conductReducer