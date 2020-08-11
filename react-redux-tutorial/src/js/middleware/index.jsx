function forbiddenWordsMiddleware({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      const nextAction = next(action);
      // read the next state
      const state = getState();
      // return the next action
      return nextAction;
    };
  };
}
export default forbiddenWordsMiddleware;
