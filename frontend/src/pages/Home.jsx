import React from 'react';
import Table from 'react-bootstrap/Table';


const Home = () => {
    const tableHeads = [
        { name:'김주현', id:'darkraykim' },
        { name:'김정환', id:'asdfg32145' },
        { name:'김해준', id:'dubu4050' },
        { name:'노현지', id:'hyunji0819'},
        { name:'도준호', id:'djh20'},
        { name:'민무길', id:'alsanrlf'},
        { name:'손우진', id:'lre12'},
        { name:'양현모', id:'kyhm1519'},
        { name:'이지우', id:'juejue'},
        { name:'이지훈', id:'leejihun'},
        { name:'지명근', id:'dldhk97'}
    ];

    return (
        <div className="container px-3">
        <br/>
        <h2>백준 스코어보드</h2>
        <br/>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        { tableHeads.map((tableHead) => (
                            <th tableHead={tableHead}>{tableHead.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 11 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 11 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 11 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
export default Home;