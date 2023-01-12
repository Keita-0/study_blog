import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "keita-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "CdJAcjfQCzUDcRFUprK5uW0kyVOuVwZKXUD2",
});
