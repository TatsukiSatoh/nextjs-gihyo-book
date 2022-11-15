import { theme } from '../themes'
import type { ResponsiveProp, Responsive } from '../types/style'

export AppTheme = typeof theme
// keyof オブジェクトからkey名を文字リテラルで取得する
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingKeys = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights