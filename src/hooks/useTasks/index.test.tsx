import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import { useTasks } from '.'


test('Can add a task', () => {
  const { result } = renderHook(() => useTasks())

  expect(Object.keys(result.current.tasks).length).toBe(0)
  act(() => result.current.setAddTaskInput("Hello!"))
  act(() => result.current.addTask({preventDefault: () => null} as unknown as React.FormEvent<HTMLFormElement>))
  expect(Object.keys(result.current.tasks).length).toBe(1)
})