import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image, Stack, Heading, Text, Divider, CardBody, CardFooter } from '@chakra-ui/react'
import Col from 'react-bootstrap/Col';
import './StaffViewStyles.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ProjectCard({id, full_name, date_of_birth, phone_number, role, desc, position, image}) {
  return (
        <Col className="Col">
        <Card maxW='sm' className='card-content'>
          <CardBody>
            <Image
              src={`https://jizzakhps.pythonanywhere.com${image}`}
              alt='Teacher'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{full_name}</Heading>
              <Text>Born in {date_of_birth}</Text>
              <Text>{desc}</Text>
              <Divider />
              <Text><LocalPhoneIcon/>Contact Number: {phone_number}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Text color='blue.600' fontSize='2xl'>
                {position}
            </Text>
          </CardFooter>
        </Card>
        </Col>
  );
}

export default ProjectCard;
