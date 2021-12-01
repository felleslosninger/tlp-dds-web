import {body} from "../../components/body/body";
import {header} from "../../components/header/header";
import {Footer} from "../../components/footer/stories/footer.stories";

//language=HTML
export const Info = () => String.raw`
    ${header()}
    <div class="info">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <h1 class="info__title">Nå er den nye veilederen for orden i eget hus her</h1>
                    <p class="info__ingress">Veilederen for orden i eget hus er kommet i en ny, oppdatert versjon. Etter
                        et samarbeid med KS, Arkivverket og Digdir, vil enda flere få god drahjelp fra veilederen i
                        arbeidet med å skape orden i sine data.
                    </p>
                    <img class="info__img" src="info.jpg" alt="">
                    <div class="info__img-desc">
                        Powers the of we explanation trust, her are years, two
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    ${body()}
                </div>
            </div>
        </div>
    </div>
    ${Footer()}
`