import axios from 'axios';
import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { setUsers } from '../../Reducers/UserReducer';
import { RingLoader } from 'react-spinners';
import './ViewUser.css'

const ViewUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.app)

  let fetchData = async () => {
    let employee = await axios.get(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`)
    dispatch(setUsers(employee.data))
  }
  useEffect(() => {
    fetchData();
  },[])


  return (
    <>
      <div className='container min-vh-100 p-0'>
        <div className="row justify-content-center align-content-center mt-5">
          <div className="  col-sm-12">
            <div className="card text-center shadow">
              <div className="card-header h3">
                Employee Detail
              </div>
              <div className="card-body d-flex justify-content-center">

                {loading ? (
                  <RingLoader color='blue' />
                ) : (
                  <div className="table-responsive view mx-lg-5">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td className="text-end">Name</td>
                          <td className="">{users.name}</td>
                        </tr>
                        <tr>
                          <td className="text-end">User Name</td>
                          <td className="">{users.username}</td>
                        </tr>
                        <tr>
                          <td className="text-end">Email</td>
                          <td>{users.email}</td>
                        </tr>
                        <tr>
                          <td className="text-end">Company</td>
                          <td>{users.company?.name}</td>
                        </tr>
                        <tr>
                          <td className="text-end">Phone</td>
                          <td>{users.phone}</td>
                        </tr>
                        <tr>
                          <td className="text-end">Website</td>
                          <td>{users.website}</td>
                        </tr>
                        <tr>
                          <td className="text-end">Address</td>
                          <td>
                            {`${users.address?.street}, ${users.address?.suite}, ${users.address?.city}, ${users.address?.zipcode}`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
                }

              </div>
              <div className="card-footer text-body-secondary">
                <div className=''>
                  <Link to={'/'} className='btn btn-primary px-lg-5'>Back</Link>
                </div>
              </div>
            </div></div></div>
      </div>

    </>
  )
}

export default ViewUser