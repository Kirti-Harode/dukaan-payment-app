import React from "react";
import NavBar from "./navbar";
import Payments from "./payments";
import Header from "./header";

class Dashboard extends React.Component {
  render () {
    return(
      <div style={{display: 'flex'}}>
				<NavBar />
				<div style={{width: '100%', padding: '10'}}>
					<Header />
					<Payments />
				</div>
      </div>
    )
  }
}

export default Dashboard;