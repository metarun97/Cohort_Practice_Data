import axios from '../../api/axiosconfig';
import { loadProduct } from '../reducers/productSlice';

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/products');
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};

// Create Product action:-
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post('/products', product);
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
// Create Product action:-
export const asyncUpdateProduct =
  (id, product) => async (dispatch, getState) => {
    try {
      await axios.patch('/products/' + id, product);
      dispatch(asyncLoadProducts());
    } catch (error) {
      console.log(error);
    }
  };
// Create Product action:-
export const asyncDeleteProduct =
  (id) => async (dispatch, getState) => {
    try {
      await axios.delete('/products/' + id);
      dispatch(asyncLoadProducts());
    } catch (error) {
      console.log(error);
    }
  };
