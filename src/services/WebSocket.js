import SockJS from "sockjs-client";
import {over} from "@stomp/stompjs";
import {addNotification} from "../actions/notifications";
import ErrorIcon from "@material-ui/icons/Error";
import SuccessIcon from "@material-ui/icons/Send";
import Notification from "../entities/Notification";

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
     * @type {null}
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

            this.stompClient.subscribe('/topic/emails', (msg) => {
                const response = JSON.parse(msg.body);

                const success = response.success || false;

                const color = success ? "success" : "danger";
                const icon = success ? SuccessIcon : ErrorIcon;
                const message = response.message || "No message returned";

                //todo: add the email to the list
                this.store.dispatch(addNotification(message, color, icon, Notification.DEFAULT_PLACEMENT, 15));
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

