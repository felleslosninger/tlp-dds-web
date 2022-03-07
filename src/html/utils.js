import prettier from 'prettier/standalone.js'
import parserHtml from 'prettier/parser-html.js'

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
      ${label}<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16">
        <path
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
        ></path>
      </svg>
    </span>
    `
}
