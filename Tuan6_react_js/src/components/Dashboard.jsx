import { Link, Outlet } from "react-router-dom";
import React from 'react'

export default function () {
  return (
    <div>
        <h2>Dashboard</h2>

        <nav>
            <Link to={"profile"}>Profile</Link>|{" "}
            <Link to={"orders"}>Orders</Link>|{" "}
            <Link to={"setting"}>Setting</Link>
        </nav>
        <hr />
        <Outlet/>
    </div>
  )
}
