const createLinkBox = ({}) => {
  return String.raw`
  <div class="ddsweb-link-box">
    <a
      class="dds-panel-link dds-panel-link--large"
      href="https://www.digdir.no/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span class="dds-panel-link__label">Panel link</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"></path>
      </svg>
    </a>
  </div>
  `
}

export { createLinkBox }
