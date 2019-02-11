import React, { Component } from 'react';

const SearchUsers  = (props) => {

    return(
            <div className='searchuser'>
                  <input type="text" value={props.value} onChange={props.searchUsers} className='input' placeholder='Search a user' />
            </div>
    )

}  

export default SearchUsers