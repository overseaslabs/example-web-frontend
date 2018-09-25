import SockJS from "sockjs-client";
import {over} from "@stomp/stompjs";
import {addNotification} from "../actions/notifications";
import ErrorIcon from "@material-ui/icons/Error";
import SuccessIcon from "@material-ui/icons/Send";
import Notification from "../entities/Notification";
import {fetchEmails} from "../actions/mailer/api";

/**
 * The service responsible for websocket communications
 */
class WebSocket {
    /**
     * The WS endpoint
     */
    endpoint = "";

    connected = false;

    stompClient = null;

    /**
     * Redux store
     */
    store = null;

    constructor(endpoint, store) {
        this.endpoint = endpoint;
        this.store = store;
    }

    connect() {
        if (this.connected) {
            throw new Error("Already connected");
        }

        if (this.endpoint === "") {
            throw new Error("Endpoint is not defined");
        }

        const socket = new SockJS(this.endpoint);
        this.stompClient = over(socket);
        this.stompClient.connect({}, (frame) => {
            this.connected = true;

            this.stompClient.subscribe('/topic/mailer', (msg) => {
                //new message from the mailer
                //show a notification
                const response = JSON.parse(msg.body);
                const success = response.success || false;

                const color = success ? "success" : "danger";
                const icon = success ? SuccessIcon : ErrorIcon;
                const message = response.message || "No message returned";

                this.store.dispatch(addNotification(message, color, icon, Notification.DEFAULT_PLACEMENT, 15));

                const {number, size} = this.store.getState().entities.emails;

                this.store.dispatch(fetchEmails(number, size));

            });
        });
    }

    disconnect() {
        if (!this.connected) {
            throw new Error("Already disconnected");
        }

        this.stompClient.disconnect();
        this.connected = false;
    }
}

export default WebSocket;

