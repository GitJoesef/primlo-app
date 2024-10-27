import { ISafeAreaComponentProps } from '@/@types/components.types';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaComponent = ({
  children,
  altClassName,
}: ISafeAreaComponentProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`flex w-full bg-white ${altClassName}`}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaComponent;
