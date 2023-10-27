import styled from 'styled-components';
import { ReactComponent as Back } from '../../assets/images/Backward.svg';
import theme from '../../styles/theme';
import { ReactComponent as Dots } from '../../assets/images/Dots.svg';

// 댓글창 헤더
export const BoardHeader = styled.header`
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 70px;
    margin: 0 25px;
`;

// 댓글 영역
export const BoardHeaderUser = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const BackIcon = styled(Back)`
    vertical-align: top;
`;

export const ProfileImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('/images/puppy.jpg');
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
`;

export const CommentSection = styled.section`
    width: 100%;
    padding: 20px 25px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
`;

export const CommentCounter = styled.div`
    color: ${theme.subFont};
    margin-bottom: 20px;
`;

export const AComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CommentID = styled.p`
    font-family: 'PreBold';
    font-size: 12px;
    margin-bottom: 5px;
`;

export const Comment = styled.p``;

export const DotsIcon = styled(Dots)`
    position: relative;
    left: 20%;
    transform: rotate(90deg);
`;
