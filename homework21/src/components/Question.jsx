import { useDispatch } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import {
  Card,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";

function Question({ question }) {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>{question.text}</Typography>

        <ButtonGroup>
          {question.options.map((ans) => (
            <Button
              key={ans}
              onClick={() =>
                dispatch(
                  answerQuestion({ questionId: question.id, answer: ans }),
                )
              }
            >
              {ans}
            </Button>
          ))}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default Question;
