import React from 'react'
import APIService from './APIservice'
import './UserData.css'; 
import './UserData2.css'; 
import './CustComponentStyles.css'; // Import the new CSS file

export default class CustComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             custs: [],
             sales:[],
             custFeed:[],
             branchFeed:[]
        }
    }
    
    componentDidMount(){
        APIService.getUsers().then((Response) =>{
            this.setState({users:Response.data})
        });
        APIService.getCust().then((Response) =>{
            this.setState({custs:Response.data})
        });
        APIService.getSale().then((Response) =>{
            this.setState({sales:Response.data})
        });
        APIService.getCustFeed().then((Response) =>{
            this.setState({custFeed:Response.data})
        });
        APIService.getBranchFeed().then((Response) =>{
            this.setState({branchFeed:Response.data})
        });
    }

    render() {
        return (
            <div>
            <div className="container">
            {/* <div className="table-section">
            <h1 style={{ color: '#fff' }}>Customer Feedback List</h1>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Feedback</th>
                            <th>Email Id</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.custFeed.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.feedback}</td>
            
                                    <td>{user.email}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div>

                <div className="table-section">
            <h1 style={{ color: '#fff' }}>Branch feedback list</h1>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Account Opening Services</th>
                            <th>Loan and mortage services</th>
                            <th>Sercurity Services</th>
                            <th>Debit and Credit Services</th>
                            <th>Mortage Services</th>
                            <th>Branch Name</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.branchFeed.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.accountopen}</td>
            
                                    <td>{user.loanandmortageservices}</td>
                                    <td>{user.securityservices}</td>
            
                                    <td>{user.providingdebitcredit}</td>
                                    <td>{user.mortageservices}</td>
            
                                    <td>{user.branchname}</td>
                                    
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div>
                
                
            </div>

            <div className="container">
            <div className="table-section">
            <h1 style={{ color: '#fff' }}>Managers List</h1>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email Id</th>
                            <th>Branch</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.branch}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div> */}
                <div className="table-section">
                <h1 style={{ color: '#fff' }}>Customers List</h1>
                <table className="table-container">
                    <thead>
                        <tr>
                            {/* <th>User Id</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email Id</th>
                            <th>Add</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.custs.map(
                                (user,index) =>
                                <tr key = {user.id} style={{ backgroundColor: index % 2 === 0 ? '#ddeeff' : '#e8e8e8'}}>
                                    {/* <td>{user.id}</td> */}
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.add}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
                </div>
                
            </div>

            </div>
        )
    }
}