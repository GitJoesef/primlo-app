import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SafeAreaComponent from '../safe-area-component';
import { TAppLayoutProps } from '@/@types/components.types';

const AppLayout = ({
  children,
  altClassName,
  childrenContainerClassName,
}: TAppLayoutProps) => {
  return (
    <SafeAreaComponent altClassName={`flex-1 bg-WHITE_00 ${altClassName}`}>
      <StatusBar style="dark" />
      <View className={`flex-1 ${childrenContainerClassName}`}>{children}</View>
    </SafeAreaComponent>
  );
};

export default AppLayout;
