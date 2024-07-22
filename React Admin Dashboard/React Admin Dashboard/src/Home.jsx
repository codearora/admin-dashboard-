import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, PieChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import './App.css';

function Home() {

    const data = [
        {
          name: 'Branch 1',
          uv: 4000,
          Customers: 2400,
          amt: 2400,
        },
        {
          name: 'Branch 2',
          uv: 3000,
          Customers: 1398,
          amt: 2210,
        },
        {
          name: 'Branch 3',
          uv: 2000,
          Customers: 9800,
          amt: 2290,
        },
        {
          name: 'Branch 4',
          uv: 2780,
          Customers: 3908,
          amt: 2000,
        },
        {
          name: 'Branch 5',
          uv: 1890,
          Customers: 4800,
          amt: 2181,
        },
        {
          name: 'Branch 6',
          uv: 2390,
          Customers: 3800,
          amt: 2500,
        },
        {
          name: 'Branch 7',
          uv: 3490,
          Customers: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>BRANCH ADMIN DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>58,44,125</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div> */}
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>3,40,56,957</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BRANCHES</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>4200</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Customers" fill="#90EE90" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Customers" stroke="#82ca9d" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>

            {/* Adding a Pie Chart */}
      

            

        </div>


    </main>
  )
}

export default Home