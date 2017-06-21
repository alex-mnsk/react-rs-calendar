import Immutable from 'immutable';

const initialState = Immutable.fromJS({ events: [] });

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_EVENTS': {
      return state;
    }
    case 'SAVE_EVENTS': {
      return state.set('events', Immutable.fromJS(action.payload));
    }
    default:
      return state;
  }
}
