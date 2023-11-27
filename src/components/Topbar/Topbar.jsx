import React from 'react'
import {  NavLink } from 'react-router-dom'
import '../../App.css'

const Topbar = () => {
    return (
        <>

            <nav className="navbar topbar navbar-expand  topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                <h2 className='header'>Dinesh <span className='soft'>Soft</span>  <span>Tech</span> </h2>

                <NavLink className="nav-link navlinks" to={'/'}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Users</span>
                </NavLink>
                <NavLink className="nav-link navlinks" to={'/dashboard'}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Dash Board</span>
                </NavLink>

                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 pname small">DHINESH T</span>
                            <img className="img-profile rounded-circle"
                                src={"https://media.licdn.com/dms/image/D5603AQGj5UuZQ9p3eQ/profile-displayphoto-shrink_400_400/0/1693722972398?e=1706745600&v=beta&t=P8A3LCHNBD378ZrQsfPjXYyH7X61cvGZkni3iGKPptQ"} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Topbar