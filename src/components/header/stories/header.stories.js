import {withDesign} from 'storybook-addon-designs'
import {header} from "../header";

export default {
    title: 'Komponenter/Header',
    decorators: [withDesign],
    parameters: {
        layout: 'fullscreen',
    },
}

export const InlineMenu = () => header();

InlineMenu.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/Komponentar---Sogn-Rammeverket?node-id=1035%3A3913',
    },
}