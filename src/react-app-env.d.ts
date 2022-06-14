/// <reference types="react-scripts" />

import {} from "styled-components";
import type { FlameTheme } from "@flame-ui/themes";

declare module "styled-components" {
  export interface DefaultTheme extends FlameTheme {}
}
