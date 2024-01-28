import { useEffect } from "react";
import axios from "axios";

const sendRequestToServer = async () => {
  await axios.get("url/");
};

export default function App() {
  useEffect(() => {
    sendRequestToServer();
  }, []);

  return <div>App</div>;
}
