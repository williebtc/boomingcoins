import React, { useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "./Message"
import Loader from "./Loader"
import { listUsers, deleteUser } from "../actions/userActions"
import { FaEdit, FaTimes, FaCheck, FaTrash } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import CreateUser from "./CreateUser"

// notice the history, it is as object and used as props
const UserList = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  // Handles users listing
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  // For security Issues  **The secondLine gets userInfo from the userAction
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // This deletes a user
  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  // Dispatches users list
  useEffect(() => {
    // This makes sure that only the users sees userList
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push("/login")
    }
    // History and dispatch is used as dependency
  }, [dispatch, history, userInfo, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?"))
      dispatch(deleteUser(id))
  }

  return (
    <Container>
      <CreateUser />
      <h1 className="h1 text-center">Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm"
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>VERIFIED EMAIL</th>
              <th>REGISTRATION DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck color="green" title="Is admin" />
                  ) : (
                    <FaTimes color="red" title="Not admin" />
                  )}
                </td>
                <td>
                  {user.isVerified ? (
                    <FaCheck color="green" title="Is admin" />
                  ) : (
                    <FaTimes color="red" title="Not admin" />
                  )}
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="info" className="btn-sm">
                      <FaEdit title="Edit User" />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash title="Delete User" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default UserList
