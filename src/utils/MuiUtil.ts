export function excludeProps(props: Array<string>) {
  return {
    shouldForwardProp(propName: PropertyKey) {
      return !props.includes(propName.toString());
    },
  };
}
