import { server } from "./server";
import cluster from 'node:cluster';
import os from 'node:os';
const Server = new server().app;
const PORT = 4001;

if (cluster.isMaster) {
    let noOfCpus = os.cpus().length;
    console.log(`muster process is running at ${process.pid}`);
    for (let i = 0; i < noOfCpus; i++) {
        cluster.fork();
    }
    cluster.on('exit', () => {
        console.log("One worker Destroyed");

        cluster.fork();
    })
} else {
    Server.listen(PORT, function () {
        console.log(`App is runnig at port ${PORT}...`);
    })
}
