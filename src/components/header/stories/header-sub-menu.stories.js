import { withDesign } from 'storybook-addon-designs'
import {headerSubMenu} from "../header-sub-menu";

export default {
    title: 'Komponenter/Header',
    decorators: [withDesign],
    parameters: {
        layout: 'fullscreen',
    },
}

export const SubMenu = () => headerSubMenu();

SubMenu.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/rrBqUrSQl6jdAJpjUzV3cN/Komponentar---Sogn-Rammeverket?node-id=1035%3A3913',
    },
}