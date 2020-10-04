import React from 'react';
import NewsList from "./NewsList";
import Heading from "./Heading";

const News = (props) => {
        return (
        <div>
            <Heading title="League of Legends"></Heading>
            <NewsList/>     
        </div>
     )
 }
       
       
export default News;