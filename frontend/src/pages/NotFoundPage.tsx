import { Typography, Container, Button } from '@mui/material';
import { StyledButton } from '../components/Header/HeaderStyle';

export const NotFoundPage: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography
        variant='h1'
        className='title'
        sx={{
          fontStyle: 'italic',
          color: '#ff5017',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Page not found
      </Typography>
      <StyledButton variant='contained' onClick={goBack}>
        Go Back
      </StyledButton>
    </Container>
  );
};

