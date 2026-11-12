type ProfilePageProps = {
    params:Promise<{
        name: string;
    }>;
};
export default async function ProfilePage() {
    const users=
    const users = [ 
        { 
            id: 1,
            name: "Rohan",
            age: 25,
            email: "rohan@example.com"
        },
        {
            id: 2,
            name: "Priya",
            age: 30,
            email: "priya@example.com"
        },
        {
            id: 3,
            name: "Amit",
            age: 35,
            email: "amit@example.com"
        }
    ]
    return (
       <div>
            <h1>
                Rohan's Profile Page
            </h1>
        <p>welcome to  rohan's profile! here you can find information about him.</p>
       </div>
    );
}