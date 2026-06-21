import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.courseId} CourseDetail</div>;
};

export default CourseDetail;
