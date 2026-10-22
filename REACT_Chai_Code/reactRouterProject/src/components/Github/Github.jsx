// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

const Github = () => {

  const data = useLoaderData();

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users/metarun97")
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, [])


  return (
    <div>
      <h1 className="text-3xl bg-gray-700 text-white text-center">Followers:{data.followers}</h1>
      <div className="flex flex-col items-center">
        <img src={data.avatar_url} alt={data.name} width={300} />
        <h2 className="text-red-500 text-2xl capitalize">{data.name}</h2>
      </div>
    </div>
  )
}

export default Github


export const loadGithubData = async () => {
  const response = await fetch("https://api.github.com/users/metarun97")

  return response.json();
}
