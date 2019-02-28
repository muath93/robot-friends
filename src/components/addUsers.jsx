import React from 'react';

const AddUsers = ({ AddUser }) => {
    return (
        <form id='addUser' onSubmit={AddUser}> <input
            className='pa3 ba b--green bg-lightest-blue'
            name='name'
            type='text'
            placeholder='User name...' />
            <input
                className='pa3 ba b--green bg-lightest-blue'
                name='email'
                type='text'
                placeholder='Email...' />
            <button type="submit"
                className='pa2 ma2 ba br3 b--green bg-light-green'
            > Add new robot</button>
        </form>
    );

}

export default AddUsers;