'use client';

import React from "react";
import { useState } from "react";

interface PostFetcherProps {
  children: React.ReactElement<{ limit: number }>;
}

const PostFetcher = ({children}: PostFetcherProps) => {
    const [limit, setLimit] = useState(10);

    const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('value changed to ' + e.target.value);
        setLimit(parseInt(e.target.value));
    };

    return (
      <>
        <input type="number" onInput={handleLimitChange}/>
        // pass the limit as a prop to the child component
        <div>Limit: {limit > 0 ? limit : "No limit"}</div>
        <br/>
        {React.Children.map([children], (child) => React.cloneElement(child, {limit}))}
      </>  
    );
};
export default PostFetcher;