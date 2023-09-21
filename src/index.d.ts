import 'styled-components';

import {theme} from './services/styles/theme';

export type ThemeProps = typeof theme;

declare module 'styled-components' {
 export interface DefaultTheme extends ThemeProps {}
}
