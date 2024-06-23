import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
export default function SearchBar(props) {

  const [searchField, setSearchField] = useState("");

  return (
    <Box display="flex" justifyContent="center" m={2}>
      <TextField id="outlined-basic" label="What dish do you want?" variant="outlined" 
        onChange={(e) => setSearchField(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && props.onSearch(searchField)}
        sx={{marginRight: 3}}/>
      <Button variant="contained" onClick={() => {
        props.onSearch(searchField);
      }}>
      Szukaj
      </Button>
    </Box>
  )
}