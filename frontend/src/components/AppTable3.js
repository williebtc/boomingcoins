import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSingleUserTransactions } from "../actions/userActions"
import Transactions from "./Transactions"
import { FaCheck, FaTimes } from "react-icons/fa"

const AppTable3 = () => {
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
      // console.log(transaction)
    }

    return () => (isModified = true)
  }, [dispatch, userTransaction])
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>withdrawal</th>
          <th>Widthdrawal Date</th>
          <th>Paid</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((trans, index) => {
          const { withdrawal, withdrawalDate, isWithdrawalPaid } = trans

          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>${withdrawal}</td>
              <td>{new Date(withdrawalDate).toLocaleDateString()}</td>
              <td>
                {isWithdrawalPaid ? (
                  <FaCheck color="#28a745" size={35} />
                ) : (
                  <FaTimes color="#dc3545" size={35} />
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default AppTable3
