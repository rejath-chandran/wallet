import React from 'react'
import "./Layout.css"
import {CDBSidebar,CDBSidebarHeader,CDBSidebarContent,CDBSidebarMenu,CDBSidebarMenuItem} from 'cdbreact'
import { Outlet} from "react-router-dom";
import { Login } from '../../redux/AuthSlice';
import { useDispatch} from 'react-redux';
export default function Layout() {
  const dispatch=useDispatch()
 
  return (
    <div className='m-container'>

   <div style={{height:"100vh"}}>
    
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          ADMIN
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem  icon="th-large">Wallet</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={()=>{
              dispatch(Login(null))
              localStorage.clear()
            }} icon="sticky-note" >Logout</CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

    <div className='l-container'>
      <Outlet/>
    </div>
  </div>
  )
}
