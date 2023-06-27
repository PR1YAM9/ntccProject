import React, { useState } from 'react';

const GenImg = () => {
  const [errorMsg, setErrorMsg] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setImageUrl('');

    const prompt = document.querySelector('#promptInput').value;

    if (prompt === '') {
      alert('Please add some text');
      return;
    }

    try {
      // setIsLoading(true);
      showSpinner();

      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Image could not be generated');
      }

      const image = await response.json();
      const imageUrl = image.data;

      setImageUrl(imageUrl);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      // setIsLoading(false);
      removeSpinner()
    }
  };
  const  showSpinner=()=> {
    document.querySelector('.spinner').classList.add('show');
  }
  const removeSpinner=()=> {
    document.querySelector('.spinner').classList.remove('show');
  }

  return (
    <>
      <div className="promptDiv">
        <form id="imagePrompt" onSubmit={handleSubmit}>
          <h2 id="ImagineAnImage" style={{ color: '#BEE56B' }}>
            Imagine An Image
          </h2>
          <input type="text" id="promptInput" />
          <br />
          <button className="generateButton" type="submit">
            Generate
          </button>
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
