import React from 'react';
import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Assets/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/Validations/Validations';

let maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <Field name="firstName" component={Input} validate={[required, maxLength15]} type="text" />
                <span>Name</span>
            </div>
            <div>
                <Field name="password" component={Input} validate={[required, maxLength15]} type="password" />
                <span>password</span>
            </div>
            <div>
                <Field name="rememberMe" component={Input} validate={[required]} type="checkbox" />
                <span>Remember me</span>
            </div>
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
    }
    return (
        <div className="login">
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={submitData}/>
        </div>
    )
}

export default Login;