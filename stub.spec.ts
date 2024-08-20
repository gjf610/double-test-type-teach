import { vi, it, expect } from 'vitest'
import { sendWelcomeEmail } from "./stub";

vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: vi.fn(() => "test@email.com")
  }
})
it('sendWelcomeEmail sends to the correct address', async () => {
  const email = sendWelcomeEmail(1)
  expect(email).toBe("test@email.com")
})
