import React from 'react';
import { Field } from 'redux-form';
import './FormsControls.css';

export const FormsControl = ({input, meta: {touched, error}, children}) => {
    console.log("input => ", input)
    console.log(" *********************** ")
    const hasError = touched && error;
    return (
        <div className={ hasError ? 'error' : ''}>
            <div>
                {children}
            </div>
            { hasError && <div><span> {error} </span></div> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    console.log("Input props => ", props)
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
}

export const createField = (name, component, [...validators], type, label, props = {} ) => {
    return  (
        <div>    
            <Field name={name} component={component} validate={[...validators]} type={type} {...props} />
            <span>{label}</span>
        </div>
    )
};