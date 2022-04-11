import Head from 'next/head';
const UserWebLayout = ({ webtitle, children }) => {
    return (
        <>
            <Head>
                <title>{webtitle} | 3reen Shop</title>
            </Head>   
            {children}
        </>
    );
};

export default UserWebLayout;