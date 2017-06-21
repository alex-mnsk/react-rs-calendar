import Immutable from 'immutable';
import moment from 'moment';


const initialState = Immutable.Map({
  year: moment().year(),
  month: moment().month(),
  week: moment().week(),
});

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case 'PREV_MONTH': {
      if (state.get('month') > 0) {
        return state.set('month', state.get('month') - 1);
      }
      if (state.get('month') <= 0) {
        return Immutable.Map({
          year: state.get('year') - 1,
          month: 11,
          week: state.get('week'),
        });
      }
    }
      break;
    case 'NEXT_MONTH': {
      if (state.get('month') < 11) {
        return state.set('month', state.get('month') + 1);
      }
      if (state.get('month') >= 11) {
        return Immutable.Map({
          year: state.get('year') + 1,
          month: 0,
          week: state.get('week'),
        });
      }
    }
      break;
    case 'PREV_WEEK': {
      const weeksInYear = moment().year(state.get('year')).isoWeeksInYear() + 1;
      let month;
      if (state.get('week') > 1) {
        month = moment(state.get('year')).week(state.get('week') + 1).month();
        return Immutable.Map({ year: state.get('year'), month, week: state.get('week') - 1 });
      }
      if (state.get('week') <= 1) {
        return Immutable.Map({ year: state.get('year') - 1, month: 11, week: weeksInYear });
      }
    }
      break;
    case 'NEXT_WEEK': {
      const weeksInYear = moment().year(state.get('year')).isoWeeksInYear();
      let month;
      if (state.get('week') < weeksInYear) {
        month = moment(state.get('year')).week(state.get('week') + 1).month();
        return Immutable.Map({ year: state.get('year'), month, week: state.get('week') + 1 });
      }
      if (state.get('week') >= weeksInYear) {
        return Immutable.Map({ year: state.get('year') + 1, month: 0, week: 1 });
      }
    }
      break;
    case 'TODAY': {
      return Immutable.Map({
        year: moment().year(),
        month: moment().month(),
        week: moment().week(),
      });
    }
    default:
      return state;
  }
}
