import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next";

export default function Home() {

    const user = useUser();
    console.log(user.user)

    return (
        <div>
            <h1>Dashboard</h1>

            <p>Hello {user.user?.name}</p>

            <a href={`/api/auth/logout?logout?returnTo=http://localhost:3000`}>Logout</a>
        </div>
    )
}

// withPageAuthRequired - Check if user is authenticated if not redirect to login
export const getServerSideProps: GetServerSideProps = withPageAuthRequired()