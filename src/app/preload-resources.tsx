"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (apiUrl && apiUrl !== "") {
        ReactDOM.preconnect(apiUrl);
        ReactDOM.prefetchDNS(apiUrl);
    }

    ReactDOM.preconnect("https://fonts.googleapis.com");
    ReactDOM.prefetchDNS("https://fonts.googleapis.com");
    ReactDOM.preconnect("https://fonts.gstatic.com");
    ReactDOM.prefetchDNS("https://fonts.gstatic.com");
    return null;
}
