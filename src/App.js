import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';


function App() {
  // return (
  //   <div className="App">
  //    <h1> i myself is header </h1>
  //   </div>
  // );

  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  )
}

export {App};
