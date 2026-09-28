import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../authSlice';

export default function AccountScreen() {
  const { isLoggedIn, user } = useSelector(
    state => state.auth
  );

  const dispatch = useDispatch();

  if (!isLoggedIn) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Chưa đăng nhập</Text>

        <Button
          title="Đăng nhập"
          onPress={() => dispatch(login())}
        />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Tài khoản</Text>
      <Text>Xin chào {user.name}</Text>

      <Button
        title="Đăng xuất"
        onPress={() => dispatch(logout())}
      />
    </View>
  );
}
