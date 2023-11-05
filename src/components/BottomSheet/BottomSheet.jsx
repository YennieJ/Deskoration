import React from 'react';
import GradientButton from '../GradientButton/GradientButton';

import * as S from './BottomSheet.styled';

const BottomSheet = ({ isBottomSheet, hadleBottomSheet, editFn, deleteFn }) => {
    return (
        <S.BottomSheetContainer
            onClick={hadleBottomSheet}
            $isBottomSheet={isBottomSheet}
        >
            <S.BottomSheetBox $isBottomSheet={isBottomSheet}>
                <GradientButton
                    gra={'true'}
                    width={'90%'}
                    padding={'20px'}
                    onClick={editFn}
                >
                    수정
                </GradientButton>
                <GradientButton
                    width={'90%'}
                    padding={'20px'}
                    onClick={deleteFn}
                >
                    삭제
                </GradientButton>
            </S.BottomSheetBox>
        </S.BottomSheetContainer>
    );
};

export default BottomSheet;
