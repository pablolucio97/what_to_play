import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Library from '../pages/Library'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/library' component={Library}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes