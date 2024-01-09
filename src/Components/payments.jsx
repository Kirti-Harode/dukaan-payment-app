import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiDownloadSimple } from "react-icons/pi";
import { TbArrowsSort } from "react-icons/tb";

const Orders = [
  {
    OrderId: '#281209',
    Status: 'Successful',
    TransactionId: '131634495747',
    RufundDate: 'Today, 08:45 PM',
    OrderAmount: '\u20B91,125.00',
  },
  {
    OrderId: '#281208',
    Status: 'Processing',
    TransactionId: '131634495747',
    RufundDate: 'Yesterday, 03:00 PM',
    OrderAmount: '\u20B91,125.00',
  }, 
  {
    OrderId: '#281207',
    Status: 'Successful',
    TransactionId: '131634495747',
    RufundDate: '1 Jan 2024, 02:00 PM',
    OrderAmount: '\u20B91,125.00',
  },
  {
    OrderId: '#281206',
    Status: 'Successful',
    TransactionId: '131634495747',
    RufundDate: '1 Jan 2024, 02:00 PM',
    OrderAmount: '\u20B91,125.00',
  },
  {
    OrderId: '#281205',
    Status: 'Successful',
    TransactionId: '131634495747',
    RufundDate: '1 Jan 2024, 02:00 PM',
    OrderAmount: '\u20B91,125.00',
  },
  {
    OrderId: '#281204',
    Status: 'Successful',
    TransactionId: '131634495747',
    RufundDate: '1 Jan 2024, 02:00 PM',
    OrderAmount: '\u20B91,125.00',
  },

]

class Payments extends React.Component {
  render () {
    return(
      <div style={{
          background: '#FAFAFA',
          padding: '20px',
          overflow: 'scroll',
          marginTop: '80px'
        }}
      >
				<div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '20px'
        }}>
					Overview
          <div>
            <select>
              <option value='Last Month'>Last Month</option>
              <option value='This Month'>This Month</option>
            </select>
          </div>
				</div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px'
          }}
        > 
          <div style={{
              gap: '10px',
              backgroundColor: '#136DB4',
              color: 'white',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div
              style={{padding: 15}}
            >
              <div style={{
                  fontSize: '0.8rem',
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '10px',
                  paddingBottom: '10px'
                }}
              >
                Next Payout
                <AiOutlineQuestionCircle />
              </div>
              <div style={{
                  display: 'flex', 
                  gap: '40px', 
                  alignItems: 'center', 
                  cursor: 'pointer'
                }}
              >
                <div style={{fontSize: '1.8rem', fontWeight: '500'}}>
                  <span>&#8377;</span>
                  2,312.23
                </div>
                <div >
                  <a href=''
                  style={{
                      fontSize: '0.7rem',
                      display:'flex',
                      alignItems: 'center',
                      color: 'white'
                    }}
                  >
                    23 Orders
                    <MdKeyboardArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '62px',
              backgroundColor: '#0E4F82',
              fontSize: '0.7rem',
              padding: '10px 15px',
              borderRadius: '4px',
            }}
            >
              <div >
                Next Payout Date: 
              </div>
              <div>
                Today, 04:00PM
              </div>
            </div>
          </div>
        
          <div style={{
              gap: '10px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
                fontSize: '0.8rem',
                display: 'flex', 
                alignItems: 'center',
                gap: '10px',
                color: 'gray'
              }}
            >
              Amount Pending
              <AiOutlineQuestionCircle />
            </div>
            <div style={{
                display: 'flex', 
                gap: '40px', 
                alignItems: 'center', 
                cursor: 'pointer'
              }}
            >
              <div style={{fontSize: '1.8rem', fontWeight: '500'}}>
                <span>&#8377;</span>
                92,312.20
              </div>
              <div >
                <a href=''
                style={{
                    fontSize: '0.7rem',
                    display:'flex',
                    alignItems: 'center'
                  }}
                >
                  13 Orders
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div style={{
              gap: '10px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
                fontSize: '0.8rem',
                display: 'flex', 
                alignItems: 'center',
                gap: '10px',
                color: 'gray'
              }}
            >
              Amount Processed
              <AiOutlineQuestionCircle />
            </div>
            <div style={{
                display: 'flex', 
                gap: '40px', 
                alignItems: 'center', 
                cursor: 'pointer'
              }}
            >
              <div style={{fontSize: '1.8rem', fontWeight: '500'}}>
                <span>&#8377;</span>
                23,92,312.19
              </div>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          paddingTop: '32px',
          paddingBottom: '20px'
        }}>
          Transactions | Last Month
        </div>
        <div style={{
          display: 'flex',
          gap: '20px',
          fontSize: '0.7rem',
          paddingBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            padding: '5px'
          }}>
            Payouts (22)
          </div>
          <div style={{
            backgroundColor: '#136DB4',
            borderRadius: '10px',
            padding: '5px',
            color: 'white'

          }}>
            Refunds (6)
          </div>
        </div>

        <div style={{
            backgroundColor: 'white',
            padding: '10px'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
                border: '1px solid #e0e0e0', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                width: '200px',
                padding: '4px 5px',
              }}
				    >
              <CiSearch/>
              <input style={{all: 'unset', width: '200px', fontSize: '0.8rem'}} placeholder='Order ID or Transaction ID'></input>
				    </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                border: '1px solid #e0e0e0', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                color: '#555555',
                gap: '5px',
                fontSize: '0.9rem'
              }}>
                Sort
                <TbArrowsSort />
              </div>
              <div style={{
                border: '1px solid #e0e0e0', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                color: '#555555',
                gap: '5px',
                fontSize: '1rem'
              }}>
                <PiDownloadSimple />
              </div>
            </div>
          </div>
          <div>
            <table style={{width: '100%'}}>
              <thead>
                <tr style={{
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  justifyContent: 'space-evenly',
                  backgroundColor: '#F2F2F2',
                  borderRadius: '2px',
                  gap: '50px',
                  fontSize: '0.8rem',
                  marginTop: '10px',
                  marginBottom: '10px',
                  padding: '8px 0px'
                }}
                >
                  <th style={{fontWeight: '400'}}>Order ID</th>
                  <th style={{fontWeight: '400'}}>Status</th>
                  <th style={{fontWeight: '400'}}>Transaction ID</th>
                  <th style={{fontWeight: '400'}}>Refund Date</th>
                  <th style={{fontWeight: '400'}}>Order Amount</th>
                </tr>
              </thead>
              <tbody style={{textAlign: 'left'}}>
                {Orders.map((order, index) => (
                  <tr style={{
                    display: 'flex', 
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start', 
                    textAlign: 'left',
                    gap: '50px',
                    fontSize: '0.8rem',
                    paddingTop: '10px'
                  }}
                  >
                    <td style={{color: '#136DB4'}}>{order.OrderId}</td>
                    <td>{order.Status}</td>
                    <td>{order.TransactionId}</td>
                    <td>{order.RufundDate}</td>
                    <td>{order.OrderAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Payments;