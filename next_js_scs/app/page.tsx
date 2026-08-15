// import Card from '@/components/Card';
import { someActions } from '@/app/actions/something';

export default function Home() {
  return (
    <>
      {/* <Card title='title one' description='This is paragraph one'/> */}
      {/* <Card title='title two' description='This is paragraph two'/> */}
      <button
        className="px-6 py-2 bg-green-500 text-white rounded"
        onClick={someActions}
      >
        Click me
      </button>
    </>
  );
}
