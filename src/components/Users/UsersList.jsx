import React, { useEffect, } from 'react'
import { Link, } from 'react-router-dom'
import axios from 'axios';
import './UserList.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setLoading, setUsers } from '../../Reducers/UserReducer';
import RingLoader from 'react-spinners/RingLoader';
import { toast } from 'react-toastify';

const UsersList = () => {
  // Hooks decalare
  let dispatch = useDispatch();
  let data = useSelector((state) => state.app)
  //toast is used for user delete the data the warning Message display
  const closemeg = (name) => toast(`${name} is deleted`, {  type: toast.TYPE.WARNING, autoClose: 2000 });

  //useEffect hook is used to controll side Effect.
  useEffect(() => {
    //getting data from mock api get method
    const getData = async () => {
      try {
        dispatch(setLoading());
        let userlist = await axios.get("https://65571300bd4bcef8b611ff00.mockapi.io/product/users")
        dispatch(setUsers(userlist.data))
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, []);

//delete user data funtion
  async function deleteData(id,name) {
    console.log(id);
    try {
      await axios.delete(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${id}`)
      closemeg(name);
      dispatch(deleteUser(id))
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">USERS FULL DETAILS</h1>
        <Link to={'/create-user'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">USER LIST</h6>
        </div>
        <div className="card-body">


            { //loading is true display RingLoader or display Users
              data.loading ? (
                <div className="ring">
                  <RingLoader color="blue" id='ringloader' className="text-center " />
                  </div>
              ) : (
                <div className="table-responsive">
                  {Array.isArray(data.users) && data.users.length > 0 ? (
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead className='table-light'>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>USER NAME</th>
                          <th>EMAIL</th>
                          <th>ADDRESS</th>
                          <th>PHONE</th>
                          <th>WEBSITE</th>
                          <th>COMPANY</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tfoot className='table-light'>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>USER NAME</th>
                          <th>EMAIL</th>
                          <th>ADDRESS</th>
                          <th>PHONE</th>
                          <th>WEBSITE</th>
                          <th>COMPANY</th>
                          <th>Action</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        
                        {data.users.map((employee, index) => {
                          return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.username}</td>
                            <td>{employee.email}</td>
                            <td>
                              {`${employee.address.street},${employee.address.suite},${employee.address.city},${employee.address.zipcode}.`}
                            </td>
                            <td>{employee.phone}</td>
                            <td>{employee.website}</td>
                            <td>{employee.company.name}</td>
                            <td className='action d-flex'>
                              <Link to={`/view-user/${employee.id}`} className='btn btn-sm btn-info'>view</Link>
                              <Link to={`/edit-user/${employee.id}`} className='btn btn-sm btn-warning ml-1' >Edit</Link>
                              <button onClick={() => deleteData(employee.id,employee.name)} className='btn btn-sm btn-danger ml-1' >delete</button>
                            </td>
                          </tr>
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center">No user data available</p>
                  )}


                </div>
              )
            }

        </div>
      </div>

    </>
  )
}

export default UsersList;