import { useParams } from 'react-router-dom';

const User = () => {

  const { userId } = useParams();

  return (
    <div className='text-3xl bg-gray-600 text-white text-center'>User:{userId}</div>
  )
}

export default User;
