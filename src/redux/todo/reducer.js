const initialState = {
  items: []
};

const reducer = (state = initialState, action = {}) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case "ADD_ITEM": {
      newState.items = [
        ...newState.items,
        {
          id: action.payload.id,
          name: action.payload.name,
          done: false,
          pending: true
        }
      ];
      break;
    }
    case "ADD_ITEM_COMMIT": {
      const itemIndex = state.items
        .map((item) => item.id)
        .findIndex(action.payload.id);
      newState.items = [
        ...newState.items.slice(0, itemIndex),
        {
          id: action.payload.id,
          name: action.payload.name,
          done: false
        },
        ...newState.items.slice(itemIndex + 1)
      ];
      break;
    }
    case "ADD_ITEM_ROLLBACK": {
      const itemIndex = state.items
        .map((item) => item.id)
        .findIndex(action.payload.id);
      newState.items = [
        ...newState.items.slice(0, itemIndex),
        ...newState.items.slice(itemIndex + 1)
      ];
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

export default reducer;
