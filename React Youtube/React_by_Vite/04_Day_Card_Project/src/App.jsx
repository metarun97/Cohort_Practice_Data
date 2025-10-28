import Card from './components/Card';

const App = () => {
  const companies = [
    {
      id: 1,
      company_logo: '../public/images/google.png',
      company_name: 'Google',
      job_position: 'Frontend Developer',
      posted_time: '2 days ago',
      tag1: 'Full Time',
      tag2: 'Remote',
      hourly_pay: '$55/hr',
      location: 'Mountain View, CA, USA',
    },
    {
      id: 2,
      company_logo: '../public/images/microsoft.png',
      company_name: 'Microsoft',
      job_position: 'UI/UX Designer',
      posted_time: '7 days ago',
      tag1: 'Part Time',
      tag2: 'Onsite',
      hourly_pay: '$40/hr',
      location: 'Redmond, WA, USA',
    },
    {
      id: 3,
      company_logo: '../public/images/amazon.png',
      company_name: 'Amazon',
      job_position: 'Backend Engineer',
      posted_time: '5 days ago',
      tag1: 'Full Time',
      tag2: 'Hybrid',
      hourly_pay: '$60/hr',
      location: 'Seattle, WA, USA',
    },
    {
      id: 4,
      company_logo: '../public/images/spotify.png',
      company_name: 'Spotify',
      job_position: 'React Developer',
      posted_time: '3 days ago',
      tag1: 'Part Time',
      tag2: 'Remote',
      hourly_pay: '$45/hr',
      location: 'Stockholm, Sweden',
    },
    {
      id: 5,
      company_logo: '../public/images/meta.jpeg',
      company_name: 'Meta',
      job_position: 'Full Stack Developer',
      posted_time: '5 days ago',
      tag1: 'Full Time',
      tag2: 'Hybrid',
      hourly_pay: '$58/hr',
      location: 'Menlo Park, CA, USA',
    },
    {
      id: 6,
      company_logo: '../public/images/netflix.png',
      company_name: 'Netflix',
      job_position: 'Frontend Engineer',
      posted_time: '6 hours ago',
      tag1: 'Part Time',
      tag2: 'Remote',
      hourly_pay: '$50/hr',
      location: 'Los Gatos, CA, USA',
    },
    {
      id: 7,
      company_logo: '../public/images/adobe.jpeg',
      company_name: 'Adobe',
      job_position: 'Product Designer',
      posted_time: '5 days ago',
      tag1: 'Full Time',
      tag2: 'Onsite',
      hourly_pay: '$48/hr',
      location: 'San Jose, CA, USA',
    },
    {
      id: 8,
      company_logo: '../public/images/ibm.png',
      company_name: 'IBM',
      job_position: 'Data Analyst',
      posted_time: '1 days ago',
      tag1: 'Part Time',
      tag2: 'Hybrid',
      hourly_pay: '$42/hr',
      location: 'New York, NY, USA',
    },
    {
      id: 9,
      company_logo: '../public/images/airbnb.jpg',
      company_name: 'Airbnb',
      job_position: 'Frontend Developer',
      posted_time: '3 days ago',
      tag1: 'Full Time',
      tag2: 'Remote',
      hourly_pay: '$54/hr',
      location: 'San Francisco, CA, USA',
    },
    {
      id: 10,
      company_logo: '../public/images/zoom.png',
      company_name: 'Zoom',
      job_position: 'Web Developer',
      posted_time: '5 days ago',
      tag1: 'Part Time',
      tag2: 'Remote',
      hourly_pay: '$38/hr',
      location: 'San Jose, CA, USA',
    },
  ];

  return (
    <div className="parent">
      {companies.map(function (elem) {
        return (
          <Card
            company={elem.company_name}
            logo={elem.company_logo}
            post={elem.job_position}
            postedTime={elem.posted_time}
            tag1={elem.tag1}
            tag2={elem.tag2}
            hourlyPay={elem.hourly_pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
