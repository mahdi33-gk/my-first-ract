
import './App.css'

function App() {
  function handleclick(){
    alert('get otta here!');
  } 
  function handleclisk(num){
    alert(num + 4 
    );
    
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handleclick}>Click</button>
      <button onClick={()=> handleclisk(8)}>Click1</button>
      
      
    </>
  )
}

export default App
