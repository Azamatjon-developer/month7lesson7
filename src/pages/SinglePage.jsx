import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, IMG_URL, TOKEN } from '../hooks/useEnv'
import YouTube from 'react-youtube'

function SinglePage() {
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})
  const [singleVideos, setSingleVideos] = useState([])
  const [actors, setActors] = useState([])

  useEffect(() => {
    useAxios()
      .get(`/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setSingleData(res.data)
      })

    useAxios()
      .get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setSingleVideos(res.data.results)
      })

    useAxios()
      .get(`/movie/${id}/credits?language=en-US?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setActors(res.data)
      })
  }, [id])

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1 lg:col-span-2 space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">
            {singleData.title}
          </h2>
          <p className="text-lg w-[700px] text-gray-700 leading-relaxed">
            {singleData.overview}
          </p>
          <ul className="space-y-3">
            <li className="text-md text-gray-600">
              <strong className="text-[20px]">Country:</strong>{' '}
              {singleData.origin_country}
            </li>
            <li className="text-[20px] text-gray-600">
              <strong>Language:</strong> {singleData.original_language}
            </li>
            <li className="text-[20px] text-gray-600">
              <strong>Runtime:</strong> {singleData.runtime} minutes
            </li>
            <li className="text-[20px] text-gray-600">
              <strong>Release Date:</strong> {singleData.release_date}
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-1 flex justify-center lg:justify-end">
          <img
            className="rounded-xl shadow-lg"
            src={`${IMG_URL}/${singleData.poster_path}`}
            alt={singleData.title}
            width={300}
          />
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-gray-800">Related Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {singleVideos.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
              <YouTube className="w-full h-64" videoId={item.key} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 py-4 px-2 bg-gradient-to-r from-slate-500 to-gray-900">
        {actors.cast?.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg min-w-[130px] bg-gray-800 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg"
          >
            <div className="relative">
              <img
                className="rounded-xl shadow-lg object-cover"
                src={`${IMG_URL}/${item.profile_path}`}
                alt={singleData.title}
                width={130}
                height={180}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-xl p-2">
                <p className="text-white text-center font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SinglePage
