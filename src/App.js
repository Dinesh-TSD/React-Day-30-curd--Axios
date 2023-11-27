import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar/Topbar';
import UsersList from './components/Users/UsersList';
import CreateUser from './components/CreateUsers/CreateUser';
import ViewUser from './components/ViewUser/ViewUser';
import EditUser from './components/EditUser/EditUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <ToastContainer autoClose={1000} />
              <div className="container-fluid">
                <Routes>
                  <Route path={'/'} element={<UsersList />} />
                  <Route path={'/create-user'} element={<CreateUser />} />
                  <Route path={'/view-user/:id'} element={<ViewUser />} />
                  <Route path={'/edit-user/:id'} element={<EditUser />} />
                </Routes>
                
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
