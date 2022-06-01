import { LinearProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const RandomImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
      <h1>RandomImages</h1>
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
