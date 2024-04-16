import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, FormControl, InputAdornment, Autocomplete, TextField } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import dataList from 'assets/text/companyNameTickers'

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleSelect = (event, value) => {
    if (value) navigate(`/company/${value.name}`);
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <Autocomplete
          id="search-autocomplete"
          freeSolo
          options={dataList}
          getOptionLabel={(option) => option.name}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              placeholder="Search Company"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
