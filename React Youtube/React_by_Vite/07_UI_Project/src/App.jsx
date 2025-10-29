import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  const users = [
    {
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro: '',
      tag: 'Setisfied',
      color: 'royalblue',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1661578248908-85e78e6d6c9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      tag: 'Underserved',
      color: 'orange',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      tag: 'Underbanked',
      color: 'lightgreen',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      tag: 'Undertaken',
      color: 'crimson',
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
