import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { defaultTheme } from "../themes/defaultTheme";

export default function SelectableTheme(props: any) {
  const { children } = props;
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
