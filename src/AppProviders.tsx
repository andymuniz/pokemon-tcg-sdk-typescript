import { QueryClient, QueryClientProvider } from "react-query";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
}

export { AppProviders };
