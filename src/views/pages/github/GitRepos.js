import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { RenderIf } from "../../../components/RenderIf";
const useStyles = makeStyles(() => ({}));
const GitRepos = () => {
  const location = useLocation();
  const repos = location?.state;
  const classes = useStyles();
  const [repo, setRepo] = useState([]);
  let [loading, setLoading] = useState(true);
  let color = "palevioletred";
  const getRepoData = async () => {
    try {
      const res = await axios.get(`${repos}`);
      if (res.status === 200) {
        setRepo(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      //   setLoading(false);
    }
  };
  useEffect(() => {
    getRepoData();
  });
  return (
    <div>
      <Typography variant="h4">Git Repos</Typography>
      <div className={classes.head}>
        <div style={{ padding: "10px 0px" }}>
          <Typography style={{ color: "brown" }}>
            Total GitHub Repository {repo.length}
          </Typography>
        </div>
        {repo?.map((data, i) => (
          <div key={i}>
            <h1>{i + 1}</h1>
            <div>
              <Typography>
                <span style={{ color: "green" }}>
                  Project Name : &nbsp;&nbsp;
                </span>
                {data?.name} Using {data.language} Language
              </Typography>
            </div>
            <div>
              <Typography>
                <span style={{ color: "green" }}>
                  Project Description : &nbsp;
                </span>
                {data.description}
              </Typography>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <RenderIf isTrue={data.homepage != null}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                >
                  <a
                    href={data?.homepage}
                    target="_blank"
                    style={{ color: "#fff" }}
                    rel="noreferrer"
                  >
                    Home Page
                  </a>
                </Button>
              </RenderIf>

              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                style={{ marginLeft: "10px" }}
              >
                <a
                  href={data?.svn_url}
                  target="_blank"
                  style={{ color: "#fff" }}
                  rel="noreferrer"
                >
                  Repo Url
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <RenderIf isTrue={loading === true}>
        <div
          style={{
            height: "62vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarLoader
            color={color}
            loading={loading}
            height="15px"
            width="250px"
          />
        </div>
      </RenderIf>
    </div>
  );
};

export default GitRepos;
