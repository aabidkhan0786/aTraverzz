import React from 'react'
// import moduleName from './Head'
// import { Grid, CssBaseline} from "@material-ui/core"
import Header from './components/Header/Header'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import PlaceList from './components/PlaceList/PlaceList'
import Maps from './components/Maps/Maps'

const App = () => {
    return (
        <>
            <Header />
            {/* <div className="container"> */}
                <div class="row g-0">
                    <div class="col-4 bg-dark">col-4</div>
                    <div class="col-8">col-8</div>
                </div>
            {/* </div> */}
        </>
    )
}

export default App
