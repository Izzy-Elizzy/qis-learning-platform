import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <iframe
        className="video"
          src="https://www.youtube.com/embed/GSsElSQgMbU?si=0rRDod-ghZg45FIb&amp;start=1854"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe className="chatbot"
        src="http://137.184.241.149:3000/"
        title="Gemini Chat Bot"
        frameborder="0"
        ></iframe>

        <div className="launch-jupyter"  onClick={() => handleLaunchClick()}>
          <p>
            Launch Assignment
          </p>
        </div>
      </header>
    </div>
  );
}

function handleLaunchClick() {
  const jupyterHubUrl = "http://137.184.241.149"; // Replace with the IP address
  window.open(jupyterHubUrl, '_blank', 'noopener,noreferrer'); 
}

export default App;
