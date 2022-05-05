import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
 import LoginCadastro from './screens/LoginCadastro';
 import Cadastro from './screens/Cadastro';
 import Login from './screens/Login';
 import Home from './screens/Home';
 import Sobre from './screens/Sobre';
 import HumorDiario from './screens/HumorDiario';
 import PlanosDiarios from './screens/PlanosDiarios';
 import Diario from './screens/Diario';
 import HDiarioRegistros from './screens/HDiarioRegistros';
 import PDiarioRegistros from './screens/PDiarioRegistros';
 import Diario1 from './screens/Diario1';


 const Stack = createNativeStackNavigator();
 
 function App() {
     return (
     <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen options={{headerShown: false}} name='LoginCadastro' component={LoginCadastro} />
         <Stack.Screen options={{headerShown: false}} name='Cadastro' component={Cadastro} />        
         <Stack.Screen options={{headerShown: false}} name='Login' component={Login} />       
         <Stack.Screen options={{headerShown: false}} name='Home' component={Home} />  
         <Stack.Screen options={{headerShown: false}} name='Sobre' component={Sobre} /> 
         <Stack.Screen options={{headerShown: false}} name='HumorDiario' component={HumorDiario} /> 
         <Stack.Screen options={{headerShown: false}} name='PlanosDiarios' component={PlanosDiarios} />  
         <Stack.Screen options={{headerShown: false}} name='Diario' component={Diario} />
         <Stack.Screen options={{headerShown: false}} name='HDiarioRegistros' component={HDiarioRegistros} />
         <Stack.Screen options={{headerShown: false}} name='PDiarioRegistros' component={PDiarioRegistros} />
         <Stack.Screen options={{headerShown: false}} name='Diario1' component={Diario1} />

         </Stack.Navigator>
     </NavigationContainer>
     );
 }
 
 export default App;