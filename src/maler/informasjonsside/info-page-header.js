import {body} from "../../components/body/body";
import {header} from "../../components/header/header";
import {Footer} from "../../components/footer/stories/footer.stories";

//language=HTML
export const InfoPageHeader = () => String.raw`
    ${header()}
    <div class="info-page-2">

        <div class="info-page-2__header" style="background-image: url('info.jpg')">
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="info-page-2__content">
                        <h1 class="info__title">Nå er den nye veilederen for orden i eget hus her</h1>
                        <p class="info__ingress">Veilederen for orden i eget hus er kommet i en ny, oppdatert versjon.
                            Etter et samarbeid med KS, Arkivverket og Digdir, vil enda flere få god drahjelp fra
                            veilederen i arbeidet med å skape orden i sine data.
                        </p>

                        ${body()}

                    </div>

                </div>
            </div>
        </div>
    </div>
    ${Footer()}
`