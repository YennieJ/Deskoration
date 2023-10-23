import { useState } from 'react';
import * as S from './RegisterForm.styled';

export const RegisterForm = ({
    setShowRegisterForm,
    items,
    setItems,
    data,
    setData,
    offset,
    displayStyle,
}) => {
    // submit 함수
    const dataSubmit = event => {
        event.preventDefault();
        if (items.length < 5) {
            const newData = {
                ...data,
                id: items.length,
                location: offset,
            };
            setItems(prev => [...prev, newData]);
            setShowRegisterForm(false);
            setData(prev => ({
                ...prev,
                id: '',
                location: {},
                category: '',
                productName: '',
                price: '',
                store: '',
                link: '',
            }));
        } else {
            alert('상품은 최대 5개까지 추가할 수 있습니다.');
        }
    };
    return (
        <>
            {/* 헤더 컴포넌트 불러올 예정 */}
            {/* <header
                className="header"
                style={{ width: '100%', height: '70px' }}
            >
                <h4 className="title">상품 정보 입력</h4>
            </header> */}
            <S.ProductRegisterForm onSubmit={dataSubmit} style={displayStyle}>
                <fieldset>
                    <Input
                        label="카테고리 *"
                        value={data.category}
                        setData={setData}
                    />
                    {<WarningMsg />}

                    <Input
                        label="상품명 *"
                        value={data.productName}
                        setData={setData}
                    />
                    {<WarningMsg />}

                    <Input
                        label="구매가격 *"
                        value={data.price}
                        setData={setData}
                    />
                    {<WarningMsg />}

                    <Input
                        label="구매처"
                        value={data.store}
                        setData={setData}
                    />
                    <Input
                        label="구매링크"
                        value={data.link}
                        setData={setData}
                    />
                </fieldset>

                <S.RegisterButton>등록하기</S.RegisterButton>
            </S.ProductRegisterForm>
        </>
    );
};

const Input = ({ label, value, setData }) => {
    //input값을 data에 저장하기
    const onInputChange = event => {
        switch (label) {
            case '카테고리 *':
                setData(prev => ({
                    ...prev,
                    category: event.target.value,
                }));
                break;
            case '상품명 *':
                setData(prev => ({
                    ...prev,
                    productName: event.target.value,
                }));
                break;
            case '구매가격 *':
                setData(prev => ({
                    ...prev,
                    price: event.target.value,
                }));
                break;
            case '구매처':
                setData(prev => ({
                    ...prev,
                    store: event.target.value,
                }));
                break;
            case '구매링크':
                setData(prev => ({
                    ...prev,
                    link: event.target.value,
                }));
                break;
            default:
                console.log('에러');
        }
    };

    return (
        <>
            <S.InputLabel htmlFor={label} label={label}>
                {label}
            </S.InputLabel>
            <S.InputText id={label} value={value} onChange={onInputChange} />
        </>
    );
};

const WarningMsg = () => {
    return <S.Warning>필수 정보를 입력하세요.</S.Warning>;
};
