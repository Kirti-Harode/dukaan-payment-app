import React from "react";
import { AiOutlineQuestionCircle, AiFillNotification } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

class Header extends React.Component {
  render () {
    return(
      <div style={{
					position: 'fixed',
					top: '0',
					left: '10',
					width: '100%',
					zIndex: 1000,
					display: 'flex', 
					alignItems: 'center',
					padding: '10px 20px',
					background: 'white',
					gap: '180px'
				}}
			>
				<div style={{
						display: 'flex', 
						alignItems: 'center',
						gap: '50px',

					}}
				>
					<h1 style={{fontWeight: 'normal', fontSize: '1.2rem'}}>Payouts</h1>
					<a href= '' 
						style={{
							display: 'flex', 
							alignItems: 'center',
							color: 'black',
							fontSize: '0.8rem',
							gap: '8px'
						}}
					>
						<AiOutlineQuestionCircle />
						<div>How it works</div>
					</a>
				</div>
				<div style={{
						borderRadius: '4px',
						display: 'flex',
						alignItems: 'center',
						width: '300px',
						padding: '10px',
						backgroundColor: '#F2F2F2'
					}}
				>
					<CiSearch/>
					<input style={{all: 'unset', width: '200px', fontSize: '0.8rem'}} placeholder='Search features, tutorials, etc.'></input>
				</div>
				<div style={{
						display: 'flex',
						gap: '20px',
						alignItems: 'center',
						fontSize: '1rem'
					}}
				>
					<div style={{
							borderRadius: '50%', 
							backgroundColor: '#F2F2F2',
							padding: '5px 6px 2px 4px'
						}}>
						<AiFillNotification />
					</div>
					<div style={{
						borderRadius: '50%', 
						backgroundColor: '#F2F2F2',
						fontSize: '1.3rem',
						padding: '3px 3px 0px 3px'
					}}>
						<MdArrowDropDown />
					</div>
				</div>
      </div>
    )
  }
}

export default Header;