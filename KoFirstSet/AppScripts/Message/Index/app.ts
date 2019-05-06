import { sprintf } from "sprintf-js";
import { Message } from "../message";

export class App {
    run(): void {

        $("#setDefaults").click(() => this.setDefaults());

        var msg : Message = {
            message: "Hello, this is a test message",
            code: "AB-12",
            id: 0,
        };

    }

    displayMessage(msg: Message) {
        var s = sprintf("<p>%1$s (%2$s) %3$s</p>", msg.id, msg.code, msg.message);

        $("#messages").append(s);
    }

    setDefaults(): void {

    }
}

let app = new App();
app.run();