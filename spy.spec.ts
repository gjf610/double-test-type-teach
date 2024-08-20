import { it, expect, describe, vi } from 'vitest'
import { user } from "./spy";
it('spy', () => {
  vi.spyOn(user, "getName")

  user.getName()
  expect(user.getName).toBeCalled()

  console.log(user.getName)
})
