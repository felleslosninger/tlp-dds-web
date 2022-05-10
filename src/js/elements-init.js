export function elementsInit() {
  $(document).ready(function () {
    ddsElements({
      parentContainerID: 'modules',
      selectors: '.ddsweb-section',
      tenColSelectors: '.dds-reports,.dds-courses',
      colorRedSelectors: '.dds-reports',
      colorYellowSelectors: '.dds-courses',
      colorBlueSelectors: '.dds-blog',
    })
  })
}