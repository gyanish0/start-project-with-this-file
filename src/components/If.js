export function If(props) {
  if (!!props.condition) {
    return props.children;
  }
  return null;
}
// use it like this
// function App() {
//   return <If condition={true}>Render this if condition is true</If>;
// }
