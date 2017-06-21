import { createStore, applyMiddleware, combineReducers } from 'redux';

import dateReducer from './reducers/dateReducer';
import eventReducer from './reducers/eventReducer';
import speakersReducer from './reducers/speakersReducer';

import eventMiddleware from './middlewares/eventMiddleware';
import speakersMiddleware from './middlewares/speakersMiddleware';

export const store = createStore(
    combineReducers({
        calendar: dateReducer,
        events: eventReducer,
        speakers: speakersReducer,
    }),
    applyMiddleware(
        eventMiddleware,
        speakersMiddleware,
    ),
);

export default store;
