import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Box,
} from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { calculateTimeLeft } from "../../../utils";
const endTime = 1659763805;

// https://rapidapi.com/googlecloud/api/google-translate1/

const Translate = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [getInput, setGetInput] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const options = {
    method: "GET",
    url: "https://just-translated.p.rapidapi.com/",
    params: { lang: "hi", text: getInput },
    headers: {
      "X-RapidAPI-Host": "just-translated.p.rapidapi.com",
      "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
    },
  };

  const number = {
    method: "GET",
    url: "https://numbers-spell.p.rapidapi.com/numbers",
    params: {
      text: "2387990870981783454354354438746344583543448448785238799087098178345435435443874634458354344844878523879908709817834543543544387463445835434484487852387990870981783454354354438746344583543448448785",
    },
    headers: {
      "X-FunTranslations-Api-Secret": "23879908709817834",
      "X-RapidAPI-Host": "numbers-spell.p.rapidapi.com",
      "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
    },
  };

  const getNumber = async () => {
    try {
      const res = await axios.request(number);
      console.log(res.data.contents.translated);
      if (res.status === 200) {
        setLanguages(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => {
  //     getNumber();
  //   }, []);

  const getLanguages = async () => {
    setLoading(true);
    try {
      const res = await axios.request(options);
      console.log(res);
      if (res.status === 200) {
        setLanguages(res.data.text[0]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <h4>Demo</h4>
      {parseFloat(endTime) < moment().unix() ? (
        <Typography variant="h6">Expired</Typography>
      ) : (
        <>
          <Typography variant="h6">
            {" "}
            {timeLeft.days ? timeLeft.days && timeLeft.days : "0"}
            d:
            {timeLeft.hours ? timeLeft.hours && timeLeft.hours : "0"}
            h:
            {timeLeft.minutes ? timeLeft.minutes && timeLeft.minutes : "0"}m :
            {timeLeft.seconds ? timeLeft.seconds && timeLeft.seconds : "0"}s
          </Typography>
        </>
      )}
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box mt={3}>
            <TextField
              id="outlined-multiline-static"
              multiline
              minRows={4}
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={(e) => setGetInput(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box mt={3}>
            <TextField
              id="outlined-multiline-static"
              multiline
              minRows={4}
              variant="outlined"
              fullWidth
              value={languages}
              disabled
            />
          </Box>
        </Grid>
      </Grid>
      <Box mt={2}>
        {loading ? (
          <Button variant="outlined" disabled={loading}>
            Loading..&nbsp;&nbsp;
            <CircleLoader color="#85199b" size={20} />
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => getLanguages()}>
            Submit
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Translate;
