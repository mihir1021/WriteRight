import axios from "axios";
import { useState } from "react";

function App() {
  const [ocrText, setOcrText] = useState("");
  const [imgFile, setImgFile] = useState({});
  const [viewImg, setViewImg] = useState("");
  
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("Session", "string");
    form.append("srcImg", imgFile);
    const options = {
      method: "POST",
      url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
      headers: {
        "content-type": "multipart/form-data",
        "x-rapidapi-host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
        "x-rapidapi-key": "2bc95ebda9mshaf46bdbb59d0b4cp14e1bdjsn3702d7601e9d",
      },
      data: form,
    };
    axios
      .request(options)
      .then(function (response) {
        setOcrText(response.data.value);
      })
     .catch(function (error) {
       console.error(error);
     });
  }

  function handleFileInputChange(event) {
    setImgFile(event.target.files[0]);
    setViewImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="App">
      <h1>Write Right!</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileInputChange} />
          <input type="submit" value="Extract Text" />
       </form>
       <p className="text">{ocrText}</p>
       <img src={viewImg} />
     </div>
  );
}
export default App;
