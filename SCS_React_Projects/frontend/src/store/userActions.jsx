import axios from '../api/axiosconfig';
import { loadUser } from './userSlice';

export const asyncGetUsers = () => async (dispatch, getState) => {
  try {
    console.log('current state =>', getState());
    const res = await axios.get('/users');
    dispatch(loadUser(res.data));
  } catch (error) {
    console.log(error);
  }
};
