import { getUserEmail } from "./stub.database";

export function sendWelcomeEmail(userId) {
  const email = getUserEmail(userId)

  return email
}
