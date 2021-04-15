import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_SINGLE_USER_TRANSACTIONS_REQUEST,
  USER_SINGLE_USER_TRANSACTIONS_SUCCESS,
  USER_SINGLE_USER_TRANSACTIONS_FAIL,
  USER_CREATE_TRANSACTIONS_REQUEST,
  USER_CREATE_TRANSACTIONS_SUCCESS,
  USER_CREATE_TRANSACTIONS_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_GET_BY_ID_REQUEST,
  USER_GET_BY_ID_SUCCESS,
  USER_GET_BY_ID_FAIL,
  USER_TRANSACTION_BY_ID_REQUEST,
  USER_TRANSACTION_BY_ID_SUCCESS,
  USER_TRANSACTION_BY_ID_FAIL,
  UPDATE_USER_TRANSACTION_BY_ID_REQUEST,
  UPDATE_USER_TRANSACTION_BY_ID_SUCCESS,
  UPDATE_USER_TRANSACTION_BY_ID_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_REF_BY_ID_REQUEST,
  USER_REF_BY_ID_SUCCESS,
  USER_REF_BY_ID_FAIL,
  USER_REFERRAL_BY_ID_REQUEST,
  USER_REFERRAL_BY_ID_SUCCESS,
  USER_REFERRAL_BY_ID_FAIL,
} from "../constants/userConstants"

import axios from "axios"

export const register = (name, email, password, referralEmail) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      `/api/users/register/?ref=${referralEmail}`,
      { name, email, password },
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // })

    // sessionStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    sessionStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  sessionStorage.clear()
  dispatch({ type: USER_LOGOUT })
  // This redirects the user on logout
  document.location.href = "/login"
}

//Get User Details
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//Update User Profile Details
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/profile`, user, config)
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    // This updates the navbar name
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    sessionStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Get single user transactions by the user
export const getSingleUserTransactions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_SINGLE_USER_TRANSACTIONS_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get("/api/users/transactions", config)

    dispatch({
      type: USER_SINGLE_USER_TRANSACTIONS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_SINGLE_USER_TRANSACTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//List Users only for admin
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/all`, config)
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
//List USer by ID... only for admin
export const getUserById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_GET_BY_ID_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)
    dispatch({
      type: USER_GET_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_GET_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Create user transaction
// Only by the admin POST /api/users/transaction

export const createTransaction = (id, email, amount, percent) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_CREATE_TRANSACTIONS_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(
      `/api/users/createtransaction/${id}`,
      { email, amount, percent },
      config
    )

    dispatch({
      type: USER_CREATE_TRANSACTIONS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: USER_CREATE_TRANSACTIONS_FAIL,
      payload: message,
    })
  }
}

// Get user transaction by id

//Get User Details
export const getUserTransactionById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_TRANSACTION_BY_ID_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/transaction/${id}`, config)
    dispatch({
      type: USER_TRANSACTION_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_TRANSACTION_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// update user transaction to paid

//PUT User transaction
export const updateUserTransactionById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_USER_TRANSACTION_BY_ID_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/transaction/${id}`, {}, config)
    dispatch({
      type: UPDATE_USER_TRANSACTION_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_USER_TRANSACTION_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//Delete Users only for admin
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: ` Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/users/${id}`, config)
    dispatch({
      type: USER_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
