import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/company/${searchQuery}`); // Adjust the path as necessary
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <form onSubmit={handleSearch}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
          <OutlinedInput
            size="small"
            id="header-search"
            value={searchQuery}
            onChange={handleInputChange}
            startAdornment={
              <InputAdornment position="start" sx={{ mr: -0.5 }}>
                <SearchOutlined />
              </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            placeholder="Ctrl + K"
          />
        </FormControl>
      </form>
    </Box>
  )
};

export default Search;
