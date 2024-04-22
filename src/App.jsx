import "./style/main.css";
import Header from "./components/Header/Header";
import { Section } from "./components/Section/Section";
function App() {
  return (
    <>
      <Header />
      <main>
        <Section title="Home Page" theme="dark" />
        <Section title="Content" />
        <Section title="Info" />
        <Section title={"12"} dark="dark" />
      </main>
    </>
  );
}
export default App;