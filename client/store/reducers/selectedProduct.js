import axios from "axios";

// ACTION TYPES

const GET_SELECTED_PRODUCT = "GET_SELECTED_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const CLEAR_SELECTED = "CLEAR_SELECTED";

// ACTION CREATORS

const getSingleProduct = product => {
  return {
    type: GET_SELECTED_PRODUCT,
    product: product,
  };
};

const updateProduct = data => {
  return {
    type: UPDATE_PRODUCT,
    product: data,
  };
};

export const clearSelectedProduct = () => {
  return {
    type: CLEAR_SELECTED,
  }
}

// THUNKS

export const fetchSingleProduct = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(getSingleProduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchModifiedProduct = product => async dispatch => {
  try {
    const token = window.localStorage.getItem("token");
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
    const { data } = await axios.put(`/api/products/`, product, {
      headers: {
        authorization: token,
      },
    });
    await console.log('DATA FROM PUT REQUEST: ', data)
    dispatch(updateProduct(data));
  } catch (error) {
    console.log(error);
  }
};

// INITIAL STATE

const initialState = {};

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return action.product;
    case CLEAR_SELECTED:
      return {}
    default:
      return state;
  }
};

export default reducer;
