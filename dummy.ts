export interface Message {
  subject: string;
  body: string;
}

export interface Recipient {
  email: string;
  name: string;
}

export function sendEmail(message: Message, recipient: Recipient) {
  console.log(`Email subject: ${message.subject}`)
  console.log(`Email body: ${message.body}`)

}