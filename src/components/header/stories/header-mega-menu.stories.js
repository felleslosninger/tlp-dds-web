import { withDesign } from 'storybook-addon-designs'
import {headerMegaMenu} from "../header-mega-menu";

export default {
    title: 'Komponenter/Header',
    decorators: [withDesign],
    parameters: {
        layout: 'fullscreen',
    },
}

export const MegaMeny = () => headerMegaMenu();

MegaMeny.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/Komponentar---Sogn-Rammeverket?node-id=1035%3A3913',
    },
}