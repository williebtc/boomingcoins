import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getUserById, getUserTransactionById } from "../actions/userActions"

const AdminTable1 = ({ id }) => {
  const dispatch = useDispatch()
  const [transaction, setTransaction] = useState([])
  const getUser = useSelector((state) => state.getUser)
  const { user } = getUser
  const userTransactionById = useSelector((state) => state.userTransactionById)
  const { userTransById, loading, error } = userTransactionById

  const createTransactionn = useSelector((state) => state.createTransaction)
  const { success, transaction: transactionn } = createTransactionn

  useEffect(() => {
    let modified = false
    if (!user) dispatch(getUserById(id))
    return () => (modified = true)
  }, [dispatch, user])

  useEffect(() => {
    let modified = false
    if (!userTransById) {
      dispatch(getUserTransactionById(id))
    } else {
      setTransaction(userTransById)
    }

    return () => (modified = true)
  }, [dispatch, transactionn, userTransById, success])

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Total Deposit</th>
          <th>Total Withdrawal</th>
          <th>Referrals</th>
          <th>Registration date</th>
        </tr>
      </thead>
      <tbody>
        {user ? (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              $
              {transaction.length > 0 &&
                transaction.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue.deposit
                }, 0)}
            </td>
            <td>
              {" "}
              $
              {transaction.length > 0 &&
                transaction.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue.withdrawal
                }, 0)}
            </td>
            <td>{user.referral}</td>
            <td>{new Date(user.createdAt).toDateString()}</td>
          </tr>
        ) : (
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default AdminTable1
