import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSingleUserTransactions } from "../actions/userActions"
import Transactions from "./Transactions"

const AppTable2 = () => {
  const dispatch = useDispatch()
  const [transaction, setTransaction] = useState([])
  const userTransactions = useSelector((state) => state.userTransactions)
  const { userTransaction } = userTransactions
  useEffect(() => {
    let isModified = false
    if (!userTransaction) {
      dispatch(getSingleUserTransactions())
    } else {
      setTransaction(userTransaction)
    }

    return () => (isModified = true)
  }, [dispatch, userTransaction])
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Deposit</th>
          <th>Deposit Date</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((trans, index) => {
          const { deposit, createdAt } = trans
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>${deposit}</td>
              <td>{new Date(createdAt).toLocaleDateString()}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default AppTable2
