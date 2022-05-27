import { AppProviders } from "./AppProviders";
import { Playground } from "./components/Playground";
import "./styles/reset.css";

function App() {
  return (
    <AppProviders>
      <main>
        <Playground />
      </main>
    </AppProviders>
  );
}

export { App };
