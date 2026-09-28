import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../cartSlice';

export default function CartScreen({ navigation }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = items.reduce(
    (sum, item) => sum + item.quantity * 100000,
    0
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>
        Giỏ hàng
      </Text>

      <Text>Số lượng: {totalQuantity}</Text>

      {items.map(item => (
        <View key={item.bookId}>
          <Text>
            Book {item.bookId} - SL: {item.quantity}
          </Text>

          <Button
            title="Xóa"
            onPress={() =>
              dispatch(removeFromCart(item.bookId))
            }
          />
        </View>
      ))}

      <Text>Tổng tiền: {total}đ</Text>

      <Button
        title="Thanh toán"
        onPress={() =>
          navigation.navigate('Checkout', {
            total,
          })
        }
      />
    </View>
  );
}
