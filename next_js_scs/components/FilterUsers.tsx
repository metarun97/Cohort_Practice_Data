'use client';
import { useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
};

export default function FilterUsers({ users }: { users: User[] }) {
  const [serchTerm, setSearchTerm] = useState('');

  const filteredUser = users.filter((User) => {
    return User.name
      .toLocaleLowerCase()
      .includes(serchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="search user..."
        value={serchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUser.map((user: User) => {
          return <h1 key={user.id}>{user.name}</h1>;
        })}
      </ul>
    </div>
  );
}
