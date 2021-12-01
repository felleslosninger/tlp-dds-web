import {Info} from "../info";
import {InfoPageHeader} from "../info-page-header";

export default {
    title: 'Maler/Informasjonsside',
    parameters: {
        layout: 'fullscreen',
    },
}

export const Vanlig = () => Info();
export const Header = () => InfoPageHeader();
