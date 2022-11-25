const startCoreF = (port) => {
    const promise = new Promise((resolve,reject) => {
    setTimeout((port) => {
        let output = {};
        const path = require('path');
        let reqPath = path.join(__dirname, '../');
        const { fork } = require('child_process');
        output.core = fork(reqPath+'/backend.js', {
            detached: true
        });
        output.core.send({start:true,port:port });
        resolve(output.core);
    }, 2000, port);
    });
    return promise;    
}
const startCoreS = (host,port) => {
    const promise = new Promise((resolve,reject) => {
    setTimeout((host,port) => {
        let output = {};
        const path = require('path');
        let reqPath = path.join(__dirname, '../');
        const { fork } = require('child_process');
        output.core = fork(reqPath+'/modbus-client.js', {
            detached: true
        });
        output.core.send({start:true,host:host,port:port });
        resolve(output.core);
    }, 2000, host,port);
    });
    return promise;    
}
const startNibeGW = (port,listening_port,read_request_port,control_port) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout((port,listening_port,read_request_port,control_port) => {
            let output = {};
            const path = require('path');
            let reqPath = path.join(__dirname, '../');
            const { fork } = require('child_process');
            output.core = fork(reqPath+'/nibegw-client.js', {
                detached: true
            });
            output.core.send({start:true,port:port,listening_port:listening_port,read_request_port:read_request_port,control_port:control_port });
            resolve(output.core);
        }, 2000, port,listening_port,read_request_port,control_port);
        });
        return promise;    
    }
module.exports = {
    startCoreF:startCoreF,
    startCoreS:startCoreS,
    startNibeGW:startNibeGW
}