import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const params = useParams();
  // console.log(params);

  return (
    <div className='flex items-center justify-center'>
      <h1 className='capitalize underline'>{params.courseId} CourseDetail</h1>
    </div>
  );
};

export default CourseDetail;
