import { Posts } from "./Posts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const accessDate = new Date(localStorage.getItem("access_date"));
    if (new Date().getTime() > accessDate.getTime() + 3600) {
      fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials&client_id=2136a4c5d664491a8dda6eceb76eafd0&client_secret=6fe6fa186f2a4e3888a03f7ddd3b452c"
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem("access_token", json.access_token);
          localStorage.setItem("access_date", new Date().toISOString());
        });
    }
    const accessToken = localStorage.getItem("access_token");
    fetch("https://api.spotify.com/v1/search?q=test&type=track", {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
    return () => {}
  }, []);
  return (
    <div className="App">
      <Posts></Posts>
    </div>
  );
}

export default App;
