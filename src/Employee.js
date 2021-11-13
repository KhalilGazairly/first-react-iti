import React from "react";

export default class Employee extends React.Component{
    constructor(){
        super();
        this.state = {
            id : 1,
            jobTitleName :"Developer",
            firstName:"Ahmed",
            lastName:"Ali",
            preferredFullName:"Ahmed Ali",
            employeeCode:"E1",
            region :"CA",
            phoneNumber:"408-1234567",
            emailAddress:"ahmed.ali@gmail.com"
        }
    }
    
    render(){
        return <div >
            <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>job Title</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Full name</th>
                        <th>Code</th>
                        <th>region</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.id}</td>
                        <td>{this.state.jobTitleName}</td>
                        <td>{this.state.firstName}</td>
                        <td>{this.state.lastName}</td>
                        <td>{this.state.preferredFullName}</td>
                        <td>{this.state.employeeCode}</td>
                        <td>{this.state.region}</td>
                        <td>{this.state.phoneNumber}</td>
                        <td>{this.state.emailAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}