import FilterUsername from '@/components/FilterUsername';
import FilterUsers from '@/components/FilterUsers';


export default async function Classroom() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return (
    <div>
      <h1>Classroom page</h1>
      <p>This is Classroom page</p>
      <FilterUsers users={users} />
      <FilterUsername users={users} />
    </div>
  );
}
