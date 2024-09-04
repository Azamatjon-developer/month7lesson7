import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { Autocomplete, TextField } from '@mui/material'

export default function Navbar() {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='py-5 px-5' position="static" color='info'>
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
              Up Comming{' '}
            </NavLink>
          </Typography>
          <Autocomplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
