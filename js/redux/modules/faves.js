import { queryFave } from '../../config/models'

const getFaveBegin = () => {
  return { type: 'GET_FAVE_BEGIN' }
}

const getFaveSuccess = (data) => {
  return { type: 'GET_FAVE_SUCCESS', data }
}

const getFaveError = (Err) => {
  return { type: 'GET_FAVE_ERROR', Err }
}

export const getFaveData = () => dispatch => {
  dispatch(getFaveBegin())
  try{
    const data = queryFave().map(x => x.id)
    dispatch(getFaveSuccess(data))
  } catch (Err) {
    dispatch(getFaveError(Err))
  }
}

const initialState = {
  faveList: [],
  errorMsg: {},
  isLoading: false
}

const faveReducer = ( state= initialState, action ) => {
  switch (action.type){
    case 'GET_FAVE_BEGIN':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_FAVE_SUCCESS':
    return {
      ...state,
      faveList: action.data,
      isLoading: false
    }

    case 'GET_FAVE_ERROR':
      return {
        ...state,
        errorMsg: action.Err,
        isLoading: false
      }

    default:
    return state
  }
}

export default faveReducer