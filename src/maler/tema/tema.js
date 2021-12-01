import {body} from "../../components/body/body";
import {header} from "../../components/header/header";
import {branding} from "../../components/branding/branding";
import {Footer} from "../../components/footer/stories/footer.stories";

//language=HTML
export const Tema = () => String.raw`
    ${header()}
    ${branding()}
    ${Footer()}
`