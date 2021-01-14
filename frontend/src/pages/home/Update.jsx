import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { updateSolvedProblem } from '../../store/ApiStore';

const Update = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);
    const reloadData = props.reloadData;
    
    useEffect(() => {
        handleLoading();
    }, []);

    const setLoadingTime = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000))
    };

    const handleClick = async () => {
        await setIsLoading(true);
        await setIsSuccess(false);
        await setIsFail(false);
        const res = await updateSolvedProblem();
        await setIsLoading(false);
        if(res === "SUCCESS") {
            setIsSuccess(true);
            reloadData()
        }
        else {
            setIsFail(true);
        }
    };

    const handleLoading = () => {
        if (isLoading) {
            setLoadingTime().then(() => {setIsLoading(false);});
        }
    }

    return (
        <>
            <Button
                variant="danger"
                className="button"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : '갱신'}
            </Button>
        <br/><br/>
            <Alert 
                variant="success"
                show={isSuccess ? true : false}
            >
                갱신 성공!
            </Alert>
            <Alert 
                variant="danger"
                show={isFail ? true : false}
            >
                갱신 실패!
            </Alert>
        <br/><br/>
        </>
    );
};
export default Update;