import { Button, Container } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

const News = () => {
  // https://blockchain-tool.mobiloitte.com/api/v1/admin/uploadFile
  const [isLoading, setIsLoading] = useState(false);
  const [tokenImage, setTokenImage] = useState("");
  const [profileImageBlob, setprofileImageBlob] = useState("");

  const onBannerImageChange = (e) => {
    const value = URL.createObjectURL(e.target.files[0]);
    setprofileImageBlob(value);
    setTokenImage(e.target.files[0]);
    // getBase64(e.target.files[0], (result) => {
    //   setTokenImage(result)
    // })
  };

  const uploadImg = async (values) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("uploaded_file", tokenImage);
      const res = await axios({
        method: "POST",
        url: "https://blockchain-tool.mobiloitte.com/api/v1/admin/uploadFile",
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
        data: formData,
      });
      if (res.data.responseCode === 200) {
        console.log("data---Response-", res);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Container>
        <h1>hello</h1>
        <div>
          <img
            src={profileImageBlob}
            alt=""
            style={{ maxWidth: "250px", maxHeight: "250px" }}
          />
          {profileImageBlob === "" ? (
            <>
              <input
                accept="image/*"
                style={{ display: "block" }}
                id="raised-button-file-img"
                multiple
                type="file"
                onChange={onBannerImageChange}
              />
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                setprofileImageBlob("");
                setTokenImage("");
              }}
            >
              Remove
            </Button>
          )}
          <Button
            onClick={(values) => {
              uploadImg(values);
            }}
            variant="contained"
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default News;

// import axios from "axios";
// import React, { useEffect } from "react";
// import Pagination from "@material-ui/lab/Pagination";
// import { Grid, LinearProgress, Container, Typography } from "@material-ui/core";

// const News = () => {
//   const [images, setImages] = React.useState([]);
//   const [page, setPage] = React.useState(1);
//   const [loading, setLoading] = React.useState(false);
//   const getImages = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://api.unsplash.com/photos?page=${page}&per_page=15&client_id=NLQ_vXs0giX2TZ31EUhhGlhWUa1RQmme3LeU9Og_B5s&w=300&h=300`
//       );
//       if (response.status === 200) {
//         setImages(response.data);
//         console.log(response.data);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getImages();
//   }, [page]);
//   return (
//     <div>
//       <Container>
//         {loading ? (
//           <div style={{ marginTop: "200px" }}>
//             <LinearProgress />
//           </div>
//         ) : (
//           <div>
//             <Grid container spacing={3}>
//               {images.map((image) => (
//                 <Grid item xs={12} sm={6} md={6} lg={4} key={image.id}>
//                   <div
//                     style={{
//                       boxShadow: "1px 2px 9px #F4AAB9",
//                       padding: "3px",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <a
//                       download
//                       href={image.urls.full}
//                       title={image.user.instagram_username}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src={image.urls.small}
//                         alt={image.alt_description}
//                         style={{
//                           maxWidth: "100%",
//                           maxHeight: "267px",
//                           height: "auto",
//                           width: "100%",
//                         }}
//                       />
//                     </a>
//                     <div
//                       style={{
//                         paddingBottom: "10px",
//                         paddingLeft: "10px",
//                         paddingRight: "10px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           padding: "15px 15px 0px 15px",
//                         }}
//                       >
//                         <div>
//                           <Typography variant="h5" style={{ fontSize: "18px" }}>
//                             {image.user.first_name}
//                           </Typography>
//                         </div>
//                         <div
//                           style={{
//                             borderRadius: "9999px",
//                             background: "#dae1e7",
//                             padding: "3px 8px",
//                           }}
//                         >
//                           <Typography variant="h5" style={{ fontSize: "17px" }}>
//                             {image.user.instagram_username
//                               ? image.user.instagram_username
//                               : "Unknown"}
//                           </Typography>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Grid>
//               ))}
//             </Grid>
//             <div
//               style={{
//                 margin: "20px 0px",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Pagination
//                 onChange={(e, v) => setPage(v)}
//                 count={350}
//                 color="primary"
//               />
//             </div>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default News;

// Debouncing in JavaScript – a Practical Example

// import axios from "axios";
// import React from "react";

// const News = () => {
//   const [pinCode, setPinCode] = React.useState("");
//   React.useEffect(() => {
//     const getData = setTimeout(() => {
//       axios
//         .get(`https://api.postalpincode.in/pincode/${pinCode}`)
//         .then((response) => {
//           console.log(response.data[0]);
//         });
//     }, 2000);

//     return () => clearTimeout(getData);
//   }, [pinCode]);
//   return (
//     <div>
//       <input
//         placeholder="Search Input.."
//         onChange={(event) => setPinCode(event.target.value)}
//       />
//     </div>
//   );
// };

// export default News;
