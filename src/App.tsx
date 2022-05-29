import { AppProviders } from "./AppProviders";
import { Playground } from "./components/Playground";

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
