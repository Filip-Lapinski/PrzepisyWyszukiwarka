import {Grid} from '@mui/material';
import RecipeItem from './RecipeItem';

export default function RecipeList(props) {
  return (
    <Grid container justify="space-around" spacing={3} sx={{px: 5, pb: 3}}>
      {props.recipes.map((r) => <Grid item xs={12} sm={6} md={4} lg={3}><RecipeItem recipe={r}/></Grid>)}
    </Grid>
  )
}