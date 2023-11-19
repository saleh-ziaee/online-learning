import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

import '../index.css'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
