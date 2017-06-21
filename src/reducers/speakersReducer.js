import Immutable from 'immutable';

const initialState = Immutable.fromJS({ speakers: [] });

export default function speakersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SPEAKERS': {
      return state;
    }
    case 'SAVE_SPEAKERS': {
      return state.set('speakers', Immutable.fromJS(action.payload));
    }
    default:
      return state;
  }
}
