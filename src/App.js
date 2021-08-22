import React from 'react'
// import moduleName from './Head'
import { Grid, CssBaseline} from "@material-ui/core"
import Header from './components/Header/Header'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import PlaceList from './components/PlaceList/PlaceList'
import Maps from './components/Maps/Maps'

const App = () => {
    return (
        <>
            <CssBaseline/>
                <Header/>
            <Grid container spacing ={3} style={{"width":"100%"}}>
                <Grid item xs={12} md={4}>
                    <PlaceList/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Maps/>
                </Grid>
            </Grid>
        </>
    )
}

export default App
