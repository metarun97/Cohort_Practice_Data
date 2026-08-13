'use client';
import { useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
};

export default function FilterUsername({ users }: { users: User[] }) {
  const [serchVal, setSerchVal] = useState('');

  const filterUserName = users.filter((User) => {
    return User.username
      .toLocaleLowerCase()
      .includes(serchVal.toLocaleLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="serch username..."
        value={serchVal}
        onChange={(e) => setSerchVal(e.target.value)}
      />
      <ul>
        {filterUserName.map((user: User) => {
          return <div key={user.id}>{user.username}</div>;
        })}
      </ul>
    </div>
  );
}
