import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
} from '@mui/material';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Box } from '@mui/system';
import { BoxStyles, TypographyStyles } from './SearchResultsStyle';

const COLUMNS = [
  { label: 'Name', width: '20%' },
  { label: 'Description', width: '55%' },
  { label: 'Language', width: '13%' },
  { label: 'Stars', width: '6%' },
  { label: 'Forks', width: '6%' },
];

type Props = {
  results: any[];
};

const SearchResults: React.FC<Props> = ({ results }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <Box sx={BoxStyles} >
          <DotLottiePlayer
            src='https://lottie.host/0bcdf7c6-9695-4ed0-8cc4-c982d619005d/FYHhjw1F6o.json'
            background='transparent'
            loop
            autoplay
            speed={1}
            style={{ width: '60vh', height: '60vh' }}
          ></DotLottiePlayer>
        </Box>
      ) : (
        <>
          {results.length === 0 ? (
            <Typography
              variant='h6'
              align='center'
              sx={TypographyStyles}
            >
              Enter correct data to search in the fields above...
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ tableLayout: 'fixed' }}>
                <TableHead sx={{ borderBottom: '3px solid #ff5017' }}>
                  <TableRow>
                    {COLUMNS.map((column, index) => (
                      <TableCell
                        key={index}
                        sx={{ width: column.width, fontWeight: 'bold' }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell>
                        <Link
                          href={result.html_url}
                          target='_blank'
                          rel='noopener noreferrer'
                          underline='none'
                          sx={{
                            color: '#ff5017',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                          }}
                        >
                          {result.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {result.description && result.description.length > 100
                          ? `${result.description.slice(0, 100)}...`
                          : result.description || '-'}
                      </TableCell>
                      <TableCell>{result.language}</TableCell>
                      <TableCell>{result.stargazers_count}</TableCell>
                      <TableCell>{result.forks_count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
