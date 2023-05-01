import 'bootstrap/dist/css/bootstrap.min.css';
import './StaffViewStyles.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectCard({id, full_name, date_of_birth, phone_number, role, desc, position, image}) {
  return (
    <Card className='card-i' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://jizzakhps.pythonanywhere.com${image}`} />
      <Card.Body>
        <Card.Title>{full_name}</Card.Title>
        {/* <Card.Text>
          {desc}
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>{position}</b></ListGroup.Item>
        <ListGroup.Item>Born in {date_of_birth}</ListGroup.Item>
        <ListGroup.Item><LocalPhoneIcon/>Contact Number: <br/><b>{phone_number}</b></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link id='link-special' href="#">#staff</Card.Link>
        <Card.Link id='link-special' href="#">#{role}</Card.Link>
        <Card.Link id='link-special' href="#">#{position}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
