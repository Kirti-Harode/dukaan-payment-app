import React from "react";
import profileLogo from '../images/logo.png';

import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList, LuMousePointer2 } from "react-icons/lu";
import { AiOutlineAppstore,AiOutlineSound } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { PiChartBar } from "react-icons/pi";
import { TbCash } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePeopleOutline, MdOutlineColorLens } from "react-icons/md";
import { RxLightningBolt } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const menuitems = [
    {
      name: 'Home',
      icon: <GrHomeRounded />
    },
    {
      name: 'Orders',
      icon: <LuClipboardList />
    },
    {
      name: 'Products',
      icon: <AiOutlineAppstore />
    },
    {
      name: 'Delivery',
      icon: <FiTruck />
    },
    {
      name: 'Marketing',
      icon: <AiOutlineSound />
    },
    {
      name: 'Analytics',
      icon: <PiChartBar />
    },
    {
      name: 'Payments',
      icon: <TbCash />
    },
    {
      name: 'Tools',
      icon: <LuMousePointer2 />
    },
    {
      name: 'Discounts',
      icon: <CiDiscount1 />
    },
    {
      name: 'Audience',
      icon: <MdOutlinePeopleOutline />
    },
    {
      name: 'Appearance',
      icon: <MdOutlineColorLens />
    },
    {
      name: 'Plugins',
      icon: <RxLightningBolt />
    }
  ];

class NavBar extends React.Component {
  
  render () {
    return(
      <div style={{
          height: '100vh', 
          backgroundColor: '#1e2640', 
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 12px',
        }}
      >
        <div style={{
            display: 'flex',
            paddingBottom: '30px',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <img src={profileLogo} style={{width: '40px', height: '40px', borderRadius: '3px'}} alt=""/>
            <div style={{display: 'flex',
              alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column'}}>
              <div style={{ color: 'white', fontWeight:'500' }} > Nishyan </div>
              <div>
                <a href="" style={{color: '#d3d4d9', fontSize: '0.7rem'}} >Visit store</a>
              </div>
            </div>
          </div>
          <div style={{color: '#d3d4d9', paddingLeft: '30px' }} >
            <IoIosArrowDown style={{color: '#d3d4d9'}}/>
          </div>
        </div>
        {
          menuitems.map((item, index) => (
            <div style={{ 
                display: 'flex', 
                color: '#d3d4d9',
                gap: '15px',
                padding: '10px',
                cursor: 'pointer',
                borderRadius: '4px',
                backgroundColor: index === 6 ? '#363C54' : 'transparent'
              }}
            >
              <div style={{ fontSize: '1.2rem' }} >{item.icon} </div>
              <div style={{ fontSize: '1rem' }} >{item.name}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default NavBar;