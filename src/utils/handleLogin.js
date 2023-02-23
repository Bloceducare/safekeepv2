import { getCsrfToken, signIn } from "next-auth/react";
import { SiweMessage } from "siwe";

const handleLogin = async ({ address, chain, signMessageAsync }) => {
  try {
    const callbackUrl = "/dashboard";
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId: chain?.id,
      nonce: await getCsrfToken()
    });
    const signature = await signMessageAsync({
      message: message.prepareMessage()
    });
    signIn("credentials", {
      message: JSON.stringify(message),
      redirect: false,
      signature,
      callbackUrl
    });
  } catch (error) {
    window.alert(error);
  }
};

export default handleLogin;
