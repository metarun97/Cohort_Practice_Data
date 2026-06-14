import React from 'react';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';

const Day2 = () => {
  const techerName = 'Vinod Bahadur Thapa';
  const startDate = '13/06/2026';
  const a = 5,
    b = 6;
  const isAdmin = true;
  const excessMsg = isAdmin ? 'LogedIn as admin' : 'LoggedIn as a student';
  const subjects = ['Maths', 'Scence', 'English'];
  const hasError = true;

  const contentExcess = isAdmin ? <AdminPanel /> : <UserPanel />;

  return (
    <>
      <h1>Tecaher name : {techerName}</h1>
      <p>Start Date : {startDate}</p>
      <span>Add of a and b is : {a + b}</span>
      <h2>Role excess : {excessMsg}</h2>
      {subjects.map((sub, idx) => {
        return (
          <li key={idx}>
            {idx + 1} : {sub}
          </li>
        );
      })}
      {/*  */}
      {hasError && <p>Something went wrong please refresh!</p>}
      {/*  */}
      <div>Content show : {contentExcess}</div>
    </>
  );
};

export default Day2;
