import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1a5cc2a4862445a1a10e3d80f7731827'
    }
})