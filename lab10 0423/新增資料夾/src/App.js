
function App() {
const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText = event.target.innerText + "啊啊啊啊啊額啊啊被點了"
};


  return (
    <div className="App">
    <h1 onClick={changeText}>Hello world</h1>
    </div>
  );
}


export default App;
