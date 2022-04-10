import React from "react"
import { TextInput } from "../components/TextInput"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const Config = () => {
  const [token, setToken] = useLocalStorage("token")
  const [baseUrl, setBaseUrl] = useLocalStorage("baseUrl")

  return (
    <form className="space-y-6" action="#" method="POST">
      <TextInput name="baseUrl" initialValue={baseUrl} onChange={setBaseUrl} />
      <TextInput
        name="authorizationToken"
        initialValue={token}
        onChange={setToken}
      />
    </form>
  )
}
