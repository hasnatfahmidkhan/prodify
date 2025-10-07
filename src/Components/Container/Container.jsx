import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 2xl:w-10/12 mx-auto py-8'>
            {children}
        </div>
    );
};

export default Container;