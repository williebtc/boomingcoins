import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { FaCheck, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import Message from "./Message"
import LastDeposits from "./LastDeposits"
import LastWithdrawal from "./LastWithdrawal"

const Investors = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [users, setUsers] = useState([])
  const getTopUsers = async () => {
    await axios
      .get(`/api/users/transactions/top`)
      .then(function (response) {
        setSuccess(true)
        setLoading(false)
        setUsers(response.data)
      })
      .catch(function (error) {
        setError(true)
        // console.log(error)
      })
  }
  useEffect(() => {
    let isModified = false
    getTopUsers()
    return () => (isModified = true)
  }, [users])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container className="investors">
      <h2>Top Investors</h2>
      <Table responsive>
        <thead className="investors-thead">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Deposit</th>
            <th>Plan</th>
            <th>Withdrawal</th>
            <th>Deposit Date</th>
            <th>Withdrawal date</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody className="investors-thead">
          {users.map((user, index) => {
            const {
              name,
              deposit,
              percent,
              withdrawal,
              createdAt,
              withdrawalDate,
              isWithdrawalPaid,
            } = user
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>${deposit}</td>
                <td>{percent * 100}%</td>
                <td>${withdrawal}</td>
                <td>{new Date(createdAt).toLocaleDateString()}</td>
                <td>{new Date(withdrawalDate).toLocaleDateString()}</td>
                <td>
                  {isWithdrawalPaid ? (
                    <FaCheck color="green" title="Paid" />
                  ) : (
                    <FaTimes color="red" title="Not Paid" />
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <LastDeposits />
      <LastWithdrawal />
    </Container>
  )
}

export default Investors
