import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}) {
  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <View style={{
      flexDirection: 'row',
      height: 60,
      backgroundColor: 'white',
    }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{
              color: focused ? 'blue' : 'gray',
            }}>
              {route.name === 'Home' && 'Trang chủ'}
              {route.name === 'Category' && 'Danh mục'}
              {route.name === 'Cart' && 'Giỏ hàng'}
              {route.name === 'Account' && 'Tài khoản'}
            </Text>

            {route.name === 'Cart' && total > 0 && (
              <Text style={{
                position: 'absolute',
                top: 2,
                right: 20,
                color: 'red',
              }}>
                {total}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
