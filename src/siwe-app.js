import { configureSIWE } from "connectkit-next-siwe";

export const siwe = configureSIWE({
  apiRoutePrefix: "/api/siwe",
  session: {
    cookieName:"safekeepv2", // defaults to "connectkit-next-siwe"
    password: "somereallysecretsecretsecretsecretsecretsecret", // defaults to `process.env.SESSION_SECRET`  
    },
});

