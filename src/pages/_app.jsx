import {AuthProvider} from "@/providers/AuthProvider";
import {QueryClient, QueryClientProvider} from "react-query";

import "../index.css";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient();

const NoneLayout = ({children}) => {
    return children
}
export default function App({Component, pageProps}) {
    const isProtected = Component.isProtected;
    const Layout = Component.Layout || NoneLayout

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider isProtectedPage={isProtected}>
                <Layout>
                    <Component {...pageProps} />
                    <Toaster
                        toastOptions={{
                            className: "z-[999999999999999999999999999]",
                            style: {},
                        }}

                        position="bottom-left"
                        reverseOrder={true}
                    />
                </Layout>
            </AuthProvider>
        </QueryClientProvider>
    );
}
