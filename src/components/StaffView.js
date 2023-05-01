import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './StaffViewStyles.css';
import ProjectCard from './ProjectCard';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { Title } = Typography;

function StaffView() {
  const [staff, setStaff] = useState([]);
  const baseURL = "https://jizzakhps.pythonanywhere.com/staff/";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setStaff(response.data);
    });
  }, [])
  useEffect(() => {
    console.log(staff, typeof staff)
  }, [staff])
  return (
    <Container className="StaffView">
      <div className="administrator">
        <Title className='menu-header-text'><span className='first-letter'>A</span>dministration</Title>
        <div className='spaceX'></div>
        {/* <Row className='Row'> */}
        <div className="set-cards">
        <Row>
        {Object.values(staff).filter((item) => Object.values(item)[4] === 'administrator').map((item)=>(
            <Col className='Col'>
            <ProjectCard
              className='Card-u'
              id={Object.values(item)[0]}
              full_name={Object.values(item)[1]}
              date_of_birth={Object.values(item)[2]}
              phone_number={Object.values(item)[3]}
              role={Object.values(item)[4]}
              desc={Object.values(item)[5]}
              position={Object.values(item)[6]}
              image={Object.values(item)[7]}
            />
            </Col>
          ))}
          </Row>
          </div>
          {/* </Row> */}
      </div>
      <div className="local">
        <Title className='menu-header-text'><span className='first-letter'>L</span>ocal Teachers</Title>
        <div className='spaceX'></div>
        <Row className='Row'>
        {Object.values(staff).filter((item) => Object.values(item)[4] === 'local').map((item)=>(
            <ProjectCard
            id={Object.values(item)[0]}
            full_name={Object.values(item)[1]}
            date_of_birth={Object.values(item)[2]}
            phone_number={Object.values(item)[3]}
            role={Object.values(item)[4]}
            desc={Object.values(item)[5]}
            position={Object.values(item)[6]}
            image={Object.values(item)[7]}
            />
          ))}</Row>
      </div>
      <div className="international">
        <Title className='menu-header-text'><span className='first-letter'>I</span>nternational Teachers</Title>
        <div className='spaceX'></div>
        <Row className='Row'>
        {Object.values(staff).filter((item) => Object.values(item)[4] === 'international').map((item)=>(
            <ProjectCard
            id={Object.values(item)[0]}
            full_name={Object.values(item)[1]}
            date_of_birth={Object.values(item)[2]}
            phone_number={Object.values(item)[3]}
            role={Object.values(item)[4]}
            desc={Object.values(item)[5]}
            position={Object.values(item)[6]}
            image={Object.values(item)[7]}
            />
          ))}</Row>
      </div>
      <div className="Mentors">
        <Title className='menu-header-text'><span className='first-letter'>M</span>entors</Title>
        <div className='spaceX'></div>
        <Row className='Row'>
        {Object.values(staff).filter((item) => Object.values(item)[4] === 'mentor').map((item)=>(
            <ProjectCard
            id={Object.values(item)[0]}
            full_name={Object.values(item)[1]}
            date_of_birth={Object.values(item)[2]}
            phone_number={Object.values(item)[3]}
            role={Object.values(item)[4]}
            desc={Object.values(item)[5]}
            position={Object.values(item)[6]}
            image={Object.values(item)[7]}
            />
          ))}</Row>
      </div>
      <div className="technical">
        <Title className='menu-header-text'><span className='first-letter'>T</span>echnical Staff</Title>
        <div className='spaceX'></div>
        <Row className='Row'>
        {Object.values(staff).filter((item) => Object.values(item)[4] === 'technical').map((item)=>(
            <ProjectCard
              id={Object.values(item)[0]}
              full_name={Object.values(item)[1]}
              date_of_birth={Object.values(item)[2]}
              phone_number={Object.values(item)[3]}
              role={Object.values(item)[4]}
              desc={Object.values(item)[5]}
              position={Object.values(item)[6]}
              image={Object.values(item)[7]}
            />
          ))}</Row>
      </div>
    </Container>
  );
}

export default StaffView;