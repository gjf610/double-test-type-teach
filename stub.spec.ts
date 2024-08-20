import { vi, it, expect, describe } from 'vitest'

import { sendWelcomeEmail } from "./stub";
vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: () => "test@email.com"
  }
})
it('sendWelcomeEmail sends to the correct address', async () => {
  const email = sendWelcomeEmail(1)
  expect(email).toBe("test@email.com")
})
