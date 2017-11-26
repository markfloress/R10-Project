import { queryFave } from '../../config/models'

const getFaveSuccess = (data) => {
  return { type: 'GET_FAVE_SUCCESS', data }
}

export const getFaveData = () => async dispatch => {
  try{
    const data = queryFave().map(x => x)
    dispatch(getFaveSuccess(data))
  } catch (Err) {
    console.log('error with get fave', Err)
  }
}

const initialState = {
  faveList: []
}

const faveReducer = ( state= initialState, action ) => {
  switch (action.type){
    case 'GET_FAVE_SUCCESS':
    return {
      ...state,
      faveList: action.data
    }

    default:
    return state
  }
}

export default faveReducer