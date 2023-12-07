import Demo from "./Demo"
function App() {
  const username = "MD NABEEL AHEMAD";

  return (
    <>
    {/* only provide evaluted expression {username}*/}
      <h1>Hello React | vite {username}</h1>
      <Demo/>
    </>
  
  )
}

export default App
