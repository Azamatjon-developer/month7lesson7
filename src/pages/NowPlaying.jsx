import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, TOKEN } from '../hooks/useEnv'
import Moviecard from '../components/MovieCard'
import MoviePegination from '../components/MoviePagination'
function NowPlaying() {
  const [page, setPage] = useState(1)
  const [totelPage, setTotalPage] = useState(0)
  const [moviedata, setMuvieData] = useState([])
  useEffect(() => {
    useAxios()
      .get(`/movie/now_playing?language=en-US&page=${page}?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN} `,
        },
      })
      .then((res) => {
        setMuvieData(res.data.results)
        setTotalPage(res.data.total_pages)
      })
  }, [page])

  return (
    <>
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {moviedata.map((item) => (
          <Moviecard key={item.id} item={item} />
        ))}
        <MoviePegination setPage={setPage} totelPage={totelPage} />
      </div>
    </>
  )
}

export default NowPlaying
