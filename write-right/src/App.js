import axios from "axios";
import { useState } from "react";
import "./App.css";

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
        "x-rapidapi-key": "cec01fb3bbmsha2abee52bc3434ap1b3ca1jsn2ae0b0357b2d",
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
          <div className="input">
          <button className="b">Upload Handwritten Image</button>
          <input type="file" onChange={handleFileInputChange} />
          <input type="submit" value="Extract Text" />
          </div>
       </form>
       <img src={viewImg}
            width="50%"
            height="50%"/>
       <p className="text">{ocrText}</p>
     </div>
  );
}
export default App;
