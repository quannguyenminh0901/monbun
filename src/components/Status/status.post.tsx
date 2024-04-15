'use client'

import { Container, Row, Col } from "react-bootstrap";
import StatusContent from "./status.content";


const StatusPost = ({ data }: { data: any }) => {
    return (
        <Container fluid="md">
            <Row>
                <Col
                    className="
                        flex justify-center my-3 bg-pink-300 text-neutral-100 rounded-lg py-3">
                    Enjoy The Moment ! ... ~
                </Col>
                <StatusContent b={data?.sort((a: any, b: any) => b.id - a.id)} />
            </Row>
        </Container>
    )
}
export default StatusPost;