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
      // case actions.SET_DATA_FILTERING: {
      //   const { search, select } = state.filters;
      //   const newState = [...state.data]
      //   .filter(item => select.length > 0 ? select.includes(item.userId) : item)
      //   .filter(item => search.length > 0 ? (item.body.includes(search) || item.title.includes(search)) : item);
      //
      //   return {
      //     ...state,
      //     displayedData: newState,
      //   };
      // }

    default:
      return state;
  }
};
