import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth"
import styled from "styled-components";

const EditListingForm = (props) => {
   
    const id = props.match.params.id;
    const [edit, setEdit] = useState({
        rooms: '',
        nights: '',
        baths:'',
        users_id: id
    })


    const handleChange = event => {
        setEdit({ ...edit, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://aoi5.herokuapp.com/api/listing/${id}`, edit)
            .then(response => {
                console.log('response after adding student', response.data);
                props.history.push('/')
            })
            .catch(err => {
                console.log("SignUp Login Catch Error: ", err.response.data.message);
                alert(err.response.data.message);
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="listing_name"
                    placeholder="Enter New Listing"
                    onChange={handleChange}
                    value={edit.listing_name}
                />
                <input
                    type="text"
                    name="nights"
                    placeholder="Update Nights"
                    onChange={handleChange}
                    value={edit.nights}
                />
                 <input
                    type="text"
                    name="baths"
                    placeholder="Update Baths"
                    onChange={handleChange}
                    value={edit.baths}
                />
                <Button type="submit">Edit Listing</Button>
            </form>
        </Container>
    )
}


export default EditListingForm;

const Button = styled.button`
background-color: #4169E1;
color: #fff;

`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`