import Layout from '../components/layout'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const cardStyle = {
  width: '70%', margin: '2em auto', padding: '2em'
};

export default () => (
  <Layout>
    <Card style={ cardStyle }>
      <CardHeader
        title='About Me'/>
      <CardText>
          React obssessed software developer with. Shortly after completing an intensive coding bootcamp I moved to the Czech Republic and took on lead development responsibilities for a React application in an important £multi-billion project within a year of joining the company.
          <br/>
          <br/>
          I'm looking for an opportunity to use my skills with ReactJS to efficiently create excellent user experiences as part of an agile team.
      </CardText>
    </Card>
    <Card style={ cardStyle }>
      <CardHeader
        title='Projects'/>
      <CardText>

      </CardText>
    </Card>
  </Layout>
);
