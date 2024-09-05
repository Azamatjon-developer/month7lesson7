import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { NavLink, useNavigate } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { AutoComplete } from 'antd'
import { useAxios } from '../hooks/useAxios'
import { API_KEY } from '../hooks/useEnv'

export default function Navbar() {
  const axiosInstance = useAxios();
  const navigate = useNavigate()
  const [options, setOptions] = React.useState([])

  function handleSearchMovie(value){
    axiosInstance.get(`/search/movie?query=${value}&include_adult=false&api_key=${API_KEY}`)
      .then(res => {
        setOptions(res.data.results.map(item => ({value: item.original_title, id: item.id})))
      })
      .catch(err => {
        console.error("Error fetching movie data: ", err);
      });
  }

  function handleChooseMovie(value, option) {

    navigate(`/${option.id}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="py-5 px-5" position="static" color="info">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LiveTvIcon className="scale-[1.5]" />
          </IconButton>
          <Typography
            className="space-x-5"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NavLink
              className={`p-3 rounded-2xl duration-300 text-[16px]`}
              to={'/'}
            >
              {' '}
              Now Playing{' '}
            </NavLink>
            <NavLink
              className={`p-3 rounded-2xl duration-300 text-[16px]`}
              to={'/popular'}
            >
              {' '}
              Popular{' '}
            </NavLink>
            <NavLink
              className={`p-3 rounded-2xl duration-300 text-[16px]`}
              to={'/top-rated'}
            >
              {' '}
              Top Rated{' '}
            </NavLink>
            <NavLink
              className={`p-3 rounded-2xl duration-300 text-[16px]`}
              to={'/up-comming'}
            >
              {' '}
              Up Coming{' '}
            </NavLink>
          </Typography>
          <AutoComplete
            allowClear
            onSelect={handleChooseMovie}
            onSearch={handleSearchMovie} // onChange o'rniga onSearch ishlatiladi
            size="large"
            style={{
              width: 360,
            }}
            options={options}
            placeholder="Search Movie"
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
