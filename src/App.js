import './App.css';

function App() {
  const names = ['john', 'Samuel', 'Pamela', 'Naveh'];
  return (
    <div className="App">
      <h1>Display List of Names(Array map) in React</h1>
      {names.map(name => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default App;
