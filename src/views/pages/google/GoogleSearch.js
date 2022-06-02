import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

const GoogleSearch = () => {
  const [getInput, setGetInput] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(result);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${getInput}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "IN",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
    },
  };
  const googleSearch = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      if (res.status === 200) {
        setResult(res.data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <Box mt={4}>
      <Container>
        <h5>Google Search</h5>
        <TextField
          id="outlined-multiline-static"
          placeholder="Enter Text"
          variant="outlined"
          fullWidth
          onChange={(e) => setGetInput(e.target.value)}
        />
        <Box mt={2}>
          {isLoading ? (
            <Button variant="outlined" disabled={isLoading}>
              Loading
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => googleSearch()}
              disabled={isLoading}
            >
              Submit
            </Button>
          )}
        </Box>

        <Box>
          {isLoading ? (
            <Box
              style={{
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              {result &&
                result.map((item) => (
                  <Box key={item.title} style={{ padding: "7px" }}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography>{item.title}</Typography>
                    </a>
                    <Typography>{item.description}</Typography>
                  </Box>
                ))}
            </Box>
          )}
        </Box>
        {/* <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WMolA7QMP5w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{
              overflow: "hidden",
              border: "0",
              alignSelf: "center",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div> */}
      </Container>
    </Box>
  );
};

export default GoogleSearch;
