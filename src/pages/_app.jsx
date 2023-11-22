import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

import "../index.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const isProtected = Component.isProtected;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider isProtectedPage={isProtected}>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
