import Layout from '../components/layout'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import cardStyle from '../styles/card.js';


export default () => (
  <Layout>
    <Card style={ cardStyle }>
      <CardHeader
        title='About Me'/>
      <CardText>
          A React obssessed software developer focussed on clean code, with a portfolio of side projects to prove it. After completing an intensive coding bootcamp I moved to the Czech Republic and took on lead development responsibilities for a React application in an important multi-billion pound wealth-management platform within a year of joining the company.
          <br/>
          <br/>
          I'm looking for an opportunity to use my skills with ReactJS to efficiently create excellent user experiences as part of an agile team.
      </CardText>
    </Card>
    <Card style={ cardStyle }>
      <CardHeader
        title='Find Out More'/>
      <CardText>
        <ul>
          <li>
            <a href="mailto:joejknowles@gmail.com?Subject=I%20saw%20your%20website" target="_top">joejknowles@gmail.com</a>
          </li>
        </ul>
      </CardText>
    </Card>
  </Layout>
);
