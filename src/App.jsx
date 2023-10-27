import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = () => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  if (error) return <div className="status">failed to load</div>;
  if (isLoading) return <div className="status">loading...</div>;
  return (
    <div className="status">{data && <p>Status : {data.description}</p>}</div>
  );
}
export default App;
