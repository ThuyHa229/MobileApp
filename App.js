import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BlockHome1 from './screens/BlockHome1';
import BlockHome2 from './screens/BlockHome2';
import BlockHome3 from './screens/BlockHome3';

export default function App() {
  return (
   <>
    {/* <BlockHome1></BlockHome1> */}
    {/* <BlockHome2></BlockHome2> */}
    <BlockHome3></BlockHome3>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
