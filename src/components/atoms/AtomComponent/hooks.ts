import { useState } from 'react'
import { AtomComponentProps } from '.'

export const useAtomComponentHooks = (props: AtomComponentProps) => {
  const [value, setValue] = useState('')
  // const memoValue = useMemo(() => false, [])
  // useEffect(() => {}, [])
  // handleClick = useCallback(() => {}, [])
  return { value, setValue }
}

