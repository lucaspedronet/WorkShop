import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      padding: 24,
      backgroundColor: '#131016'
    }}>
      <Text key={1} style={{
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#FDFCFE',
        fontWeight: 'bold',
      }}>
        Nome do evento
      </Text>

      <Text key={2} style={{
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#6B6B6B',
      }}>
        Sexta, 4 de Novembro de 2022.
      </Text>
    </View>
  );
}