const initialState = {
  items: []
};

const reducer = (state = initialState, action = {}) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case "ADD_ITEM": {
      break;
    }
    case "ADD_ITEM_COMMIT": {
      break;
    }
    case "ADD_ITEM_ROLLBACK": {
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

export default reducer;
