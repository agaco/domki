import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import store from './store';
import Main from './Pages/Main';
import Listing from './components/Listing';
import Filters from './components/Filters';
const { Content } = Layout;




function App() {
  return (
   <Router>
     <Provider store={store}>
       <Switch>
         {/*<Route path='/news' component={News} />*/}
         {/*<Route path='/users' component={UsersManagement} />*/}
         {/*<Route path='/upload' component={UploadPlan} />*/}
         <Route exact path='/' component={Main} />
       </Switch>

       {/*<Layout>*/}
       {/*  <Content className='main-container'>*/}
       {/*    <Filters/>*/}
       {/*    <TextSection/>*/}
       {/*  </Content>*/}
       {/*</Layout>*/}
     </Provider>
   </Router>

  );
}

export default App;
