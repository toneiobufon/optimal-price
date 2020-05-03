import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { connect } from 'react-redux'
import {addListing} from '../actions'

const Create = styled.div`
 border: 1px solid black;
 height: 89vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Button = styled.button`
background-color: #4169E1;
color: #fff;

`

const CreateListingForm = (props) => {
    const userId = localStorage.getItem('id')
    const [add, setAdd] = useState({
        listing_name: '',
        nights: '',
        baths: '',
        users_id: userId
    })
    const handleChange = event => {
        setAdd({ ...add, [event.target.name]: event.target.value })
    }

    const Processing = id => {
        props.history.push('/loading');
        setTimeout(()=>{
            props.history.push(`/`)
        }, 1000) 
    }   
    const submitForm = event => {
        event.preventDefault();
        props.addListing(add)
        Processing()
    }

 
    return (
        <Create>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    name="student_name"
                    placeholder="Enter Listing Name"
                    value={add.listing_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name="nights"
                    placeholder="Enter nights"
                    value={add.nights}
                    onChange={handleChange}
                />
                  <input
                    type='text'
                    name="baths"
                    placeholder="Enter baths"
                    value={add.baths}
                    onChange={handleChange}
                />
                <Button type="submit">Create Listing</Button>
            </form>
        </Create>
    )
}
export default connect( state => {
    return {
        listings: state.listings,
        isFetching: state.isFetching,
        error: state.error
    }
}, {addListing}) (CreateListingForm);

