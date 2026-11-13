import {Server} from 'socket.io';
export const connectTosocket=(server)=>{
    const io=new Server(server);
    return io;
}

export default connectTosocket;
