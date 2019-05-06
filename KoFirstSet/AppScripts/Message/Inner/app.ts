import { Message } from "../message";

export class App {
    static counter: number = 2;

    run(): void {
        $("#send").click(this.onSend);
    }

    onSend = () => {
        let message = $("#message").val();
        let code = $("#code").val();
        this.sendMessage(message, code);
    }

    sendMessage(message: string, code: string): void {
        let msg: Message = {
            message: message,
            code: code,
            id: App.counter++,
        };
    }
}

let app = new App();
app.run();

