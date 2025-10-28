import "../styles/SignIn.css";

function SignIn() {
  return (
    <div className="signIn">
      <div className="logo">
        <img src="src/assets/icons/spotifyLogo.svg" alt="Logo" />
      </div>
      <h1 className="tagLine">LIFE IS WASTED ON THE LIVING</h1>
      <p className="text">
        <span>Sign in</span>
        <br />
        <span>with</span>
      </p>
      <div className="buttonWrapper">
        <div className="buttons">
          <button className="btnApple">
            <img src="src/assets/icons/btnApple.svg" alt="Apple" />
          </button>
          <button className="btnGoogle">
            <img src="src/assets/icons/btnGoogle.svg" alt="Google" />
          </button>
          <button className="btnX">
            <img src="src/assets/icons/btnTwitter.svg" alt="Twitter" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
