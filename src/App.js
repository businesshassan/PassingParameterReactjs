import "./App.css";
import QueryReceiver from "./component/QueryReceiver";

function App() {
  const getDataEventHandler = (props) => {
    console.log(props);
  };
  return (
    <div>
      <QueryReceiver getReceiverData={getDataEventHandler} />
    </div>
  );
}

export default App;
