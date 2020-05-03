import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux'

import {deleteListing} from "../actions"



// import {StudentContext} from "../contexts/StudentContext"

const Button = styled.button`
    width: 3rem;
    margin: 2% auto;
    background-color: #4169E1;
    color: #fff;
    font-size: 0.7rem;
    text-decoration: none;
`;

const ListingCard = props => {

    console.log('testing out props')



    const id = props.id;

    const Processing = () => {
        props.history.push('/loading');

        setTimeout(()=>{
            props.history.push('/')
        }, 1000) 
    }   

    const deleteListing = () => {
        props.deleteListing(id)
        Processing()
    }


    const editListing = () => {
     
        props.history.push(`/editlisting/${id}`)
    }

    return (
        <div className="student-card">
            <div>
                <h4> Nights:{props.rooms}</h4>
                <h4>Major: {props.nights}</h4>
                <h4>Baths: {props.baths}</h4>
            </div>
            <Button onClick={editListing}>Edit</Button>
            <Button onClick={deleteListing}>Delete</Button>
        </div>


    );
};

export default connect( state => {
    return {
        listings: state.listings,
        isFetching: state.isFetching,
        error: state.error
    }
 }, {deleteListing}) (ListingCard);
 

