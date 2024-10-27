import { StyleSheet } from 'react-native';

export function fontStyle(fontWeight?: number) {
  const selectedFontFamily =
    {
      '400': 'BricolageGrotesqueRegular',
      '500': 'BricolageGrotesqueMedium',
      '600': 'BricolageGrotesqueSemiBold',
      '700': 'BricolageGrotesqueBold',
      '800': 'BricolageGrotesqueExtraBold',
    }[fontWeight || '400'] ?? 'BricolageGrotesque';

  return StyleSheet.create({
    textFont: {
      fontFamily: selectedFontFamily,
    },
  });
}
