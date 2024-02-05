"use client";
import React, {useState} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const TansStackProvider = ({children}: { children: React.ReactNode }) => {
    const [queryClientState] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClientState}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

export default TansStackProvider;
