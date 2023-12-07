import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
        <h1 className="bg-green-400 p-4 rounded-xl text-3xl font-bold mb-5">
          Hello World, Tailwind test
        </h1>
        <Cards username= 'Nabeel' btnText="Click here"/>
        <Cards username='Safique'/>

    </>
  );
}

export default App;
