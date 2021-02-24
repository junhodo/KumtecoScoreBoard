export const userInfo = () => {
    return [
        { name: '김주현', id: 'darkraykim' },
        { name: '김정환', id: 'asdfg32145' },
        { name: '김해준', id: 'dubu4050' },
        { name: '노현지', id: 'hyunji0819' },
        { name: '도준호', id: 'djh20' },
        { name: '민무길', id: 'alsanrlf' },
        { name: '양현모', id: 'kyhm1519' },
        { name: '이지우', id: 'juejue' },
        { name: '이지훈', id: 'leejihun' },
        { name: '지명근', id: 'dldhk97' },
        // { name:'손우진', id:'lre12'},
    ];
};


export const dateInfo = () => {
    const data = [];
    const nowDate = new Date();
    let firstDate = new Date('2020/12/28');
    let secondDate = new Date('2021/01/03');
    while (firstDate <= nowDate) {
        const date = {
            first: `${1900 + firstDate.getYear()}/${1 + firstDate.getMonth()}/${firstDate.getDate()}`,
            second: `${1900 + secondDate.getYear()}/${1 + secondDate.getMonth()}/${secondDate.getDate()}`,
        }
        firstDate.setDate(firstDate.getDate() + 7);
        secondDate.setDate(secondDate.getDate() + 7);
        data.push(date);
    }

    // const data = [
    //     { first: '2020/12/28', second: '2021/01/03'},
    //     { first: '2021/01/04', second: '2021/01/10'},
    //     { first: '2021/01/11', second: '2021/01/17'},
    //     { first: '2021/01/18', second: '2021/01/24'},
    //     { first: '2021/01/25', second: '2021/01/31'},
    //     { first: '2021/02/01', second: '2021/02/07'},
    //     { first: '2021/02/08', second: '2021/02/14'},
    // ];

    return data;
};