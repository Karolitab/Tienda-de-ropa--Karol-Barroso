import React from "react";
import { Spinner } from "react-bootstrap";
import './Loading.css'

export default function Loading(){
    return (
        <div className='divPadre'>
            <div className='divHijo'>
                <Spinner className='spinner-grow' animation="border"  color-blue />
            </div>
        </div>
    )
}