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
          <h1 style={{ textAlign: "center", padding: "20px 0px" }}>
            Page Not Found 404 !
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              onClick={() => navigate("/")}
            >
              Go To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
