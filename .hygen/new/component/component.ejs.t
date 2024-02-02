---
to: <%= path %>/index.tsx
unless_exists: true
---
<% if(!server_component){ -%>
'use client'

<% } -%>
<% if (have_hooks) { -%>
import { use<%= name %>Hooks } from './hooks'
<% } -%>
<% if(props){ -%>

export interface <%= name %>Props {}

export const <%= name %> = (props: <%= name %>Props) => {
<% if (have_hooks) { -%>
  const { value, setValue } = use<%= name %>Hooks(props)
<% } -%>

  return null
}
<% } else { -%>

export const <%= name %> = () => {
<% if (have_hooks) { -%>
  const { value, setValue } = use<%= name %>Hooks()
<% } -%>

  return null
}
<% } -%>


