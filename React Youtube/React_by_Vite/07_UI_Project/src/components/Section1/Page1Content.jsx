import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
  return (
    <div className='w-full h-[90vh] flex gap-5 px-6 py-12'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  );
};

export default Page1Content;
