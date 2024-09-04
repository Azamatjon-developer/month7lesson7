import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IMG_URL } from '../hooks/useEnv';

export default function Moviecard({item}) {
  return (
    <Card className='rounded-2xl !shadow-2xl !shadow-blue-600  relative' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {`${IMG_URL}/${item.poster_path}`}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.original_title}
          </Typography>
          <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
            {item.overview}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' className='!absolute bottom-3 right-3' size="small" color="primary">
          More 
        </Button>
      </CardActions>
    </Card>
  );
}
