import React from 'react';
import * as S from './Buttons.styled';
import LogoImage from '../../assets/images/Logo.svg';
import { useDispatch } from 'react-redux';
import { setPage } from '../../features/page/pageSlice';
import { useNavigation } from '../../hooks/useNavigate';

const handleMouseEnter = (name, setHover) => {
    setHover(prev => ({
        ...prev,
        [name]: true,
    }));
};

const handleMouseLeave = (name, setHover) => {
    setHover(prev => ({
        ...prev,
        [name]: false,
    }));
};

const handleActive = (name, setActive) => {
    setActive(name);
};

export const HomeBtn = ({ hover, setHover, active, setActive, handlePage }) => {
    const handleNavigate = useNavigation();
    return (
        <S.IconButton
            type="button"
            name="home"
            $active={active === 'home'}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handlePage('image', LogoImage);
                handleNavigate('/home');
            }}
        >
            <S.HomeIcon $hover={hover.home} $active={active === 'home'} />
            <S.IconNameSpan $hover={hover.home} $active={active === 'home'}>
                홈
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const FeedBtn = ({ hover, setHover, active, setActive, handlePage }) => {
    const handleNavigate = useNavigation();
    return (
        <S.IconButton
            type="button"
            name="feed"
            $active={active === 'feed'}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handlePage('text', '피드');
                handleNavigate('/board');
            }}
        >
            <S.FeedIcon $hover={hover.feed} $active={active === 'feed'} />
            <S.IconNameSpan $hover={hover.feed} $active={active === 'feed'}>
                피드
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const AddBtn = ({ hover, setHover, active, setActive, handlePage }) => {
    const handleNavigate = useNavigation();
    return (
        <S.IconButton
            type="button"
            name="add"
            $active={active === 'add'}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handlePage('text', '게시글 작성');
                handleNavigate('/newboard');
            }}
        >
            <S.AddIcon $hover={hover.add} $active={active === 'add'} />
            <S.IconNameSpan $hover={hover.add} $active={active === 'add'}>
                글쓰기
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const ChatBtn = ({ hover, setHover, active, setActive, handlePage }) => {
    const handleNavigate = useNavigation();
    return (
        <S.IconButton
            type="button"
            name="chat"
            $active={active === 'chat'}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handlePage('text', '채팅');
                handleNavigate('/chat');
            }}
        >
            <S.ChatIcon $hover={hover.chat} $active={active === 'chat'} />
            <S.IconNameSpan $hover={hover.chat} $active={active === 'chat'}>
                채팅
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const UserBtn = ({ hover, setHover, active, setActive, handlePage }) => {
export const UserBtn = ({ hover, setHover, active, setActive }) => {
    const handleNavigate = useNavigation();
    return (
        <S.IconButton
            type="button"
            name="user"
            $active={active === 'user'}
            onMouseEnter={event =>
                handleMouseEnter(event.currentTarget.name, setHover)
            }
            onMouseLeave={event =>
                handleMouseLeave(event.currentTarget.name, setHover)
            }
            onClick={event => {
                handleActive(event.currentTarget.name, setActive);
                handlePage('text', '프로필');
                handleNavigate('/user');
            }}
        >
            <S.UserIcon $hover={hover.user} $active={active === 'user'} />
            <S.IconNameSpan $hover={hover.user} $active={active === 'user'}>
                프로필
            </S.IconNameSpan>
        </S.IconButton>
    );
};
