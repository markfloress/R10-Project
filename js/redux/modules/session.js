// import { formatSessionData } from '../../lib/sectionList-helpers'

const getSessionBegin = () => {
  return { type: 'GET_SESSION_BEGIN' }
}

const getSessionSuccess = ( data ) => {
  return { type: 'GET_SESSION_SUCCESS', data }
}

const getSessionError = (Err) => {
  return { type: 'GET_SESSION_ERROR', Err }
}


export const getSession = () => async dispatch => {
    dispatch(getSessionBegin())
    try{
      const data = await fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      const Session = await data.json()
      dispatch(getSessionSuccess(Session))
    } catch (Err) {
      dispatch(getSessionError(Err))
    }
}


const initialState = {
  session: [],
  errorMsg: {},
  isLoading: false
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SESSION_BEGIN':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_SESSION_SUCCESS':
      return {
        ...state,
        session: action.data,
        isLoading: false
      }

    case 'GET_SESSION_ERROR':
      return {
        ...state,
        errorMsg: action.Err,
        isLoading: false
      }

    default:
      return state
  }
}

export default sessionReducer