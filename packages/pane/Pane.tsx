import React, { useState } from "react"

import { QuerySelector } from "./QuerySelector"
import { InputTable } from "./InputTable"

export const Pane = () => {
  const [activeQuery, setActiveQuery] = useState<string>()

  return (
    <>
      <QuerySelector onChange={setActiveQuery} />
      {activeQuery && <InputTable activeQuery={activeQuery} />}
    </>
  )
}
