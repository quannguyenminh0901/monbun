import Card from 'react-bootstrap/Card'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <Card>
            <Card.Header className={`${style.wrapper}`}>MON & BUN</Card.Header>
            <Card.Body className='mx-auto'>
                <Card.Title className='flex justify-center'>At the moment</Card.Title>
                <Card.Text>
                    If I die or go somewhere far, I{"'"}ll write your name on every star so people looking up can see just how much you meant to me.
                </Card.Text>
            </Card.Body>
            <Card.Footer className={`text-muted ${style.wrapper}`}>LOVER</Card.Footer>
        </Card>
    );
}

export default Footer;