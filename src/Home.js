import React, { useState } from "react";
import axios from "axios";

function Home() {

  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");

  const checkSpam = async () => {
  try {
    const response = await axios.post("http://localhost:8080/api/predict", {
      message: emailText
    });

    setResult(response.data);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h2>Spam Email Detector</h2>

      <textarea
        rows="6"
        cols="50"
        placeholder="Enter email message..."
        value={emailText}
        onChange={(e)=>setEmailText(e.target.value)}
      />

      <br/><br/>

      <button onClick={checkSpam}>
        Check Spam
      </button>

      <h3>{result}</h3>
    </div>
  );
}

export default Home;