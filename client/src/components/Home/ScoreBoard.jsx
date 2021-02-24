import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import { userInfo, dateInfo } from './info';
import { getSolvedProblem } from '../../store/ApiStore';
import Update from './Update';

const ScoreBoard = () => {
    const userData = userInfo()
    const dateInfos = dateInfo()
    const [solved, setsolved] = useState([]);

    useEffect(async () => {
        solvedDataRefresh()
    }, []);


    const solvedDataRefresh = async () => {
        try {
            const data = await getSolvedProblem();
            const dataArr = []
            dateInfos.forEach((dateInfo) => {
                const solvedArr = new Array(userData.length).fill(0);
                data.Items.forEach((solved) => {
                    userData.forEach((userInfo, userIndex) => {
                        if (solved.ACM_ID === userInfo.id
                            && new Date(dateInfo.first) <= new Date(solved.SOLVED_DATE)
                            && new Date(solved.SOLVED_DATE) <= new Date(dateInfo.second)) { solvedArr[userIndex]++; };
                    })
                })
                dataArr.push(solvedArr)
            });
            setsolved(dataArr)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="board">
            <Table responsive="xl" hover bordered >
                <thead>
                    <tr>
                        <th keys="blank"></th>
                        {userData.map((e) =>
                            <th keys={e.name} className="table-head">
                                <a href={`https://www.acmicpc.net/user/${e.id}`} target="_blank">{e.name}</a>
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        solved.length ?
                            Object.keys(solved).map((el, index) => {
                                return (
                                    <tr>
                                        <td keys={`${+index + 1}주차`}>{+index + 1}주차</td>
                                        {Object.keys(solved[el]).map((e) => {
                                            return (
                                                solved[el][e] < 1 ?
                                                    <td keys={+el + 1 + e}>{solved[el][e]} / 10<ProgressBar></ProgressBar></td>
                                                    : (solved[el][e] < 4 ?
                                                        <td keys={+el + 1 + e} className="danger">{solved[el][e]} / 10<ProgressBar animated variant="danger" now={solved[el][e] * 10}></ProgressBar></td>
                                                        : (solved[el][e] < 7 ?
                                                            <td keys={+el + 1 + e} className="yet">{solved[el][e]} / 10<ProgressBar variant="warning" now={solved[el][e] * 10}></ProgressBar></td>
                                                            : (solved[el][e] < 10 ?
                                                                <td keys={+el + 1 + e} className="yet">{solved[el][e]} / 10<ProgressBar variant="success" now={solved[el][e] * 10}></ProgressBar></td>
                                                                : (
                                                                    <td keys={+el + 1 + e} className="solved">{solved[el][e]} / 10<ProgressBar animated variant="success" now={solved[el][e] * 10}></ProgressBar></td>
                                                                )
                                                            )
                                                        )
                                                    )
                                            )
                                        })}
                                    </tr>
                                )
                            })
                            :
                            <div className="spinner">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                    }
                </tbody>
            </Table>
            <div className="button">
                <Update reloadData={solvedDataRefresh} />
            </div>
        </div>
    );
};
export default ScoreBoard;