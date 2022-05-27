import { AppProviders } from "./AppProviders";
import { Playground } from "./components/Playground";
import "./styles/reset.scss";

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
