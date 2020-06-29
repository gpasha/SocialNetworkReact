import React from 'react';
import './FormsControls.css';

export const FormsControl = ({input, meta, child, ...props}) => {
    console.log("input => ", input)
    console.log("meta => ", meta)
    console.log("children => ", child)
    console.log("props => ", props)
    console.log(" *********************** ")
    const hasError = meta.touched && meta.error;
    return (
        <div className={ hasError ? 'error' : ''}>
            <div>
                {props.children}
            </div>
            { hasError && <div><span> {meta.error} </span></div> }
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