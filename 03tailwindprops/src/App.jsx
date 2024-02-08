import "./App.css";
import Cards from "./components/Cards";
import { CardTwo } from "./components/CardTwo";

function App() {
  return (
    <>
        <h1 className="bg-green-400 p-4 rounded-xl text-3xl font-bold mb-5">
          Hello World, Tailwind test
        </h1>
        <Cards username= 'Nabeel' btnText="Click here"/>
        <Cards username='Safique'/>
        <h1 className="bg-green-400 p-4 rounded-xl text-3xl font-bold mb-5 my-5">
        Props Test- reusable components
        </h1>
        <CardTwo
          title='Mackbook Pro'
          desc='Amazing Apple Product Made in China & Assemble in California '
          buttonText='Buy Now'
        />
        <CardTwo
          title='Mackbook Pro M1 Chip'
          desc='Amazing Apple Product Made in China & Assemble in California with some Advance features... '
        />
    </>
  );
}

export default App;
