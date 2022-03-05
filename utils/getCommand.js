export default (command, params = undefined, id = undefined) => { 
    return JSON.stringify({ 
        jsonrpc: "2.0",
        method: command,
        params: params,
        id: id,
    });
}