import React from 'react'

 const handleSubmit=(e)=> {
	e.preventDefault();

	document.querySelector('.msg').textContent = '';
	document.querySelector('#image').src = '';

	const prompt = document.querySelector('#promptInput').value;

	if (prompt === '') {
		alert('Please add some text');
		return;
	}

	generateImageRequest(prompt);
}
const generateImageRequest= async(prompt)=>{
	try {
		showSpinner();

		const response = await fetch('http://localhost:5000/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt
			}),
		});

		if (!response.ok) {
			removeSpinner();
			throw new Error('That image could not be generated');
		}

		const image = await response.json();

		const imageUrl = image.data;

		document.querySelector('#image').src = imageUrl;

		removeSpinner();
	} catch (error) {
		//print error to front end
		document.querySelector('.msg').textContent = error;
	}
}
const  showSpinner=()=> {
	document.querySelector('.spinner').classList.add('show');
}
const removeSpinner=()=> {
	document.querySelector('.spinner').classList.remove('show');
}

const GenImg = () => {
  return (
    <>
        <div className="promptDiv">
		<form id="imagePrompt" onSubmit={handleSubmit}>
			<h2 id="ImagineAnImage" style={{color:'#BEE56B'}}>Imagine An Image</h2>
			<input type="text" id="promptInput"/><br/>
			<button className="generateButton" type="submit">Generate</button>
		</form>
        </div>
        <div className="image-container">
            <h2 className="msg"></h2>
            <img src="" alt="" id="image" />
        </div>
        <div className="spinner"></div>
    </>
  )
}

export default GenImg