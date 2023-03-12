function App() {
    const name = 'Karolina'
    const x = true
  return (
    <div className="container">
        <h1>Hello</h1>
        <h2>Hello {name}</h2>
        <h2>Hello {x ? 'yes' : 'no'}</h2>
    </div>
  );
}

export default App;
