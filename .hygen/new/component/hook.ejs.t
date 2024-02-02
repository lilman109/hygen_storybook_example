---
to: "<%= have_hooks ? `${path}/hooks.ts` : null %>"
unless_exists: true
---
import { useState } from 'react'
<% if (props) { -%>
import { <%= name %>Props } from '.'

export const use<%= name %>Hooks = (props: <%= name %>Props) => {
  const [value, setValue] = useState('')
  // const memoValue = useMemo(() => false, [])
  // useEffect(() => {}, [])
  // handleClick = useCallback(() => {}, [])
  return { value, setValue }
}
<% } else { -%>

export const use<%= name %>Hooks = () => {
  const [value, setValue] = useState('')
  // const memoValue = useMemo(() => false, [])
  // useEffect(() => {}, [])
  // handleClick = useCallback(() => {}, [])
  return { value, setValue }
}
<% } -%>

