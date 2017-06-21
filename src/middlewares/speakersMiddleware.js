const fetchSpeakers = function (store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case 'FETCH_SPEAKERS': {
          fetch('http://128.199.53.150/trainers')
                        .then(data => data.json())
                        .then((data) => {
                          store.dispatch({
                            type: 'SAVE_SPEAKERS',
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

export default fetchSpeakers;
