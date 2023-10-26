import React from 'react';
import * as S from './Buttons.styled';

const mainColor = '#45522b';
const basicColor = '#0f0f0f';

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

const getColor = (name, active, hover) => {
    return active === name ? mainColor : hover[name] ? mainColor : basicColor;
};

export const HomeBtn = ({ hover, setHover, active, setActive }) => {
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
            }}
        >
            <S.HomeIcon $hover={hover.home} $active={active === 'home'} />
            <S.IconNameSpan $hover={hover.home} $active={active === 'home'}>
                홈
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const FeedBtn = ({ hover, setHover, active, setActive }) => {
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
            }}
        >
            <S.FeedIcon $hover={hover.browse} $active={active === 'feed'} />
            <S.IconNameSpan $hover={hover.browse} $active={active === 'feed'}>
                피드
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const AddBtn = ({ hover, setHover, active, setActive }) => {
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
            }}
        >
            <S.AddIcon $hover={hover.add} $active={active === 'add'} />
            <S.IconNameSpan $hover={hover.add} $active={active === 'add'}>
                글쓰기
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const ChatBtn = ({ hover, setHover, active, setActive }) => {
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
            }}
        >
            <S.ChatIcon $hover={hover.chat} $active={active === 'chat'} />
            <S.IconNameSpan $hover={hover.chat} $active={active === 'chat'}>
                채팅
            </S.IconNameSpan>
        </S.IconButton>
    );
};

export const UserBtn = ({ hover, setHover, active, setActive }) => {
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
            }}
        >
            <S.UserIcon $hover={hover.user} $active={active === 'user'} />
            <S.IconNameSpan $hover={hover.user} $active={active === 'user'}>
                프로필
            </S.IconNameSpan>
        </S.IconButton>
    );
};