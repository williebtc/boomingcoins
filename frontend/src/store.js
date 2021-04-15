import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  getSingleUserTransactionsReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  createTransactionReducer,
  getUserByIdReducer,
  getUserTransactionReducer,
  userDeleteReducer,
  updateUserTransactionReducer,
} from "./reducers/userReducers"

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userTransactions: getSingleUserTransactionsReducer,
  createTransaction: createTransactionReducer,
  userList: userListReducer,
  getUser: getUserByIdReducer,
  userTransactionById: getUserTransactionReducer,
  updatedUserTransactionById: updateUserTransactionReducer,
  userDelete: userDeleteReducer,
})

// Local storage matters
const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null

// initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
