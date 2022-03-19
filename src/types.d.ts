type MagicType = {
  name: string
  fields: MagicType[]
} & (
  | {
      ofType: MagicType
      kind: "List"
      type: never
    }
  | {
      ofType: never
      kind: never
      type: MagicType
    }
)

export type IntroSpectionResult = {
  __schema: {
    queryType: {
      fields: Array<{
        name: string
        type: MagicType
        args: Array<{ name: string; defaultValue: string; type: MagicType }>
      }>
    }
  }
}
