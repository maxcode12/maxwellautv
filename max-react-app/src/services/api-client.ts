import axios from "axios";

export default axios.create(
    {
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'c282b8b492e043d1a0aba93647a22037'
        }
    }
)