import HEAD from 'next/head';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import '../lib/tapEvents.js';

export default ({ children }) => (
  <div>
    <HEAD>
      <link rel='stylesheet' href='static/app.css' />
    </HEAD>
    <MuiThemeProvider>
      <div>
        <AppBar
          title='Joe Knowles'
          showMenuIconButton={ false }/>
        <main>
          { children }
        </main>
      </div>
    </MuiThemeProvider>
  </div>
);
