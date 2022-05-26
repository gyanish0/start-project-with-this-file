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
const Test = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [desh, setDesh] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      if (res.status === 200) {
        setDesh(res.data);
        setLoading(false);
        console.log("dhhkf");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
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
