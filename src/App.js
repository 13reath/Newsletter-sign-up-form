import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDismiss = (e) => {
    e.preventDefault();
    setIsValidEmail(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
    } else {
      setError(false);
      setIsValidEmail(true); // Если email валидный, показываем карточку
    }
  };

  return (
    <div className="App">
      <main className={`card${isValidEmail ? "-success" : ""}`}>
        {isValidEmail ? (
          <div className="success-card">
            <img
              className="icon icon-success"
              src="/assets/images/icon-success.svg"
              alt="success"
            />
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to
              <span> {email}</span> Please open it and click the button inside
              to confirm your subscription.
            </p>
            <button onClick={handleDismiss}>Dismiss message</button>
          </div>
        ) : (
          <>
            <div className="card-text">
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className="card-adv">
                <div className="card-adv-item">
                  <img
                    className="icon icon-success"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/icon-success.svg"
                    }
                    alt="success"
                  />
                  <span>Product discovery and building what matters</span>
                </div>
                <div className="card-adv-item">
                  <img
                    className="icon icon-success"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/icon-success.svg"
                    }
                    alt="success"
                  />
                  <span>Measuring to ensure updates are a success</span>
                </div>
                <div className="card-adv-item">
                  <img
                    className="icon icon-success"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/icon-success.svg"
                    }
                    alt="success"
                  />
                  <span>And much more!</span>
                </div>
              </div>

              <div className="card-mail">
                <p>Email address</p>
                <input
                  className={error ? "wrong-input" : ""}
                  type="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {error && <p className="error-message">Valid email required</p>}
              </div>

              <button onClick={handleSubmit}>
                Subscribe to monthly newsletter
              </button>
            </div>

            <div className="card-image">
              <picture>
                <source
                  media="(min-width: 901px)"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/assets/images/illustration-sign-up-desktop.svg"
                  }
                />
                <source
                  media="(max-width: 900px)"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/assets/images/illustration-sign-up-mobile.svg"
                  }
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/illustration-sign-up-desktop.svg"
                  }
                  alt="Sign up illustration"
                />
              </picture>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
