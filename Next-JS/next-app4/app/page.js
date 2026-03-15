import Image from "next/image"
import tower from '../public/tower.jpg'
const page = () => {
  return (
    <>
      <div>page</div>
      <Image src={tower} width={400} height={200} alt="not found" />
    </>
  )
}

export default page
