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
        // { name: '손우진', id: 'lre12' },
    ];
};


export const dateInfo = () => {
    const data = [];
    const nowDate = new Date();
    const firstDate = new Date('2020/12/28');
    const secondDate = new Date('2021/01/03');
    while (firstDate <= nowDate) {
        const date = {
            first: `${1900 + firstDate.getYear()}/${1 + firstDate.getMonth()}/${firstDate.getDate()}`,
            second: `${1900 + secondDate.getYear()}/${1 + secondDate.getMonth()}/${secondDate.getDate()}`,
        }
        firstDate.setDate(firstDate.getDate() + 7);
        secondDate.setDate(secondDate.getDate() + 7);
        data.push(date);
    }

    return data;
};