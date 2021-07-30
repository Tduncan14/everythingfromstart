import React from 'react';
import IssueProvider from './context/Issue';
import  Issues from './Issue';

function App() {
  return (
    <IssueProvider url = "https://api.github.com/repos/ContentPI/ContentPI/issues">
      <Issues  />
    </IssueProvider>
  );
}

export default App;
