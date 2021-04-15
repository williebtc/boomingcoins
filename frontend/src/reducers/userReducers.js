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
  USER_UPDATE_PROFILE_RESET,
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

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    case USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
export const getSingleUserTransactionsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SINGLE_USER_TRANSACTIONS_REQUEST:
      return { loading: true }
    case USER_SINGLE_USER_TRANSACTIONS_SUCCESS:
      return { loading: false, userTransaction: action.payload }
    case USER_SINGLE_USER_TRANSACTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_TRANSACTIONS_REQUEST:
      return { loading: true }
    case USER_CREATE_TRANSACTIONS_SUCCESS:
      return { loading: false, success: true, transaction: action.payload }
    case USER_CREATE_TRANSACTIONS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return { loading: false, success: true, users: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    case USER_LIST_RESET:
      return { users: {} }
    default:
      return state
  }
}

export const getUserByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_BY_ID_REQUEST:
      return { loading: true }
    case USER_GET_BY_ID_SUCCESS:
      return { loading: false, success: true, user: action.payload }
    case USER_GET_BY_ID_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const getUserTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TRANSACTION_BY_ID_REQUEST:
      return { loading: true }
    case USER_TRANSACTION_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        userTransById: action.payload,
      }
    case USER_TRANSACTION_BY_ID_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const updateUserTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_TRANSACTION_BY_ID_REQUEST:
      return { loading: true }
    case UPDATE_USER_TRANSACTION_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        updatedUserTransById: action.payload,
      }
    case UPDATE_USER_TRANSACTION_BY_ID_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
