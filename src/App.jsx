import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";

function App() {
  const accordionItems = [
    { title: "What is React?", content: "React is a JavaScript library for UI development." },
    { title: "Why use React?", content: "React makes UI development easy with reusable components." },
    { title: "How does React work?", content: "React updates the UI efficiently using a virtual DOM." }
  ];

  return (
    <div className="app">
      <DarkModeButton />
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
