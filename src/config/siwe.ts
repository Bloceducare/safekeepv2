import {getNonce, getSession,signOut, createMessage,verifyMessage } from "@lib/auth"

export const siweConfig = {
  getNonce,
  createMessage,
  verifyMessage,
  getSession,
  signOut
};
