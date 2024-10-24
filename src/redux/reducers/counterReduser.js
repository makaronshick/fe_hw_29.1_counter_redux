export default (prevState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: prevState.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: prevState.counter - 1,
      };

    default:
      return prevState;
  }
};
