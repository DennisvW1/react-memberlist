import Await from './components/Await';
import MemberList from './components/MemberList';

function App() {
  return (
    <div className="App">
      <Await>
        {
          data => {
            return (
              <MemberList data={data} />
            );
          }
        }
      </Await>
    </div>
  );
}

export default App;
