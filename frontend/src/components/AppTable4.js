import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from "../actions/userActions"
import Transactions from "./Transactions"

const AppTable4 = () => {
  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  useEffect(() => {
    let isModified = false

    if (!user) {
      dispatch(getUserDetails("profile"))
    }

    return () => (isModified = true)
  }, [dispatch, user])
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Referals</th>
          <th>Amount</th>
          <th>Referral Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.referral}</td>
          <td>${user.referral * 5}</td>
          <td>https://boomingcoins.herokuapp.com/register/?ref={user.email}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default AppTable4
