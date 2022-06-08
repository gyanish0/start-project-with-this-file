import React, { useEffect, useState } from "react";
import { useGetTodosQuery } from "../../../redux/ApiCall";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const Stories = () => {
  // let API = "https://hn.algolia.com/api/v1/search?query=html";
  // const fecthApiData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fecthApiData(API);
  // }, []);
  const { data, error, isLoading } = useGetTodosQuery();
  console.log("datadata", data);
  console.log("errorerror", error);
  console.log("isLoadingisLoading", isLoading);
  const [files, setFiles] = useState([]);
  console.log("filesfiles", files);
  return (
    <div>
      <h1>Stories</h1>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        name="files"
        server="/news"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default Stories;
