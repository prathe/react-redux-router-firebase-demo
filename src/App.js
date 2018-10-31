import React from 'react';
import './App.css';
import Layout from "./layouts/Default";
import RoutedViews from "./views/RoutedViews";

const App = () => {
  return (
    <Layout>
      <RoutedViews />
    </Layout>
  );
};

export default App;
