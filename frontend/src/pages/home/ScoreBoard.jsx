import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { userInfo, dateInfo } from './info';
import { getSolvedProblem } from '../../store/ApiStore';

const ScoreBoard = (props) => {
    const [userInfos, setUserInfos] = useState([]);
    const [dateInfos, setDateInfos] = useState([]);
    const [datas, setDatas] = useState([]);
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        setUserInfos(userInfo());
        setDateInfos(dateInfo());
    },[]);

    useEffect(() => {
        solvedDataRefresh();
    },[userInfos, dateInfos]);

    const setLoadingTime = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000))
    };

    const solvedDataRefresh = async () => {
        try {
            const data = await getSolvedProblem();
            await dateInfos.forEach((dateInfo) => {
                const solvedArr = new Array(userInfos.length).fill(0);
                data.Items.forEach((solved) => {
                    userInfos.forEach((userInfo, userIndex) => {
                        if (solved.ACM_ID === userInfo.id
                            && new Date(dateInfo.first) <= new Date(solved.SOLVED_DATE)
                            && new Date(solved.SOLVED_DATE) < new Date(dateInfo.second)) { solvedArr[userIndex]++; };
                    })
                })
                data.push(solvedArr)
            });z

            setLoadingTime().then(() => {
                if (data.length !== 0) {
                    setDatas(data);
                    setIsData(true);
                    console.log(datas);
                }
            });
        } 
        catch (err) {
            console.log(err);
        }
    }

    const logDatas = () => {
        solvedDataRefresh();
        console.log(props.solvedData);
        console.log(props.solvedData.Items);
        console.log(props.solvedData.Count);
        console.log(datas);
        console.log(datas[0]);
    }


    return (
        <div>
            <button onClick={logDatas}>aaaa</button>
            <Table responsive = "xl" hover bordered >
                <thead>
                    <tr>
                        <th></th>
                        {userInfos.map((userInfo) => <th userInfo={userInfo}>{userInfo.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {isData ?
                        <>
                            {datas.map((e,i) => {
                                <tr>
                                    {e.map((el) => <td el={el}>{el}</td>)}
                                </tr>
                            })}
                        </>
                        :
                        <>no</>
                    }
                </tbody>
            </Table>
        </div>
    );
};
export default ScoreBoard;