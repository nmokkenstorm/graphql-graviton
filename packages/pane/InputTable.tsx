import React from "react"
import { useType } from "../hooks/useQueries"
import { TextInput } from "../components/TextInput"
import { isObjectType, unwrapType } from "../utils/lib/introspection"

export const InputTable = ({ activeQuery }: { activeQuery: string }) => {
  const type = useType(activeQuery)

  if (!type || !isObjectType(type)) {
    return null
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {type.fields.map((field) => (
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                      {field.name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      {unwrapType(field.type).name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      <TextInput
                        name={field.name}
                        placeholder={unwrapType(field.type).name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
