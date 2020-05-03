import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import ListingCard from "./ListingCard"

import styled from "styled-components";
import { connect } from 'react-redux'
import { getListing, deleteListing } from "../actions"

const Lists = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 3rem;
   max-width: 73rem;
`;

const EachList = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0.3rem solid #4169E1;
   width: 13rem;
   padding: 2%;
   margin: 1rem 0;
   
`;

const ListingList = (props) => {

   console.log('lets see if this shows', props)

   const id = localStorage.getItem('id')

   useEffect(() => {
      props.getListing(id)

   }, [])
   return (
      <Lists>
         {props.listings.map(listing => {
            return (

               <EachList>
                  <ListingCard {...listing} {...props}/>
               </EachList>
            )
         })}
      </Lists>
   )
}

export default connect( state => {
   return {
       listings: state.listings,
       isFetching: state.isFetching,
       error: state.listings
   }
}, {getListing, deleteListing}) (ListingList);


