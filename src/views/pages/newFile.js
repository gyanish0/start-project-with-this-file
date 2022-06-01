// get a dummy image api for testing purposes only

const dummyImage = "https://picsum.photos?random";

export default function NewFile() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileError, setFileError] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFileType(e.target.files[0].type);
    setFileSize(e.target.files[0].size);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/api/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFileUrl(res.data.fileUrl);
    } catch (err) {
      setFileError(err.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Upload a new file</h5>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="file">File</label>
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>
              {fileError && (
                <div className="alert alert-danger">{fileError}</div>
              )}
              {fileUrl && (
                <div>
                  <img src={fileUrl} alt={fileName} />
                  <div>{fileName}</div>
                  <div>{fileType}</div>
                  <div>{fileSize}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
