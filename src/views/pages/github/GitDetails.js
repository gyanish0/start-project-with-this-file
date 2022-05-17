import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BarLoader from "react-spinners/BarLoader";
import { RenderIf } from "../../../components/RenderIf";
const useStyles = makeStyles(() => ({
  root: {
    "& input": {
      padding: "10px 10px",
    },
    "& h2": {
      fontSize: "35px",
      fontWeight: 100,
    },
    "& button": {
      padding: "6px 15px",
      marginLeft: "10px",
    },
    "& img": {
      borderRadius: "50%",
      width: "100%",
    },
  },
  btnDiv: {
    paddingTop: "10px",
  },
  details: {
    "& h4": {
      color: "darkblue",
      fontSize: "21px",
    },
    "& h6": {
      fontSize: "18px",
    },
    "& a": {
      padding: "0",
      color: "blue",
    },
  },
}));
const GitDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [gitData, setGitData] = useState("");
  let [loading, setLoading] = useState(false);
  let color = "palevioletred";
  const getGitData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      if (res.status === 200) {
        setGitData(res.data);
        setLoading(false);
        toast.success(
          res.statusText
            ? res.statusText
            : `${userName} Data fetch successfully`
        );
      }
    } catch (error) {
      toast.error(`${userName} user not found`);
      setLoading(false);
    }
  };

  const repos = gitData.repos_url;
  return (
    <div className={classes.root}>
      <h2>GitHub</h2>
      <div>
        <TextField
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Username"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              getGitData();
            }
          }}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          onClick={() => getGitData()}
        >
          Search
        </Button>
      </div>
      <RenderIf isTrue={loading === true}>
        <div
          style={{
            height: "54vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarLoader
            color={color}
            loading={loading}
            height="25px"
            width="150px"
          />
        </div>
      </RenderIf>

      <RenderIf isTrue={gitData !== ""}>
        <div style={{ paddingTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <img src={gitData.avatar_url} alt="" />
            </Grid>
            <Grid item lg={9} md={9} sm={6} xs={12}>
              <div className={classes.details}>
                <div>
                  <Typography variant="h4">Name</Typography>
                  <Typography variant="h6">
                    <a href={gitData.html_url} target="_blank" rel="noreferrer">
                      {gitData.name}
                    </a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4">Username</Typography>
                  <Typography variant="h6">{gitData.login}</Typography>
                </div>
                <div>
                  <Typography variant="h4">Bio</Typography>
                  <Typography variant="h6">{gitData.bio}</Typography>
                </div>
                <div>
                  <Typography variant="h4">Followers</Typography>
                  <Typography variant="h6">{gitData.followers}</Typography>
                </div>
                <div>
                  <Typography variant="h4">Following</Typography>
                  <Typography variant="h6">{gitData.following}</Typography>
                </div>
                <div>
                  <Typography variant="h4">Location</Typography>
                  <Typography variant="h6">{gitData.location}</Typography>
                </div>
                <div>
                  <Typography variant="h4">Twitter Username</Typography>
                  <Typography variant="h6">
                    {gitData.twitter_username}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <div>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              onClick={() => navigate("/gitrepo", { state: repos })}
            >
              Go To Repos List
            </Button>
          </div>
        </div>
      </RenderIf>
      <RenderIf isTrue={gitData === "" && loading === false}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "54vh",
            alignItems: "center",
          }}
        >
          <Typography style={{ color: "palevioletred", fontSize: "25px" }}>
            First search the GitHub user to see the result
          </Typography>
        </div>
      </RenderIf>
    </div>
  );
};

export default GitDetails;
