import React from 'react'
import * as R from 'fp-ts/Refinement'

const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = <A, B extends A>(
  key: string,
  r: R.Refinement<A, B>,
): B | null => {
  const item = localStorage.getItem(key)
  if (item !== null) {
    try {
      const x: A = JSON.parse(item)
      if (r(x)) {
        return x
      }
    } catch (_) {}
  }
  return null
}

// State that gets stored on change and retrieved on initial render
// Essentially disabling browser refresh
export const useStorageState = <T, S extends T>(
  stateName: string,
  initialState: S,
  refinement: R.Refinement<T, S>,
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = React.useState<S>(
    getItem<T, S>(stateName, refinement) || initialState,
  )

  // On initial render, retrieve state from storage
  React.useEffect(() => {
    const x: S | null = getItem<T, S>(stateName, refinement)
    if (x !== null) {
      setState(x)
    }
  }, [])

  // Store state on change
  React.useEffect(() => {
    setItem<S>(stateName, state)
  }, [state])

  return [state, setState]
}
