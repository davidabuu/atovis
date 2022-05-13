import Head from 'next/head';
const UserWebLayout = ({ webtitle, children }: any) => {
    return (
        <>
            <Head>
                <title>{webtitle} | Atovis</title>
            </Head>   
            {children}
        </>
    );
};

export default UserWebLayout;