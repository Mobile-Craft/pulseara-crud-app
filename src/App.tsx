import AppRouter from "./router";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="appLayout">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
