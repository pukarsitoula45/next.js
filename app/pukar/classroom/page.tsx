import FilterUser from "@/component/FilterUser";

export default async function  Classroom(){
    const responce  = await fetch("https://jsonplaceholder.typicode.com/users");    
    const users = await responce.json();                
    return (
        <main>
            <h1>
                classroom page
            </h1>
            <p>This is the classroom page.</p>
            <FilterUser users={users}/>
        </main>
    );
}