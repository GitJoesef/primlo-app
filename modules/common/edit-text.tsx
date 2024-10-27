import { InputModeOptions, TextInput, View } from 'react-native';
import { PrimaryText } from './primary-text';
import { classNames } from '@/lib/compute';
import { fontStyle } from '@/app/styles';

interface EditTextProps {
  title?: string;
  showEndDrawable?: Boolean;
  endDrawable?: React.JSX.Element;
  placeHolder?: string;
  inputMode?: InputModeOptions;
  placeholderColor?: string;
  editTextClassName?: string;
  inputClassName?: string;
  fontWeight?: number;
  editBackgroundClassName?: string;
  textClassName: string;
  errorMessage?: string;
  [key: string]: any;
}

const EditText: React.FC<EditTextProps> = ({
  title,
  placeHolder,
  placeholderColor,
  showEndDrawable = false,
  inputMode,
  editTextClassName,
  textClassName,
  inputClassName,
  editBackgroundClassName,
  fontWeight,
  errorMessage,
  endDrawable,
  ...rest
}) => {
  return (
    <View className={editTextClassName}>
      {title ? (
        <PrimaryText
          fontWeight={400}
          title={title}
          altClassName="text-gray500 text-sm"
        />
      ) : (
        <></>
      )}
      <View
        className={`flex-row w-full items-center pr-2 rounded-[8px] ${editBackgroundClassName}`}
      >
        <TextInput
          {...rest}
          style={fontStyle(fontWeight).textFont}
          placeholder={placeHolder}
          inputMode={inputMode}
          placeholderTextColor={placeholderColor || '#333333CC'}
          selectionColor={'#2F42FA'}
          autoCorrect={false}
          autoCapitalize="none"
          className={classNames(
            title
              ? 'border-b border-[#D0D5DD]'
              : 'bg-[#FFFFFF] p-[10px] text-black text-base',
            `flex-1 ${textClassName} ${inputClassName}`
          )}
        />
        {showEndDrawable ? endDrawable : <></>}
      </View>
      {errorMessage && (
        <PrimaryText fontWeight={500} altClassName="text-stateRed500 mt-1">
          {errorMessage}
        </PrimaryText>
      )}
    </View>
  );
};

export default EditText;
