import './App.css';

import { FLASK_URL, GO_URL, NODE_URL, api } from './api';

import { useState } from 'react';

function App() {
  const [flaskResponse, setFlaskResponse] = useState(null);
  const [nodeResponse, setNodeResponse] = useState(null);
  const [goResponse, setGoResponse] = useState(null);

  const getFlaskResponse = async () => {
    const response = await api.get(`${FLASK_URL}/hello`);
    if (response.status === 200) {
      const { data } = response;
      setFlaskResponse(data);
    } else {
      setFlaskResponse('Error');
    }
  };

  const getNodeResponse = async () => {
    const response = await api.get(`${NODE_URL}/hello`);
    if (response.status === 200) {
      const { data } = response;
      setNodeResponse(data);
    } else {
      setNodeResponse('Error');
    }
  };

  const getGoResponse = async () => {
    const response = await api.get(`${GO_URL}/hello`);
    if (response.status === 200) {
      const { data } = response;
      setGoResponse(data);
    } else {
      setGoResponse('Error');
    }
  };

  return (
    <>
      <h1>Hello from React!</h1>
      <div className="card">
        <button onClick={() => getFlaskResponse()}>Get Flask Response</button>
        <p>{flaskResponse}</p>
      </div>
      <div className="card">
        <button onClick={() => getNodeResponse()}>Get Node Response</button>
        <p>{nodeResponse}</p>
      </div>
      <div className="card">
        <button onClick={() => getGoResponse()}>Get Go Response</button>
        <p>{goResponse}</p>
      </div>
    </>
  );
}

export default App;
