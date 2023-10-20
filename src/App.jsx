import { useState } from "react";
import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const [status, setStatus] = useState("");

  const fetcher = () =>
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => setStatus(json.description));

  const { error, isLoading } = useSWR("/api/sleep=2000", fetcher);
  if (error) return <div className="status">failed to load</div>;
  if (isLoading) return <div className="status">loading...</div>;
  return <div className="status">{status && <p>Status : {status}</p>}</div>;
}

export default App;
