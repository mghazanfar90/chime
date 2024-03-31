import React, { useCallback, useMemo, useRef } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const GenericBottomSheet: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    bottomSheetRef.current?.close();
  };

  const snapPoints = useMemo(() => [230, "50%", "75%"], []);


	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	const renderBackdrop = useCallback(
		(props:any) => (
			<BottomSheetBackdrop
				{...props}
        pressBehavior={'none'}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[]
	);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{backgroundColor: '#ffffff'}}
      enableDynamicSizing
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.content}>{children}</View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    marginBottom: 16,
  },
});

export default GenericBottomSheet;
