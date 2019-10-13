import React from 'react';

function List(props){
    const {name, status}  = props;

    return (
                <tr>
                    <td>{name}</td>
                    <td>{status}</td>
                </tr>
    );
};

export default List;