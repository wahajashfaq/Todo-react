const addItem = ({ _id, name } = {}) => ({
  type: "ADD_ITEM",
  payload: { _id, name },
  meta: {
    offline: {
      // the network action to execute:
      effect: {
        url: "https://powerful-garden-82176.herokuapp.com/api/todo/create",
        method: "POST",
        json: { _id, name }
      },
      // action to dispatch when effect succeeds:
      commit: { type: "ADD_ITEM_COMMIT", meta: { _id } },
      // action to dispatch if network action fails permanently:
      rollback: { type: "ADD_ITEM_ROLLBACK", meta: { _id } }
    }
  }
});

const itemActions = {
  addItem
};

export default itemActions;
