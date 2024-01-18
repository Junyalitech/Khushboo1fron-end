import { NavLink, Outlet } from "react-router-dom"

 export const AdminLayout=()=>{

    return <>
        <header>
            <div>
                <ul className="admin-nav">
                    <li > <NavLink to="/admin/users">users</NavLink> </li>
                    <li> <NavLink to="/admin/contacts">contacts</NavLink></li>
                    <li> <NavLink to="/admin/logo">Logo</NavLink></li>
                    <li>Home</li>
                </ul>
            </div>
        </header>
        <Outlet />
    </>
}