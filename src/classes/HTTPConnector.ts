import net from 'net';
import axios from 'axios';

export default class HTTPConnector {
  instance = axios;

  ip = '';
  port = 0;

  constructor(ip: string, port: number) {
    this.ip = ip;
    this.port = port;

    this.instance.create({
      baseURL: port ? `http://${ip}:${port}` : `http://${ip}`
    });
  }

  connect() {}
}
