import React, { Component } from "react";

// import React, { Component } from 'react'

// const RegistrationForm = () => {

//     state = { fullname: false, email: false, password: false }

//     fieldStateChanged = (field) => state => this.setState({ [field]: state.errors.length === 0 });

//     emailChanged = this.fieldStateChanged('email');
//     fullnameChanged = this.fieldStateChanged('fullname');
//     passwordChanged = this.fieldStateChanged('password');

//     const { fullname, email, password } = this.state;
//     const formValidated = fullname && email && password;

//     return (
//         <div className="form-container d-table-cell postion-relative align-middle">
//             <form noValidate>
//                 <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-3">
//                     <legend className="form-label mb-0">Create an account</legend>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default RegistrationForm;


// cla


class RegistrationForm extends Component {

    state = { fullname: false, email: false, password: false }

    fieldsStateChanged = (field) => state => this.setState({ [field]: state.errors.length === 0 });
} 


export default RegistrationForm;
