import Accordion from 'react-bootstrap/Accordion';
export default function Itemlist() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> Heading 1</Accordion.Header>
                <Accordion.Body>
                    content 1
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> Heading 2</Accordion.Header>
                <Accordion.Body>
                    content 2
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> Heading 3</Accordion.Header>
                <Accordion.Body>
                    content 3
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header> Heading 4</Accordion.Header>
                <Accordion.Body>
                    content 4
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
