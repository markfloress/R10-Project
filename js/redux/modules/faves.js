import { queryFave } from '../../config/models'
import { getSession } from './session'

const getFaveSuccess = (data) => {
  return { type: 'GET_FAVE_SUCCESS', data }
}

export const getFaveData = () => async dispatch => {
  try{
    const data = queryFave().map(x => x.id)
    const session = dispatch(getSession())
    console.log('sess',session)

    dispatch(getFaveSuccess(session))
  } catch (Err) {
    console.log('error with get fave', Err)
  }
}

const initialState ={
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