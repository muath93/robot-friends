import React from 'react'
import Cards from './cards'

const cardList = ({ robots }) => {
    return (
        <div>
            {

                robots.map((user, i) => {
                    return (
                        <Cards
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            // phone={robots[i].phone}
                            email={robots[i].email}
                        />
                    )
                }

                )}
        </div>
    );
}

export default cardList;