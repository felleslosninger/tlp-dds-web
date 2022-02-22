import prettier from 'prettier/standalone.js'
import parserHtml from 'prettier/parser-html.js'
import arrowForwardIcon from '@digdir/ds-icons/svg/arrow_forward/outline.svg'

/**
 * Sanitizes text for use in HTML (allowlisting)
 * Allows alphanumerical characters including æøå (0-9a-zæøåA-ZÆØÅ), dash, underscore and whitespace (\-\_\s).
 * Removes everything else.
 */
export function sanitizeStrict(text) {
  const blockList = /[^0-9a-zæøåA-ZÆØÅ\-\_\s]/g
  return text.replaceAll(blockList, '')
}
/**
 * Formats HTML
 * Formats HTML as string using Prettier
 */
export function formatHtml(htmlString) {
  return prettier.format(htmlString, {
    parser: 'html',
    plugins: [parserHtml],
  })
}

/**
 * Generate HTML for icon link core component
 * to be used inside link element (like a card)
 */
export const createIconLinkSpan = (label = 'Click me') => {
  label = sanitizeStrict(label)

  return String.raw`
    <span class="dds-icon-link dds-icon-link--icon-right">
      ${label}
      ${arrowForwardIcon}
    </span>
    `
}
