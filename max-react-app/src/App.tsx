import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  

  return (
    <>
      <Grid templateAreas={{base: `"nav" "main" `,
        lg:` "nav nav" "main" "footer"
      `}}>
        <GridItem area={'nav'} bg="coral">
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
