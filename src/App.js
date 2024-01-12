import { useState } from 'react';
import AwaitGet from './components/AwaitGet';
import MemberList from './components/MemberList';

function App() {
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <AwaitGet url={"/users/getuserlist"} setMessage={setMessage}>
        {
          data => (
            <MemberList data={data} message={message} />
          )
        }
      </AwaitGet>
    </div>
  );
}

export default App;
