// import React from 'react';



const List = ({data, action}) => {
const contacts = data.map(contact => {
    return <li id={contact.id} key={contact.id} onClick={action}>{contact.name}</li>;
    });

    return (
        <ul>{contacts}</ul>
    )
};

 export default List;