import {
  Container,
  Typography,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
  Box,
} from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import CircleLoader from "react-spinners/CircleLoader";
import { calculateTimeLeft } from "../../utils";
import RandomImages from "./user/RandomImages";
const endTime = 1659763805;
const columns = [
  {
    name: "Id",
    selector: (row) => `${row.cca2}`,
    sortable: true,
    grow: 0,
  },
  {
    name: "Name",
    selector: (row) => row.name.common,
    sortable: true,
  },
  {
    name: "Capital",
    selector: (row) => row.capital,
    sortable: true,
  },
  {
    name: "Region",
    selector: (row) => row.region,
    sortable: true,
  },
  {
    name: "Continents",
    selector: (row) => row.continents,
    sortable: true,
  },
  {
    name: "Flag",
    selector: (row) => row.flag,
    sortable: true,
  },
  {
    name: "Timezones",
    selector: (row) => row.timezones,
    sortable: true,
  },
];
// https://rapidapi.com/googlecloud/api/google-translate1/

const Test = () => {
  const [timeLeft, setTimeLeft] = useState("");
  // const [desh, setDesh] = useState([]);
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [targetLang, setTargetLang] = useState("hi");
  const [sourceLang, setSourceLang] = useState("en");
  const [getInput, setGetInput] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  // const getData = async () => {
  //   setLoading(false);
  //   try {
  //     const res = await axios.get("https://restcountries.com/v3.1/all");
  //     if (res.status === 200) {
  //       setDesh(res.data);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getLanguages = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  //       {
  //         headers: {
  //           "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  //           "X-RapidAPI-Key":
  //             "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
  //         },
  //       }
  //     );
  //     if (res.status === 200) {
  //       setLanguages(res.data.data.languages);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getLanguages();
  // }, []);

  const encodedParams = new URLSearchParams();
  encodedParams.append("q", getInput);
  encodedParams.append("target", targetLang);
  encodedParams.append("source", sourceLang);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
    },
    data: encodedParams,
  };

  const translateText = async () => {
    setLoading(true);
    try {
      const res = await axios.request(options);
      if (res.status === 200) {
        setResult(res.data.data.translations[0].translatedText);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const tableData = {
    columns,
    exportHeaders: false,
    // data: desh,
    print: false,
    selector: "id",
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
      <div>
        <DataTableExtensions {...tableData}>
          <DataTable
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          {/* <div>
            <label>Choose a Source Language:</label>
            <Select
              onChange={(e) => setSourceLang(e.target.value)}
              variant="outlined"
              fullWidth
              value={sourceLang}
            >
              {languages?.map((data, i) => (
                <MenuItem value={data.language} key={i}>
                  {data.language}
                </MenuItem>
              ))}
            </Select>
          </div> */}
          <Box mt={3}>
            <TextField
              id="outlined-multiline-static"
              multiline
              minRows={4}
              defaultValue="Enter Text"
              variant="outlined"
              fullWidth
              onChange={(e) => setGetInput(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          {/* <div>
            <label>Choose a Target Language:</label>
            <Select
              onChange={(e) => setTargetLang(e.target.value)}
              variant="outlined"
              fullWidth
              value={targetLang}
            >
              {languages?.map((data, i) => (
                <MenuItem value={data.language} key={i}>
                  {data.language}
                </MenuItem>
              ))}
            </Select>
          </div> */}
          <Box mt={3}>
            <TextField
              id="outlined-multiline-static"
              multiline
              minRows={4}
              variant="outlined"
              fullWidth
              value={result}
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
          <Button variant="outlined" onClick={() => translateText()}>
            Submit
          </Button>
        )}
      </Box>
      <div>
        <RandomImages />
      </div>
    </Container>
  );
};

export default Test;
