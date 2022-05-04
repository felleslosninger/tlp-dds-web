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
    <span class="dds-icon-link dds-icon-link--icon-right dds-icon-link--shortcut dds-icon-link--inline">
      ${label} <svg viewBox="4 4 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#1E2B3C"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z" fill="#1E2B3C"></path>
      </svg>
    </span>
    `
}

export const createIconLink = (label = 'Click me') => {
  label = sanitizeStrict(label)

  return String.raw`
    <a
      class="dds-icon-link dds-icon-link--icon-left dds-icon-link--shortcut"
      href="https://www.digdir.no/"
      rel="noreferrer noopener"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.59 6 7.41 12">
        <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"></path>
      </svg>${label}
    </a>
    `
}
