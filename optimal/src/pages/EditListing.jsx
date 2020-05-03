import React from "react";

import EditListingForm from "../components/EditListingForm";
import styled from "styled-components";



const EditListing = (props) => {
    return (
        <div>
            <Edit>Edit Listing</Edit>
            <EditListingForm
            {...props}
            />
        </div>
    )
}

export default EditListing;


const Edit = styled.h2`
text-align: center;
`
