// import React from 'react';


const Detail = ( {selectedContact} ) => {
    return (
        <div className="selected">
            <p>{selectedContact.name}</p>
            <p>{selectedContact.address}</p>
            <p>{selectedContact.city}</p>
            <p>{selectedContact.state}</p>
            <p>{selectedContact.zip}</p>
            <p>{selectedContact.phone}</p>
            <p>{selectedContact.email}</p>
        </div>
    );
};

export default Detail;