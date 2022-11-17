import { React } from 'react'
import { useNavigate } from 'react-router'
import { Card, CardBody, CardLink, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import { Button } from 'rsuite'
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import Header from '../Header'
import Footer from '../Footer'
import './AboutUs.css'

const AboutUs = () => {
 

  return (
    
    <div className='aboutus-bg'>
    <div className='about-us-container'>
    <div className='about-us'>
        <h1>About Us</h1>
        
            Whatever You Want : Restaurant Tinder Capstone Project <br/>
            Team Members: Ryan Efaw, Liz Ontiveros, Ken Galvin, Liz Villalobos 
        
    </div>

    <h1 className='connect'>We'd love to connect</h1>
    <br/>

<div className='card-container'>
<div className='card-1'>
    <Card
  style={{
    width: '18rem',
    height: '42rem'
  }}
>
  <CardBody className='card-body-1'>
    <CardTitle className='card-title' tag="h5">
      Ryan Efaw
    </CardTitle>
    <CardSubtitle 
      className="mb-2 text-muted"
      tag="h6"
    >
      Software Developer
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={require('../../../images/RE.jpg')}
    width="100%"
  />
  <CardBody className='card-body-2'>
    <CardText className='cardtext'>
    <p >Java | Spring | SQL | React </p> 
    <p>Focused on creative solutions, new perspectives, and developing more than just code.</p>
    </CardText>
    <Button color="blue" appearance="primary" className='linkedin' href='https://www.linkedin.com/in/ryanefaw/'>
      <LinkedinIcon /> LinkedIn
    </Button>
  </CardBody>
</Card>
</div>

<br/>

<div className='card-2'>
<Card
  style={{
    width: '18rem',
    height: '42rem'
  }}
>
  <CardBody className='card-body-1'>
    <CardTitle tag="h5">
      Liz Ontiveros
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Full-Stack Java Developer
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={require('../../../images/LO.jpg')}
    width="100%"
  />
  <CardBody className='card-body-2'>
    <CardText className='cardtext'>
    <p>Community oriented with a passion for service, skilled in communication and problem solving.</p>
    <p></p>
    </CardText>
    <Button color="blue" appearance="primary" className='linkedin' href='https://www.linkedin.com/in/liz-ontiveros/'>
      <LinkedinIcon /> LinkedIn
    </Button>
  </CardBody>
</Card>
</div>

<br/>

<div className='card-3'>
<Card
  style={{
    width: '18rem',
    height: '42rem'
  }}
>
  <CardBody className='card-body-1'>
    <CardTitle tag="h5">
      Ken Galvin
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Full Stack Developer
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={require('../../../images/KG.jpg')}
    width="100%"
  />
  <CardBody className='card-body-2'>
    <CardText className='cardtext'>
    Turning my passion into a career
    </CardText>
    <Button color="blue" appearance="primary" className='linkedin' href='https://www.linkedin.com/in/kendrickgalvin/'>
      <LinkedinIcon /> LinkedIn
    </Button>
  </CardBody>
</Card>
</div>
<br/>

<div className='card-4'>
<Card
  style={{
    width: '18rem',
    height: '42rem'
  }}
>
  <CardBody className='card-body-1'>
    <CardTitle tag="h5">
      Lizbeth Villalobos
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Full Stack Developer
    </CardSubtitle>
  </CardBody>
  <img className='card-img'
    alt="Card cap"
    src={require('../../../images/LV.jpg')}
    width="100%"
  />
  <CardBody className='card-body-2'>
    <CardText className='cardtext'>
    Java | Spring | React | HTML | CSS | JavaScript
    </CardText>
    <Button color="blue" appearance="primary" className='linkedin' href='https://www.linkedin.com/in/lizbeth-villalobos05/'>
      <LinkedinIcon /> LinkedIn
    </Button>
  </CardBody>
</Card>

</div>

</div>
</div>
</div>

  
  );
};
export default  AboutUs;
