import { createAppContainer } from 'react-navigation'
import Router from './Router'


let customFonts = {
    'Roboto': require('./assets/fonts/Roboto/Roboto.ttf'),
    'Roboto_medium': require('./assets/fonts/Roboto/Roboto_medium.ttf'),
    'Open-Sans-Bold': require('./assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
  };
const AppContainer = createAppContainer(Router)

export default AppContainer
