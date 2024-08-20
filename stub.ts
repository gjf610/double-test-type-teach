import { getUserEmail } from "./stub.database";

export function sendWelcomeEmail(userId: number) {
  const email = getUserEmail(userId)

  return email
}
