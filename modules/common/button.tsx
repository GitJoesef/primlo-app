import { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { PrimaryText } from './primary-text';
import { classNames } from '@/lib/compute';

interface Props {
  title: string;
  onClick?: any;
  capitalizeTitle?: boolean;
  type?: 'primary' | 'secondary' | 'custom';
  disabled?: boolean;
  className?: string;
  altClassName?: string;
  txtClassName?: string;
  btnClassName?: string;
  drawable?: ReactNode;
  drawableSpacing?: string;
  isBusy?: boolean;
  fontWeight?: number;
  fontFamily?: 'quicksand' | 'normal';
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  capitalizeTitle,
  type,
  disabled,
  altClassName,
  txtClassName,
  isBusy,
  btnClassName,
  fontFamily,
  fontWeight,
  drawable,
  drawableSpacing,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onClick ? onClick : undefined}
        className={classNames(
          altClassName ? altClassName : `w-full rounded-[8px] ${btnClassName}`,
          disabled
            ? 'bg-[#8791F6]'
            : type === 'primary'
              ? 'bg-[#0065FF]'
              : type === 'secondary'
                ? 'bg-[#F5F6F7]'
                : ''
        )}
        disabled={disabled || isBusy}
      >
        {isBusy ? (
          <View className="flex justify-center items-center py-2">
            <ActivityIndicator color="#FFFFFF" />
          </View>
        ) : (
          <View className="flex-row items-center justify-center py-2">
            {drawable && drawable}
            <View
              className={
                drawable ? (drawableSpacing ? drawableSpacing : 'ml-4') : ''
              }
            >
              <PrimaryText
                fontFamily={fontFamily}
                fontWeight={fontWeight ? fontWeight : 700}
                altClassName={
                  disabled
                    ? `text-base ${txtClassName} text-[#FFFFFF]`
                    : txtClassName
                      ? `${txtClassName}`
                      : `text-sm text-white`
                }
              >
                {capitalizeTitle ? title.toUpperCase() : title}
              </PrimaryText>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
