import React from "react";
import Alert from 'react-bootstrap/Alert';

export const AlertComponent = (props) => {
    return (
        <Alert>{props.text}</Alert>
    );
};