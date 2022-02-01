
import {Controller} from "pinglue";

export default class extends Controller {

    /**
     * Life cycle method: is called during the init phase
     */
    async init() {
        console.log("Hello world! Package 3 at route 1 just initialized!");
    }

    /**
     * Life cycle method: is called during the start phase
     */
    async start() {
        console.log("Hello world! Package 3 at route 1 just started!");

        // running channel "greetings" asynchronously
        const channelOutcome = await this.runA(
            "greetings",
            {param1: "x", param2: "y"},
            {value1: "x", value2: "y"}
        );

        console.log("The outcome of channel greetings:", channelOutcome);
    }
    
}
