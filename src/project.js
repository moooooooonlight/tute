import MyHeader from "./myHeader";
import MyFooter from "./MyFooter";

function App() {
  return (
    //JSX문법
    <div className="App" style={style.App}>
      <MyHeader />
      <h2>안녕 리액트</h2>
      <b>React.js</b>
      <MyFooter />
    </div>
  );
}

export default App;