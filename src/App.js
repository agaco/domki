import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import store from './store';
import Main from './Pages/Main';
import Listing from './Pages/Listing';
import SingleItem from './Pages/SingleItem';
const { Content } = Layout;




function App() {
  return (
   <Router>
     <Provider store={store}>
       <Layout>
         <Content>
           <Switch>
             <Route path='/list' component={Listing} />
             <Route exact path='/' component={Main} />
             <Route exact path='/house/:id'>
               <SingleItem/>
             </Route>
           </Switch>
       </Content>
       </Layout>
     </Provider>
   </Router>

  );
}

export default App;
