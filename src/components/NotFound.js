import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginTop: "35px" }}>
        <img src="./images/not_found.png" alt="" style={{ width: "350px" }} />
        <div>
          <h1 style={{ marginLeft: "50px" }}>Page Not Found 404 !</h1>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            onClick={() => navigate("/")}
            style={{ marginLeft: "115px" }}
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
