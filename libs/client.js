import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "meer-blog",
    apiKey: process.env.API_KEY,
});