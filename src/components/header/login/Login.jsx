import React from 'react';
import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { Input, createField } from '../../../Assets/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/Validations/Validations';
import { connect } from 'react-redux';
import { login } from './../../../reduxFoulder/authorizeReducer';
import { Redirect } from 'react-router-dom';


// let maxLength15 = maxLengthCreator(15);
let maxLength25 = maxLengthCreator(25);

const LoginForm = ( { handleSubmit, error } ) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
             {createField("firstName", Input, [required, maxLength25], "text", "Name")}
             {createField("password", Input, [required, maxLength25], "password", "Password")}
             {createField("rememberMe", Input, [], "checkbox", "Remember me")}

            { error && <div className="form__error">{ error }</div> }
            
            <button>Login</button>
        </form>
    )
}
  
let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let submitData = (formData) => {
        console.log("formData => ", formData);
        props.login(formData.firstName, formData.password, formData.rememberMe);
    }
    if ( props.isAuthozied ) {
        return <Redirect to="/profile" />
    }
    return (
        <div className="login">
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={submitData}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuthozied: state.authorize.isAuthozied
})

export default connect( mapStateToProps, { login } )(Login);