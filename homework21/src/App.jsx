import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import {
  Container,
  Box,
  Typography,
  Stack,
  Button,
  Paper,
} from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Questionnaire
        </Typography>

        <Stack spacing={2}>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}

          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(submitAnswers())}
            sx={{ mt: 1 }}
          >
            Submit
          </Button>

          <Result />
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
