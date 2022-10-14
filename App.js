import { Platform } from 'react-native';
import Ios from './platforms/Ios';
import Android from './platforms/Android';

export default function App() {
  return Platform.OS !== 'ios' ? <Ios /> : <Android />;
}
