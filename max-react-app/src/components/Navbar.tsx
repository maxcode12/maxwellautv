import { HStack , Image} from "@chakra-ui/react"
import logo from "../assets/ma-logo.png"
const NavBar = () => {
  return (
    <>
    <HStack padding='10px'>
      <Image src={logo} boxSize={50}/>
      
    </HStack>
    
    </>
  )
}

export default NavBar