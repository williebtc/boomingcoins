import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSingleUserTransactions } from "../actions/userActions"

const AppTable = () => {
  const [TD, setTD] = useState()
  const [ND, setND] = useState()
  const [TW, setTW] = useState()
  const [NW, setNW] = useState()
  const dispatch = useDispatch()
  const [transaction, setTransaction] = useState([])
  const userTransactions = useSelector((state) => state.userTransactions)
  const { userTransaction } = userTransactions
  useEffect(() => {
    let isModified = false
    if (!userTransaction) {
      dispatch(getSingleUserTransactions())
    } else {
      const tD = userTransaction.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.deposit
      }, 0)
      const nD = userTransaction.length
      const tW = userTransaction.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.withdrawal
      }, 0)
      const nW = userTransaction.filter(
        (trans) => trans.isWithdrawalPaid === true
      ).length

      setTD(tD)
      setND(nD)
      setTW(tW)
      setNW(nW)
    }

    return () => (isModified = true)
  }, [dispatch, userTransaction])
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Deposits</th>
          <th>Deposit count</th>
          <th>Withdrawals</th>
          <th>Withdrawal count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${TD}</td>
          <td>{ND}</td>
          <td>${TW}</td>
          <td>{NW}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default AppTable
