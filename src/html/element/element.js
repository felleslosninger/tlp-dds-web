import ImageIcon from '@digdir/ds-icons/svg/outline/Image.svg'
import DownloadIcon from '@digdir/ds-icons/svg/outline/Download.svg'

const createElement = ({ color = 'red', variant = 1 }) => {
  const classPrefix = 'ddsweb-element'

  const getVariant = () => {
    if (variant === 1 || variant === 2) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 618 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="183.08" cy="188.079" rx="183.08" ry="183.079" fill="purple"/>
                    <path d="M528.039 0L617.429 283.756L333.676 373.142L244.286 89.3859L528.039 0Z" fill="purple"/>
                </svg>
            `
    } else if (variant === 3 || variant === 4) {
      //language=HTML
      return String.raw`
                <svg viewBox="0 0 597 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="419.063" cy="186.03" rx="177.063" ry="177.03" fill="purple"/>
                    <path d="M272.508 0L354.156 272.498L81.6473 354.119L-0.00112268 81.6215L272.508 0Z" fill="purple"/>
                </svg>
            `
    }
  }

  //language=HTML
  return String.raw`
        <div class="${classPrefix} ${classPrefix}--${color} ${classPrefix}--${variant}">
            ${getVariant()}
        </div>
    `
}
export { createElement }
