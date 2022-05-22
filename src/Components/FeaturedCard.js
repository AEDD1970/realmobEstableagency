import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import "../style/FeaturedCard.scss";

function FeaturedCards() {
  return (
    <Card sx={{ maxWidth: 307 }} >
    <CardActionArea>
      <CardContent className="FeaturedCard" >
          <div className='contentIcon'>
        <img src='https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png' />
          </div>
          <div className='featuredText'>
          <span>Parking Space</span>
          </div>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default FeaturedCards