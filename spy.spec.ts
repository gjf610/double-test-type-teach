import { it, expect, vi } from 'vitest'
import { user } from "./spy";
it('spy', () => {
  vi.spyOn(user, "getName").mockImplementation(() => "hello")
  user.getName()

  expect(user.getName).toBeCalled()
  expect(user.getName()).toBe("hello")
  console.log(user.getName)
})
