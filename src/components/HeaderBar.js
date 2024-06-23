import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function HeaderBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RestaurantIcon/>
        <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
          Find recipies for your favourite dish!
        </Typography>
      </Toolbar>
    </AppBar>
  )
}