import React from "react";
import CreateListingForm from "../components/CreateListingForm";



export const CreateListing = (props) => {
    return (
        <div>
            <CreateListingForm {...props} />
        </div>
    )
}

export default CreateListing;