import React, { useState } from "react"

import { QuerySelector } from "./QuerySelector"
import { InputTable } from "./InputTable"

export const Pane = () => {
  const [activeQuery, setActiveQuery] = useState<string>()

  return (
    <div>
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <QuerySelector onChange={setActiveQuery} />
        {activeQuery && <InputTable activeQuery={activeQuery} />}
      </div>
    </div>
  )
}
