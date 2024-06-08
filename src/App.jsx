import React from "react";
import Routers from "./Routers/Routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: 1,
                staleTime: 60 * 1000,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Routers />
        </QueryClientProvider>
    );
};

export default App;
