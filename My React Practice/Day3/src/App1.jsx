const App1 = () => {
  let profiles = [
    { name: 'Tarun', age: 30 },
    { name: 'Vikash', age: 26 },
    { name: 'Govind', age: 24 },
  ];

  const renderProfiles = profiles.map(function (profile, index) {
    console.log(profile,index);
    return (
      <li key={index}>
        <span>Name:{profile.name}</span>
        <br />
        <small>Age:{profile.age}</small>
      </li>
    );
  });
  return (
    <>
      <div>Rendering JSON</div>
      <ol>{renderProfiles}</ol>
    </>
  );
};

export default App1;
