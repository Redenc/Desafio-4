import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import { AddShoppingCart, Favorite } from '@mui/icons-material'
import { MarketContext } from '../context/MarketContext';

export default function MediaCard(props) {
  const [favorite, setFavorite] = React.useState(false)
  const {list, setList} = React.useContext(MarketContext)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="favorite" onClick={() => setFavorite(!favorite)}>
          <Favorite color={favorite ? "error" : "inherit" } />
        </IconButton>
        <IconButton 
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => setList(list.concat(props.title))}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}