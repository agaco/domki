import actions from '../actions';

const initialState = {
  data: [],
  singleItem: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_FROM_API_SUCCESS:
      return {
        ...state,
        data: action.payload.houses,
      };
      case actions.GET_SINGLE_DATA_FROM_API_SUCCESS:
      return {
        ...state,
        singleItem: action.payload,
      };

    default:
      return state;
  }
};
