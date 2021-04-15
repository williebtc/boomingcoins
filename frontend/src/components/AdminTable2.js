import React, { useState, useEffect } from "react"
import { Button, Table, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import {
  getUserTransactionById,
  updateUserTransactionById,
} from "../actions/userActions"
import { FaCheck, FaTimes } from "react-icons/fa"
import axios from "axios"

const AdminTable2 = (user) => {
  const dispatch = useDispatch()
  const [transactions, setTransactions] = useState([])
  const [referrals, setReferrals] = useState([])
  const [refUpdateSuccess, setRefUpdateSuccess] = useState(false)

  const userTransactionById = useSelector((state) => state.userTransactionById)
  console.log(userTransactionById)

  const { loading, error, userTransById } = userTransactionById

  const updatedUserTransactionById = useSelector(
    (state) => state.updatedUserTransactionById
  )
  const {
    loading: updateLoading,
    error: updateError,
    updatedUserTransById,
  } = updatedUserTransactionById

  // Transaction
  useEffect(() => {
    let isModified = false
    getUserTransactionById(user._id)
    if (userTransById) {
      setTransactions(userTransById)
    }

    return () => (isModified = true)
  }, [dispatch, userTransById, updatedUserTransById])

  const handlePaid = async (id) => {
    if (
      window.confirm(
        "Are you sure that you want to mark this transaction as paid?"
      )
    )
      dispatch(updateUserTransactionById(id))
  }

  //  Referral
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${userInfo.token}`,
    },
  }

  const getReferralByUserId = async (id) => {
    const { data } = await axios.get(`/api/users/referral/${id}`, config)

    if (data) {
      setReferrals(data)
    } else {
      throw new Error("Unable to get User referral")
    }
  }

  useEffect(() => {
    let isModified = false
    getReferralByUserId(user._id)
    return () => (isModified = true)
  }, [user, refUpdateSuccess])

  const handleReferralPaid = async (id) => {
    if (
      window.confirm("Are you sure you want to mark this referral as paid?")
    ) {
      const { data } = await axios.put(`/api/users/referral/${id}`, {}, config)

      if (data) {
        console.log(data)
        setRefUpdateSuccess(true)
      } else {
        throw new Error("This process is incomplete.")
      }
    } else {
      throw new Error("Unable to mark user's referral as paid.")
    }
  }

  return (
    <Row>
      <Col xs={12}>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Deposit Date</th>
              <th>Deposit ($)</th>
              <th>Package (%)</th>
              <th>Withdrawal ($)</th>
              <th>Withdrawal Date</th>
              <th>Withdrawal Status</th>
              <th>Mark as Paid</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => {
                const {
                  _id,
                  createdAt,
                  deposit,
                  percent,
                  withdrawal,
                  withdrawalDate,
                  isWithdrawalPaid,
                } = transaction
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{new Date(createdAt).toLocaleDateString()} </td>
                    <td>{deposit} </td>
                    <td>{percent} </td>
                    <td> {withdrawal} </td>
                    <td>{new Date(withdrawalDate).toLocaleDateString()}</td>
                    <td>
                      {isWithdrawalPaid ? (
                        <FaCheck color="#28a745" size={32} />
                      ) : (
                        <FaTimes color="#dc3545" size={32} />
                      )}
                    </td>
                    <td>
                      {!isWithdrawalPaid ? (
                        <Button
                          type="button"
                          variant="outline-warning"
                          onClick={() => handlePaid(_id)}
                        >
                          Pay
                        </Button>
                      ) : (
                        <Button type="button" variant="success" disabled>
                          Paid
                        </Button>
                      )}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>-</td>
                <td>-</td>
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
      </Col>
      <Col xs={12}>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Referred User</th>
              <th>Verified</th>
              <th>Paid</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {referrals.length > 0 ? (
              referrals.map((referral, index) => {
                const {
                  _id,
                  referredEmail,
                  isVerified,
                  isReferralPaid,
                } = referral
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td> {referredEmail} </td>

                    <td>
                      {isVerified ? (
                        <FaCheck color="#28a745" size={32} />
                      ) : (
                        <FaTimes color="#dc3545" size={32} />
                      )}
                    </td>
                    <td>
                      {isReferralPaid ? (
                        <FaCheck color="#28a745" size={32} />
                      ) : (
                        <FaTimes color="#dc3545" size={32} />
                      )}
                    </td>
                    <td>
                      {!isReferralPaid ? (
                        <Button
                          type="button"
                          variant="outline-warning"
                          onClick={() => handleReferralPaid(_id)}
                        >
                          Pay
                        </Button>
                      ) : (
                        <Button type="button" variant="success" disabled>
                          Paid
                        </Button>
                      )}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default AdminTable2
