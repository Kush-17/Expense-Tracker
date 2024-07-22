import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Admin</h2>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: linear-gradient(145deg, rgba(252, 246, 249, 0.9), rgba(235, 233, 238, 0.9));
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(6px);
    border-radius: 32px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    transition: all 0.3s ease;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease-in-out;
            &:hover {
                box-shadow: 0px 0px 20px 5px rgba(58, 123, 213, 0.8);
                border-color: rgba(58, 123, 213, 0.8);
            }
        }
        h2 {
            color: rgba(34, 34, 96, 1);
            font-size: 1.4rem;
            font-weight: 700;
        }
        p {
            color: rgba(34, 34, 96, 0.6);
            font-size: 1rem;
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.4s ease-in-out;
            }
            &:hover {
                background: rgba(34, 34, 96, 0.1);
                border-radius: 10px;
                padding-left: 1.5rem;
                color: rgba(58, 123, 213, 0.8);
                text-shadow: 0px 0px 5px rgba(58, 123, 213, 0.8);
                i {
                    color: rgba(58, 123, 213, 0.8);
                    text-shadow: 0px 0px 5px rgba(58, 123, 213, 0.8);
                }
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
        i {
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
        .user-con {
            img {
                width: 60px;
                height: 60px;
            }
            h2 {
                font-size: 1.2rem;
            }
            p {
                font-size: 0.9rem;
            }
        }
        .menu-items {
            li {
                font-size: 0.9rem;
                padding-left: 0.5rem;
            }
        }
    }
`;



export default Navigation