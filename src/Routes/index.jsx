import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {NowPlaying,Popular,TopRated,UpComming,SinglePage} from '../pages'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NowPlaying/>}  />
        <Route path='/popular' element={<Popular/>}  />
        <Route path='/top-rated' element={<TopRated/>}  />
        <Route path='/up-comming' element={<UpComming/>}  />
        <Route path='/:id' element={<SinglePage/>}  />
      </Routes>
    </div>
  )
}

export default Routers
