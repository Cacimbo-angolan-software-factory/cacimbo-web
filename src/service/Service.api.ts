import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cacimboweb.com/api/',
});

const apiCacimbo = axios.create({
  baseURL: 'http://cacimboerp.cacimboweb.com/api/',
});

const apiCreate = axios.create({
  baseURL: 'https://license-cacimbo-app.herokuapp.com/v1/',
});
const baseUrlGetNif = axios.create({
  baseURL: 'https://cacimboweb.com/consultarNif/',
});
export { api, apiCreate, baseUrlGetNif, apiCacimbo };
