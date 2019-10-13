import React from 'react';
import Button from './Button'

function List(props){
    const { key, name, status, remove }  = props;

    return (
                <tr>
                    <td>{name} {key}</td>
                    <td>{status}</td>
                    <td>
                        <Button myProp={remove}>
                            Delete
                        </Button>
                    </td>
                </tr>
    );
};

export default List;