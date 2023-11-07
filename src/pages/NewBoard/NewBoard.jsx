import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { uploadPostApi } from '../../service/post_service';
import GradientButton from '../../components/GradientButton/GradientButton';
import usePageHandler from '../../hooks/usePageHandler';

import RegisterForm from './RegisterForm';
import PostUploadForm from './PostUploadForm';

import * as S from './NewBoard.styled';

const NewBoard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const token = sessionStorage.getItem('Token');

    const [apiContent, setApiContent] = useState();

    const [imageURL, setImageURL] = useState();
    const [imageFile, setImageFile] = useState();

    const [productItems, setProductItems] = useState([]);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [textArea, setTextArea] = useState({
        message: '',
        length: 0,
    });

    usePageHandler('text', '게시글 작성');

    const trimTextArea = () => {
        setTextArea(prev => ({
            ...prev,
            message: prev.message.trim(),
            length: prev.message.trim().length,
        }));
    };
    const handleMessageChange = e => {
        setTextArea({
            message: e.target.value,
            length: e.target.value.length,
        });
    };

    const deleteProduct = itemID => {
        if (window.confirm('상품을 삭제 하겠습니까?')) {
            const updatedProductItems = productItems.filter(
                item => item.detail.id !== itemID,
            );
            setProductItems(updatedProductItems);
        }
        return;
    };

    useEffect(() => {
        setApiContent({ message: textArea.message.trim(), productItems });
    }, [textArea.message, productItems]);

    const submitPost = event => {
        event.preventDefault();
        if (!textArea.message || !imageURL) {
            alert('나의 데스크 셋업 이미지와 설명 칸을 비울 수 없습니다.');
            return null;
        } else {
            uploadPostApi(apiContent, imageFile, token)
                .then(postData => {
                    if (
                        postData.message === '내용 또는 이미지를 입력해주세요.'
                    ) {
                        alert(postData.message);
                    }
                })
                .catch(error => {
                    console.log('error', error);
                })
                .finally(() => {
                    navigate('/home');
                });
        }
    };

    return (
        <S.NewBoardContainer>
            {pathName === '/postUpload' ? (
                <form onSubmit={submitPost}>
                    <PostUploadForm
                        productItems={productItems}
                        setProductItems={setProductItems}
                        setOffset={setOffset}
                        imageURL={imageURL}
                        setImageURL={setImageURL}
                        setImageFile={setImageFile}
                        deleteProduct={deleteProduct}
                    />
                    <S.NewBoardTextarea
                        value={textArea.message}
                        maxLength="100"
                        placeholder="나의 데스크 셋업에 대해서 얘기해주세요."
                        onChange={handleMessageChange}
                    />
                    <S.TextareaCounterP>
                        {textArea.length}/100
                    </S.TextareaCounterP>
                    <S.SubmitButtonBox>
                        <GradientButton
                            type="submit"
                            children={'올리기'}
                            gra={'true'}
                            width={'70px'}
                            padding={'10px'}
                        />
                    </S.SubmitButtonBox>
                </form>
            ) : (
                <RegisterForm
                    productItems={productItems}
                    setProductItems={setProductItems}
                    offset={offset}
                    trimTextArea={trimTextArea}
                />
            )}
        </S.NewBoardContainer>
    );
};

export default NewBoard;
