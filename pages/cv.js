import Layout from '../components/layout';
import marked from 'marked';
import cvText from '../resources/cv.js';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import cardStyle from '../styles/card.js';

export default () => (
  <Layout>
    <Card style={ cardStyle }>
      <CardHeader title={ <span>Also found at <a href='https://github.com/joejknowles/CV'>GitHub</a></span>}/>
      <CardText dangerouslySetInnerHTML={ { __html: marked(cvText) } } />
    </Card>
  </Layout>
);
