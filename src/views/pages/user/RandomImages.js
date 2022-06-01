import { LinearProgress, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../../utils";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const RandomImages = () => {
  const endTime = 1659763805;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });
  const getImageDate = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=100`
      );
      console.log(res.data);
      if (res.status === 200) {
        setImages(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getImageDate();
  }, [page]);
  return (
    <div>
      <div
        style={{
          margin: "20px 0px",
          resize: "both",
          overflow: "auto",
        }}
      >
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
      </div>
      <h1>Random Images</h1>
      <div
        style={{
          margin: "20px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={10}
          color="primary"
          onChange={(e, v) => setPage(v)}
        />
      </div>
      {loading ? (
        <div style={{ marginTop: "50px" }}>
          <LinearProgress />
        </div>
      ) : (
        <div mt={3}>
          {images &&
            images.map((image) => (
              <a
                download
                href={image.download_url}
                title={image.author}
                target="_blank"
                rel="noopener noreferrer"
                key={image.id}
              >
                <img alt="ImageName" src={image.download_url} />
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default RandomImages;
