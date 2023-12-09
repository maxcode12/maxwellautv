import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  

  return (
    <>
      <Grid templateAreas={{base: `"nav" "main" `,
        lg:` "header header" "main main" "footer footer"
      `}}>
        <GridItem area={'header'} bg="coral">
          Header Nav
        </GridItem>
        <GridItem area={'main'} bg="red">
          Main Contents
        </GridItem>
        <Show above ="lg"> 
          <GridItem area={'footer'} bg="blue">
            Footer
          </GridItem>
        </Show>
      </Grid>
    </>
  )
}

export default App
