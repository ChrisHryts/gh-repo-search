import { AppBar, Button, InputBase, Select } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: '40px',
  color: alpha(theme.palette.common.white, 0.99),
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const RoundedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ff5017',
  borderRadius: theme.shape.borderRadius,
}));

const StyledButton = styled(Button)(({ theme }) =>({
  height: '40px',
  marginRight: theme.spacing(2),
  color: '#ff5017',
  backgroundColor: alpha(theme.palette.common.white, 0.99),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.99),
    transform: 'scale(1.2)',
  },
  fontWeight: '600',
  transition: 'transform 0.2s',
}));

const SelectStyles = {
  height: '40px',
  mr: 2,
  width: '140px',
  color: '#fff',
  paddingLeft: '6px',
  paddingRight: '16px',
  fontSize: 'inherit',
  backgroundColor: '#ff6d43',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ff6d43',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ff6d43',
  },
  '&.MuiSelect-select': {
    height: '100%',
  },
  '&:focus': {
    borderRadius: '4px',
    backgroundColor: '#ff6d43',
    boxShadow: 'none',
  },
  '& .MuiSelect-icon': {
    color: '#fff',
  },
};

export { Search, SearchIconWrapper, StyledInputBase, RoundedAppBar, SelectStyles, StyledButton };
