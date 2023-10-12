import axios from 'axios';

export const FLASK_URL = 'http://localhost:8000/flask';
export const NODE_URL = 'http://localhost:8001/node';
export const GO_URL = 'http://localhost:8002/go';
export const api = axios.create();
