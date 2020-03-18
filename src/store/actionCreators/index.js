import actions from '../actions';

const getDataAction = async (dispatch) => {

  await dispatch({
    type: actions.GET_DATA_FROM_API_REQUEST,
  });

  const response = await fetch(`http://mr-test-backend.sadek.usermd.net/houses`);

  if (response.status === 200) {
    let responseJSON = await response.json();

    await dispatch({
      type: actions.GET_DATA_FROM_API_SUCCESS,
      payload: responseJSON,
    });

  } else {

    await dispatch({
      type: actions.GET_DATA_FROM_API_ERROR,
      payload: 'error message'
    });
  }
};

const getSingleData = async (dispatch, id) => {


  await dispatch({
    type: actions.GET_SINGLE_DATA_FROM_API_REQUEST,
  });

  const response = await fetch(`http://mr-test-backend.sadek.usermd.net/houses/${id}`);

  if (response.status === 200) {
    let responseJSON = await response.json();

    await dispatch({
      type: actions.GET_SINGLE_DATA_FROM_API_SUCCESS,
      payload: responseJSON,
    });

  } else {

    await dispatch({
      type: actions.GET_SINGLE_DATA_FROM_API_ERROR,
      payload: 'error message'
    });
  }
};

export default  {
  getDataAction,
  getSingleData,
}
