import {
  IntrospectionObjectType,
  IntrospectionType,
  IntrospectionTypeRef,
  IntrospectionNamedTypeRef,
} from "graphql/utilities"

const isWrappedType = (
  type: IntrospectionTypeRef
): type is Exclude<IntrospectionTypeRef, IntrospectionNamedTypeRef> =>
  "ofType" in type && !!type.ofType

export const isObjectType = (
  type: IntrospectionType
): type is IntrospectionObjectType => type.kind === "OBJECT"

export const nameWrappedType = (value: IntrospectionTypeRef): string =>
  isWrappedType(value)
    ? `${value.kind}<${nameWrappedType(value.ofType)}>`
    : value.name

export const unwrapType = (
  value: IntrospectionTypeRef
): IntrospectionNamedTypeRef =>
  isWrappedType(value) ? unwrapType(value.ofType) : value
