import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'



function App() {
  

  return (
    <>
      <Grid templateAreas={{base: `"nav" "main" `,
        lg:` "header header" "aside main"
      `}}>
        <GridItem area={'header'}>
          <NavBar />
        </GridItem>
        <Show above ="lg"> 

          <GridItem area={'aside'} >
          </GridItem>

         </Show>
        
          <GridItem area={'main'}>
            Main content
            </GridItem>
        
      </Grid>
    </>
  )
}

export default App
