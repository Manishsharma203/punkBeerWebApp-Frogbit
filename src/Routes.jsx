import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Favourites from './components/Favourites'

export default function Routes() {
    return (
        <div>
            <Switch>
               <Route exact path='/' render={()=><Dashboard/>}/>
               <Route exact path='/favourites' render={()=><Favourites/>}/>
            </Switch>
        </div>
    )
}
