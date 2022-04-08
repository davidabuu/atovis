import React from 'react';
import Head from 'next/head';

const UserWebLayout = ({ webtitle, children}) => {
    return (
        <>
            <Head>
                <title>{webtitle} | Bub Books</title>
                {children}
            </Head>
        </>
    );
};

export default UserWebLayout;
