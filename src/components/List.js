import React from 'react';

function List(props){
    const {name}  = props;

    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default List;