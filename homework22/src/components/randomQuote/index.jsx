import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchRandomQuote } from "../../features/quote/quoteSlice";
import { useEffect } from "react";
import { Button, Card, Typography, Box, CardContent } from "@mui/material";
import styles from "../../components/randomQuote/styles.module.css";

function RandomQuote() {
  const { quote, author, status, error } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  return (
    <Box className={styles.container}>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className={styles.error}>{error}</p>}
      {status === "succeeded" && (
        <Card
          sx={{
            borderRadius: "18px",
            mb: "25px",
            maxWidth: "500px",
            overflow: "hidden",
            backgroundColor: "rgb(180, 236, 236)",
          }}
        >
          <CardContent className={styles.cardContent}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
              }}
            >
              "{quote}"
            </Typography>
            <Typography variant="h6"> - {author}</Typography>
          </CardContent>
        </Card>
      )}
      <Button variant="contained" onClick={() => dispatch(fetchRandomQuote())}>
        New Quote
      </Button>
    </Box>
  );
}

export default RandomQuote;
