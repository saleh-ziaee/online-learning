import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

import "../index.css";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const isProtected = Component.isProtected;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider isProtectedPage={isProtected}>
        <Component {...pageProps} />
          <Toaster
              position="bottom-left"
              reverseOrder={false}
          />
      </AuthProvider>
    </QueryClientProvider>
  );
}
