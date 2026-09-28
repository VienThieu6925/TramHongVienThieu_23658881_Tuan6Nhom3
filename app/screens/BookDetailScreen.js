import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

export default function BookDetailScreen({ route }) {
  const { bookId } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>
        Chi tiết sách
      </Text>

      <Text>Book ID: {bookId}</Text>

      <Button
        title="Thêm vào giỏ"
        onPress={() => dispatch(addToCart(bookId))}
      />
    </View>
  );
}
