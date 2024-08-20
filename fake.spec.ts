import { it, expect, describe, vi } from 'vitest'
class FakeSocket {
  private listeners: { [key: string]: ((...args: any[]) => void)[] } = {}
  on(event: string, listener: (...args: any[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(listener)
  }

  trigger(event: string, ...args: any[]) {
    const eventListeners = this.listeners[event]
    if (eventListeners) {
      eventListeners.forEach((listener) => listener(...args))
    }
  }
}

function io() {
  return new FakeSocket()
}


vi.mock("socket.io-client", () => {
  return { default: io }
})

import { initSocket, addListener } from "./fake.socket";

it('should handle message from the server', () => {
  const listen = vi.fn()

  const socket = initSocket()

  addListener(listen)

  socket.trigger("message", "hi")

  expect(listen).toBeCalledWith("hi")
})

