import { theme } from '../themes'
import type { ResponsiveProp, Responsive } from '../types/style'

export type AppTheme = typeof theme
// keyof オブジェクトからkey名を文字リテラルで取得する
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingKeys = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights

// 各Themeのキーの型
export type Space = SpaceThemeKeys | (string & {})
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpacing = LetterSpacingKeys | (string & {})
export type LineHeight = LineHeightThemeKeys | (string & {})

// ブレークポイント
const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px',
  md: '768px',
  ls: '1024px',
  xl: '1280px',
}

/**
 * Responsive型をCSSプロパティとその値に変換
 * @param propKey CSSプロパティ
 * @param prop Responsive型
 * @param theme AppTheme
 * @returns CSSプロパティとその値 (ex. backgroud-color: white;)
 */
export function toPropValue<T>(propKey: string, prop?: Responsive<T>, theme?: AppTheme) {
  if (prop === undefined) return undefined
  if (isResponsivePropType(prop)) {
    const result = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        // デフォルトのスタイル
        result.push(`${propKey}:${toThemeValueIfNeeded(propKey, prop[responsiveKey], theme)}`)
      }
    }
  }
}

// Set : 重複した値がないことを保証したコレクション
// 順序情報は持っていない
const SPACE_KEYS = new Set(['margin', 'margin-top', 'margin-left', 'margin-bottom', 'margin-right', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'padding-right'])

const COLOR_KEYS = new Set(['color', 'background-color'])

const FONT_SIZE_KEYS = new Set(['font-size'])

const LINE_SPACING_KEYS = new Set(['letter-spacing'])

const LINE_HEIGHT_KEYS = new Set(['line-height'])

function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return prop && (prop.base !== undefined || prop.sm !== undefined || prop.md !== undefined || prop.ls !== undefined || prop.xl !== undefined)
}
