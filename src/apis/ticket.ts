import axios from 'axios';
import { getAccessToken } from '../utils/token';

export function getPlayMonitorData() {
  return axios.get('/default/ticket/all', {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}
