import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
      </div>
      <div class="row">

        <Card />
      </div>
    </>
  )
}

export default Dashboard