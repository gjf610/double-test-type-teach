import { it, expect } from 'vitest'
import { Message, Recipient, sendEmail } from "./dummy";

it('EmailService', () => {
  const message: Message = {
    subject: "yuwen",
    body: "eeeee"
  }
  const dummyRecipient = {} as Recipient
  sendEmail(message, dummyRecipient)
})