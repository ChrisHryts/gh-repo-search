import React, { useState, useEffect, useMemo } from "react";
import { Container, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { searchRepositories } from "../api/githubApi";
import SearchResults from "../components/SearchResults/SearchResults";
import Header from "../components/Header/Header";
import { Language } from "../types/Language";

const ITEMS_PER_PAGE = 20;

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState<Language | "">("");
  const [totalResults, setTotalResults] = useState(0);
  let pageLimitReached = false;

  const handleSearch = async () => {
    try {
      const data = await searchRepositories(query, page, language);
      setResults(data.items);
      setTotalResults(data.total_count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query || language) handleSearch();
  }, [page, language]);

  let totalPages = useMemo(() => {
    return Math.ceil(totalResults / ITEMS_PER_PAGE);
  }, [totalResults]);

  //Only the first 1000 search results are available from github API
  if (totalPages > 50) {
    totalPages = 50;
    pageLimitReached = true;
  }

  return (
    <Container sx={{ pb: 5 }}>
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        setResults={setResults}
        language={language}
        setLanguage={setLanguage}
      />

      {totalResults !== 0 && results.length !== 0 && (
        <Box display="flex" justifyContent="flex-end">
          <Typography
            variant="h6"
            sx={{
              pr: 4,
              color: "#ff5017",
              fontStyle: "italic",
              fontSize: "1.25rem",
            }}
          >
            Total: {totalResults} items
          </Typography>
        </Box>
      )}

      <SearchResults results={results} />

      {results.length !== 0 && (
        <>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="standard"
            sx={{ mt: 3 }}
          />

          {pageLimitReached && (
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "#ff5017",
                fontStyle: "italic",
              }}
            >
              * Only the first 1000 search results are available from github API
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};

export default SearchPage;
