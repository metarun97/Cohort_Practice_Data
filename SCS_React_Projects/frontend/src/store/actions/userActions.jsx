import axios from '../../api/axiosconfig';
import { loadUser, removeUser } from '../reducers/userSlice';

// Currentuser action:-
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) dispatch(loadUser(user));
    else console.log("User not logged in!")
  } catch (error) {
    console.log(error);
  }
};

// Logout action:-
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem('user');
    dispatch(removeUser())
    console.log("User logged out!")
  } catch (error) {
    console.log(error);
  }
};

// Login action:-
export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
    );
    localStorage.setItem('user', JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

// Register action:-
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/users', user);
    console.log(res[0]);
  } catch (error) {
    console.log(error);
  }
};
