"use client"
type user = {
    id: number;
    name: string;
    ussername: string;
}

import {useState} from "react";
export default function FilterUser({users}:{users:user[]}) {
        const[searchTerm, setSerarchTerm] = useState("");

        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return(
            <div>
            <input  
             type="text"
             placeholder="Search users..."
             value={searchTerm}
             onChange={(e) => setSerarchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}     
            </ul>

            </div>
        )
}