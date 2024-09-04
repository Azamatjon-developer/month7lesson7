import { Pagination } from '@mui/material'
import React from 'react'

function MoviePegination({setPage,totelPage}) {
  const handleChangePagination = (a, b) => {
    setPage(b)
  }
  return (
    <div>
      <div className="text-center py-5">
        <Pagination
          onChange={handleChangePagination}
          count={totelPage}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  )
}

export default MoviePegination
