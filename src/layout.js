const createBaseLayout = ({
                              title = 'DigDir title',
                              content = '',
                              stylePath = '../../css/build/index.css',
                              scriptPath = '../../components/build/index.js',
                          }) => {
    return String.raw`
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- DigDir admin design system assets -->
    <link rel="stylesheet" href="${stylePath}" />
    <!-- Script -->
    <script type="module" src="${scriptPath}" defer></script>

    <title>${title} | DigDir admin </title>
  </head>
  <body>
    <div class="page">
      <div class="top-bar"></div>

      <div class="sidebar">
        <nav>
          <ul class="menu">
            <li class="menu__item"></li>
          </ul>
        </nav>
      </div>

      <main class="content">
        ${content}
      </main>
    </div>
  </body>
</html>
`
}

export { createBaseLayout }
