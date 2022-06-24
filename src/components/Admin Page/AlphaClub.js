import { Button,Container,InputGroup,Form,FormControl } from "react-bootstrap"

function AlphaClub() {
    return <>
        <Container>
            <Form className="mt-5">
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Upload image"
              
            />
            <Button variant="success">
              Upload
            </Button>
            </InputGroup>
             <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
            <Button variant="success" className=' w-100'>
              Add 
            </Button>
                </Form>
        </Container>
    </>
}

export default AlphaClub