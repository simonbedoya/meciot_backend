import * as socketIO from 'socket.io';
import {Server} from 'http';


export class TableIoService {

    tables: SocketIO.Namespace;

    init(server: Server) {
        let io = socketIO(server);
        this.tables = io.of("socket/tables");
        this.tables.on("connection", (socket) => {

            socket.on("subscribe", (id) => {
                socket.join(id);
            });

            socket.on("unsubscribe", (id) => {
                socket.leave(id);
            });
        });
    }

    changeAvailable(table: number, available: boolean) {
        this.tables.to(id).emit("available",{mesa:table, disponible:available});
    }
}


export const tableIO = new TableIoService();