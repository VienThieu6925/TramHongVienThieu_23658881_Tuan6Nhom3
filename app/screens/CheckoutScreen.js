import { View, Text } from 'react-native';

export default function CheckoutScreen({ route }) {
  const { total } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>
        Thanh toán
      </Text>

      <Text>Tổng tiền: {total}đ</Text>
    </View>
  );
}
