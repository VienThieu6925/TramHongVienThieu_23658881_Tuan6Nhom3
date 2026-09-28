import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const book = {
    id: 1,
    name: 'Đắc Nhân Tâm',
    price: 100000,
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>Home</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BookDetail', {
            bookId: book.id,
          })
        }
        style={{
          padding: 20,
          marginTop: 20,
          backgroundColor: '#eee',
        }}
      >
        <Text>{book.name}</Text>
        <Text>{book.price}đ</Text>
      </TouchableOpacity>
    </View>
  );
}
