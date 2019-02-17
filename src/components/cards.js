import React from 'react';

const cards = ({ id, name, phone, email }) => {
    return (

        <div className='tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=250x250`} />
            <div>
                <h2 className='f4'>{name}</h2>
                {/* <h2 className='f4'>{phone}</h2> */}
                <p>{email}</p>
            </div>
        </div>

    )
}

export default cards;