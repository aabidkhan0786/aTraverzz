import React from 'react'
// import moduleName from './Head'
// import { Grid, CssBaseline} from "@material-ui/core"
import Header from './components/Header/Header'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import PlaceList from './components/PlaceList/PlaceList'
import Maps from './components/Maps/Maps'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div class="row">
                    <div className="col-lg-4 col-12"><PlaceDetails/></div>
                    <div className="col-lg-8 col-12">col-8</div>
                </div>
            </div>
        </>
    )
}

export default App
