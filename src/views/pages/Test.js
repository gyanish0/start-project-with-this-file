import { CircularProgress, Container, Typography } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { calculateTimeLeft } from "../../utils";
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
  const [desh, setDesh] = useState([]);
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState("en");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getData = async () => {
    setLoading(false);
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      if (res.status === 200) {
        setDesh(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getLanguages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
        {
          headers: {
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data.data.languages);
        setLanguages(res.data.data.languages);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLanguages();
  }, []);

  const tableData = {
    columns,
    exportHeaders: false,
    data: desh,
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
      {loading === false ? (
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
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export default Test;
