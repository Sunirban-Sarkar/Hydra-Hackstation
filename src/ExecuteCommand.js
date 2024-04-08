import React, { useState } from 'react';
import axios from 'axios';

function ExecuteCommand() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleExecute = async () => {
    try {
      // Fetch JWT token from localStorage
      const token = localStorage.getItem('token');

      // Make a GET request to the execute-command endpoint with the command and token in the headers
      const response = await axios.get(`http://170.187.237.161:3001/execute-command?command=${encodeURIComponent(command)}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Update output state with the response data
      setOutput(response.data);
    } catch (error) {
      // Handle errors
      setError(error.response.data || 'Error executing command');
      console.error('Error executing command:', error);
    }
  };

  return (
    <div>
      <h2>Execute Command</h2>
      <div>
        <label>Command:</label>
        <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} />
      </div>
      <button onClick={handleExecute}>Execute</button>
      {output && <div><pre>{output}</pre></div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default ExecuteCommand;
