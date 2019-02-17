import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll', border: '1px solid #333', height: '422px'
        }}>
            {props.children}
        </div>
    )
}


export default Scroll;