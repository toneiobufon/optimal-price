import React from "react";
import ListingList from '../components/ListingList.jsx'
import { Link } from 'react-router-dom'
import styled from "styled-components";


const DashAndList = styled.div`
    margin-left: 3rem;
    margin-top: 1rem;
`;

const Button = styled.button`
background-color: #4169E1;
color: #fff;
padding: 0.5%;
`

const Dashboard = (props) => {
   
    return (
        <div>
            <DashAndList>
                <Link to='/createlisting'>
                    <Button>Add Listing</Button>
                </Link>
            </DashAndList>
            <ListingList {...props} />
        </div>
    )
}

export default Dashboard;

