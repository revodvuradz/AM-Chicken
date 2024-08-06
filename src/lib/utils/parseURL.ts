export const parseURL = (url: string) => {
    // Check if the URL already has "https://" or "http://"
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
        // If not, add "https://"
        return `https://${url}`;
    }
    // If it already has a protocol, return the original URL
    return url;
};
