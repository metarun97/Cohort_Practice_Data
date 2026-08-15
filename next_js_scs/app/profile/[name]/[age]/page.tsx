type ProfilePageProps = {
  params: Promise<{ name: string; age: string }>;
};
export default async function ProfilePage({ params }: ProfilePageProps) {
  const userParams = await params;
  const username = userParams.name;
  const userage = userParams.age;

  const users = [
    {
      id: 1,
      name: 'Rahul',
      age: '20',
      email: 'rahul.sharma@example.com',
    },
    {
      id: 2,
      name: 'Rahul',
      age: '25',
      email: 'rahul.thakul@example.com',
    },
    {
      id: 3,
      name: 'Rahul',
      age: '22',
      email: 'rahul.verma@example.com',
    },
  ];

  const user = users.find(
    (user) =>
      user.name.toLocaleLowerCase() === username.toLocaleLowerCase() &&
      user.age.toLocaleLowerCase() === userage.toLocaleLowerCase(),
  );

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>
        This {user?.name} is {user?.age} years old & his email is {user?.email}.
      </p>
    </div>
  );
}
