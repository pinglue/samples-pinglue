
import {Controller} from "pinglue";

export default class extends Controller {

    /**
     * Life cycle method: is called during the init phase
     */
    async init() {
        console.log("Hello world! Package 2 at route 1 just initialized!");

        // gluing a handler to channel greetings
        this.glue(
            "greetings",
            this.greetingHandler.bind(this)
        );
    }

    async greetingHandler(params, value) {
        return {
            [this.id]: "Have an awesome day!"
        };
    }

    /**
     * Life cycle method: is called during the start phase
     */
    async start() {
        console.log("Hello world! Package 2 at route 1 just started!");
    }
    
}
