type ProfilePageProps = {
  params: Promise<{ name: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const users = [
    {
      id: 1,
      name: 'Tarun',
      email: 'tarun@example.com',
      bio: 'Frontend Developer & React Enthusiast',
    },
    {
      id: 2,
      name: 'Rahul',
      email: 'rahul@example.com',
      bio: 'Full Stack Developer',
    },
    {
      id: 3,
      name: 'Mohit',
      email: 'mohit@example.com',
      bio: 'UI/UX Designer',
    },
    {
      id: 4,
      name: 'Anuj',
      email: 'anuj@example.com',
      bio: 'Backend Developer',
    },
  ];

  const userParams = await params;
  const username = userParams.name;

  const user = users.find(
    (user) => user.name.toLocaleLowerCase() === username.toLocaleLowerCase(),
  );

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <p>There is no route matched from this name</p>
      </div>
    );
  }

  return (
    <div key={user?.id}>
      <h1>{user?.name}'s profile</h1>
      <p>His profession {user?.bio} is in an big company</p>
    </div>
  );
}
