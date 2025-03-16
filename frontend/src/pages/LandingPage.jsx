import React from 'react';

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Told you it was a demo page!');
  };

  return (
    <main className="landing">
      <div className="landing__container">
        <div className="landing__content">
          <h1 className="landing__title" id="main-heading">Insights at your fingertips</h1>
          <form 
            className="landing__form" 
            onSubmit={handleSubmit}
            aria-labelledby="main-heading"
            role="search"
          >
            <label className="visually-hidden" htmlFor="demo-input">
              Demo input field
            </label>
            <input
              type="text"
              id="demo-input"
              className="landing__input"
              placeholder="This is just a demo (:"
              aria-describedby="input-description"
            />
            <span id="input-description" className="visually-hidden">
              This is a demonstration input field and does not collect any information
            </span>
            <button 
              type="submit" 
              className="landing__button"
              aria-label="Submit demo form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;