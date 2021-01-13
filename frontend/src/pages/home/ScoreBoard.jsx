import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { userInfo, dateInfo } from './info';
import { getSolvedProblem } from '../../store/ApiStore';
import Update from './Update';

const ScoreBoard = (props) => {
    // const [userInfos, setUserInfos] = useState([]);
    const userInfos = userInfo() 
    const dateInfos = dateInfo()
    const [datas, setDatas] = useState([]);
    const [isData, setIsData] = useState(false);

    useEffect(async () => {
        solvedDataRefresh()
    },[]);


    const solvedDataRefresh = async () => {
        try {
            const data = await getSolvedProblem();
            const dataArr = []
            dateInfos.forEach((dateInfo) => {
                const solvedArr = new Array(userInfos.length).fill(0);
                data.Items.forEach((solved) => {
                    userInfos.forEach((userInfo, userIndex) => {
                        if (solved.ACM_ID === userInfo.id
                            && new Date(dateInfo.first) <= new Date(solved.SOLVED_DATE)
                            && new Date(solved.SOLVED_DATE) < new Date(dateInfo.second)) { solvedArr[userIndex]++; };
                    })
                })
                console.log(solvedArr)
                dataArr.push(solvedArr)
            });
            setDatas(dataArr)
        } 
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Table responsive = "xl" hover bordered >
                <thead>
                    <tr>
                        <th></th>
                        {userInfos.map((userInfo) => <th userInfo={userInfo}>{userInfo.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                  {
                        Object.keys(datas).map((key, index) => {
                            return(
                                <tr>
                                    <td>{+key+1}주차</td>
                            {Object.keys(datas[key]).map((key2, index) =>{
                                console.log(datas[key][key2])
                                return(
                                        <td key={key2}>{datas[key][key2]}</td>
                                )
                            })}
                            </tr>
                            )
                        })
                     }
                </tbody>
            </Table>
            <div className="button">
                <Update reloadData={solvedDataRefresh}/>
            </div>
        </div>
    );
};
export default ScoreBoard;