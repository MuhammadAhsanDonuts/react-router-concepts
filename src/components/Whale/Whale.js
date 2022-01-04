import React from 'react'
import Beluga from './Beluga'
import Blue from './Blue'
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { Route, Switch } from 'react-router-dom'
 
const Whale = () => {
//Accessing Route data with hooks - 
  // const {type} = useParams(); 
  //we are directly pulling out the type param from URL parameters. 

  const {path} = useRouteMatch(); 
  //we are getting the currect path with the useRouteMatch Hook - 
    return (
      <>
      <h2>Whale</h2>
  
  {/* //They were accssting route data with hooks -  */}
  {/* matching them here to check if any child component matches, render it to the screen -  */}
      {/* {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />} */}



      {/* Nesting Routes -- */}
    <Switch>
      <Route path={`${path}/beluga`}>
          <Beluga />
      </Route>
      <Route path={`${path}/blue`}>
          <Blue />
      </Route>
    </Switch>


      </>
    )
}

export default Whale