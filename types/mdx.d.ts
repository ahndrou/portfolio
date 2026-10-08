import * as React from "react";

// MDX is framework agnostic. Different frameworks implement JSX
// in slightly different ways in that they take different props.
// To get proper typing, we have to set it up to work with React's JSX.

declare module "mdx/types.js" {
  export import JSX = React.JSX;
}
