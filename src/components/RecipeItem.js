import { Card, CardMedia, Typography, CardContent, Link } from '@mui/material';

export default function RecipeItem(props) {
  return (
    <Card sx={{ maxWidth: 600}}>
      <CardMedia
        component="img"
        alt={props.recipe.recipe.label}
        height="300"
        image={props.recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recipe.recipe.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calories: {Math.ceil(props.recipe.recipe.calories)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Meal type: {props.recipe.recipe.mealType[0]}
        </Typography>
        <Link href={props.recipe.recipe.url}>Go to recipe</Link>
      </CardContent>
    </Card>
  )
}