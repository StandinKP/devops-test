import axios from 'axios';

export const FLASK_URL = import.meta.env.VITE_FLASK_URL;
export const NODE_URL = import.meta.env.VITE_NODE_URL;
export const GO_URL = import.meta.env.VITE_GO_URL;
if (!FLASK_URL || !NODE_URL || !GO_URL) {
  throw new Error('Missing environment variables');
}
export const api = axios.create();
