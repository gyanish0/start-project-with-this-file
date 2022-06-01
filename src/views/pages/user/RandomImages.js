import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
// import { Pagination } from "@material-ui/lab";
import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { calculateTimeLeft } from "../../../utils";
import dog from "../../dog.jpg";
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
        `https://picsum.photos/v2/list?page=${page}&limit=15`
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
      <Container>
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
                {timeLeft.minutes ? timeLeft.minutes && timeLeft.minutes : "0"}m
                :{timeLeft.seconds ? timeLeft.seconds && timeLeft.seconds : "0"}
                s
              </Typography>
            </>
          )}
        </div>
        <h1>Random Images</h1>
        <div></div>
        {loading ? (
          <div style={{ marginTop: "200px" }}>
            <LinearProgress />
          </div>
        ) : (
          <div mt={3}>
            <Grid container spacing={3}>
              {images &&
                images.map((image) => (
                  <Fragment key={image.id}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <div
                        style={{
                          boxShadow: "1px 2px 9px #F4AAB9",
                          padding: "3px",
                        }}
                      >
                        <a
                          download
                          href={image.download_url}
                          title={image.author}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            alt="ImageName"
                            src={
                              `https://picsum.photos/id/${image.id}/363/267`
                                ? `https://picsum.photos/id/${image.id}/363/267`
                                : dog
                            }
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              width: "100%",
                            }}
                          />
                        </a>
                        <div
                          style={{
                            paddingBottom: "10px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px 15px 0px 15px",
                            }}
                          >
                            <div>
                              <Typography
                                variant="h5"
                                style={{ fontSize: "18px" }}
                              >
                                {image.author}
                              </Typography>
                            </div>
                            <div
                              style={{
                                borderRadius: "9999px",
                                background: "#dae1e7",
                                padding: "3px 8px",
                              }}
                            >
                              <Typography
                                variant="h5"
                                style={{ fontSize: "17px" }}
                              >
                                #{image.id}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Fragment>
                ))}
            </Grid>
          </div>
        )}
        <div
          style={{
            margin: "20px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Pagination
            count={29}
            color="primary"
            onChange={(e, v) => setPage(v)}
          /> */}
          <Button
            variant="outlined"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            style={{ background: "#f1f5f8" }}
          >
            Prev
          </Button>
          <Button
            variant="outlined"
            onClick={() => setPage(page + 1)}
            style={{ background: "#f1f5f8" }}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RandomImages;
