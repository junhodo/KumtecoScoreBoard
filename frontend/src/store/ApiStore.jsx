import axios from 'axios';

export const getSolvedProblem = async () => {
    const api = "https://dqrv3p49bh.execute-api.us-east-2.amazonaws.com/default/kumteco_scoreboard_read_all";
    const result = await axios.get(api)
        .catch(error => {return error.response})
        .then(res => {
            console.log(res.data);
            return res.data;
        });
    return result;
}

export const updateSolvedProblem = async () => {
    const api = "https://dqrv3p49bh.execute-api.us-east-2.amazonaws.com/default/kumteco_scoreboard_update";
    const result = await axios.get(api, {
        timeout: 180000,
    }).catch(error => {return error.response})
        .then(res => {
            console.log(res.data);
            return res.data;
        });
    return result; 
}