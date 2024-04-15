import Spinner from 'react-bootstrap/Spinner';

function Spinners() {
    return (
        <div className='flex items-center justify-center my-5 mx-auto'>
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="info" className='mx-2' />
            <Spinner animation="border" variant="info" />
        </div>
    );
}

export default Spinners;