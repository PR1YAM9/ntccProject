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

      const response = await fetch('https://fair-tan-boa-fez.cyclic.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
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

  const handleAddKey = (e) => {
    window.location.href = "https://app.tryleap.ai/"; 
    e.preventDefault()
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
          <div className="cove">
            <div className="inner">
              <label className="label" htmlFor="apiKey">
                API Key:
              </label>
              <input
                type="text"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <a  target="_blank" rel="noreferrer" href="https://app.tryleap.ai/">
                <button className="getKey" onClick={handleAddKey}>Get Key</button>
              </a>
            </div>
            <button className="generateButton" type="submit">
              Generate
            </button>
          </div>
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
