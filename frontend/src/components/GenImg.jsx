import React, { useState } from "react";

const GenImg = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  setErrorMsg('');
  setImageUrl('');

  const prompt = document.querySelector('#promptInput').value;

  if (prompt === '' || apiKey === '') {
    alert('Please add both prompt text and API key');
    return;
  }

  try {
    showSpinner();

    const response = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey, // Include API key in the headers
      },
      body: JSON.stringify({ prompt }),
    });

      if (!response.ok) {
        throw new Error("Image could not be generated");
      }
      const image = await response.json();
      const imageUrl = image.data;

      setImageUrl(imageUrl);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      removeSpinner();
    }
  };
  const showSpinner = () => {
    document.querySelector(".spinner").classList.add("show");
  };
  const removeSpinner = () => {
    document.querySelector(".spinner").classList.remove("show");
  };

  return (
    <>
      <div className="promptDiv">
        <form id="imagePrompt" onSubmit={handleSubmit}>
          <h2 id="ImagineAnImage" style={{ color: "#BEE56B" }}>
            Imagine An Image
          </h2>
          <input type="text" id="promptInput" />
          <br />
          <button className="generateButton" type="submit">
            Generate
          </button>

          <label htmlFor="apiKey">API Key:</label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />

        </form>
      </div>
      <div className="image-container">
        <h2 className="msg">{errorMsg}</h2>
        {imageUrl && <img src={imageUrl} alt="" id="image" />}
      </div>
      <div className="spinner"></div>
    </>
  );
};

export default GenImg;
