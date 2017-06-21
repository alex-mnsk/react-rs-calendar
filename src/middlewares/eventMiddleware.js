const fetchEvent = function (store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case 'FETCH_EVENTS': {
          fetch('http://128.199.53.150/events')
                        .then(data => data.json())
                        .then((data) => {
                          store.dispatch({
                            type: 'SAVE_EVENTS',
                            payload: data,
                          });
                        });
          return next(action);
        }
        default:
          return next(action);
      }
    };
  };
};

export default fetchEvent;
