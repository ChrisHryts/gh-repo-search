import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  StyledButton,
  RoundedAppBar,
  Search,
  SearchIconWrapper,
  SelectStyles,
  StyledInputBase,
} from './HeaderStyle';
import { Language } from '../../types/Language';

type Props = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
  setResults: (results: any[]) => void;
  language: Language | '';
  setLanguage: (language: Language | '') => void;
};

const Header: React.FC<Props> = ({
  query,
  setQuery,
  handleSearch,
  setResults,
  language,
  setLanguage,
}) => {
  const handleReset = () => {
    setQuery('');
    setResults([]);
    setLanguage('');
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Box sx={{ flexGrow: 1, pb: 3 }}>
      <RoundedAppBar position='static'>
        <Toolbar>
          <IconButton color='inherit' sx={{ mr: 2 }}>
            <LocationSearchingIcon sx={{ fontSize: 'large' }} />
          </IconButton>

          <Typography variant='h6'>Repositories</Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Search sx={{ mr: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder='Search by title...'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </Search>

          <Select
            value={language}
            onChange={handleLanguageChange}
            displayEmpty
            sx={SelectStyles}
          >
            <MenuItem value='all'>
              All
            </MenuItem>
            <MenuItem value='javascript'>JavaScript</MenuItem>
            <MenuItem value='kotlin'>Kotlin</MenuItem>
            <MenuItem value='java'>Java</MenuItem>
          </Select>

          <StyledButton
            onClick={handleSearch}
            disabled={query === ''}
          >
            Search
          </StyledButton>

          <StyledButton variant='contained' onClick={handleReset}>
            Reset
          </StyledButton>
        </Toolbar>
      </RoundedAppBar>
    </Box>
  );
};

export default Header;
