import { fontStyle } from '@/app/styles';
import { classNames } from '@/lib/compute';
import { Text } from 'react-native';

interface TextProps {
  title?: string;
  altClassName: string;
  fontFamily?: 'quicksand' | 'normal';
  fontWeight?: number;
  [key: string]: any;
}

export const PrimaryText: React.FC<TextProps> = ({
  title,
  altClassName,
  children,
  fontFamily,
  fontWeight,
  ...rest
}) => {
  return (
    <Text
      style={fontStyle(fontWeight).textFont}
      className={classNames(altClassName ? altClassName : 'text-sm')}
      {...rest}
    >
      {title}
      {children}
    </Text>
  );
};
