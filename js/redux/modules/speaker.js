import { formatDataObject } from '../../lib/sectionList-helpers'

const getSpeakerBegin = () => {
  return { type: 'GET_SPEAKER_BEGIN' }
}

const getSpeakerSuccess = ( data ) => {
  return { type: 'GET_SPEAKER_SUCCESS', data }
}

const getSpeakerError = (Err) => {
  return { type: 'GET_SPEAKER_ERROR', Err }
}


export const getSpeaker = (speakerId) => async dispatch => {
    dispatch(getSpeakerBegin())
    try{
      const data = await fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
      const Speaker = await data.json()
      dispatch(getSpeakerSuccess(formatDataObject(Speaker)))
    } catch (Err) {
      dispatch(getSpeakerError(Err))
    }
}


const initialState = {
  speaker: [],
  errorMsg: {},
  isLoading: false
}

const speakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SPEAKER_BEGIN':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_SPEAKER_SUCCESS':
      return {
        ...state,
        speaker: action.data,
        isLoading: false
      }

    case 'GET_SPEAKER_ERROR':
      return {
        ...state,
        errorMsg: action.Err,
        isLoading: false
      }

    default:
      return state
  }
}

export default speakerReducer