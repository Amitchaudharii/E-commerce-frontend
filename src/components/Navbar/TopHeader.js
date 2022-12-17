import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const Headercontainer = styled.div`
  .header {
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px;
      .logo {
        a {
          text-decoration: none;
          h1 {
            color: #0465d2;
            font-size: 1.7rem;
            text-transform: uppercase;
            span {
              color: #f7ba01;
              text-transform: lowercase;
            }
          }
        }
      }
      .header-form {
        form {
          display: flex;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          input {
            width: 400px;
            padding: 10px 10px;
            border: none;
          }
          select {
            color: rgba(0, 0, 0, 0.6);
            width: 150px;
            padding: 10px 10px;
            border: none;
            border-left: 1px solid rgba(0, 0, 0, 0.3);
          }
          button {
            color: #fff;
            font-size: 17px;
            padding: 9px 20px;
            background-color: #f7ba01;
            border: none;
            margin: 0 0 0 5px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              background-color: #e7af08;
            }
          }
        }
      }
      .header-icons {
        ul {
          display: flex;
          li {
            position: relative;
            list-style: none;
            a {
              font-size: 1.2rem;
              color: #000;
              display: flex;
              align-items: center;
              margin: 0 3px;
              padding: 7px;
              &:hover {
                background-color: #f3f1f1;
                border-radius: 5px;
              }
              .added-quantity {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.7rem;
                position: absolute;
                top: 0;
                right: 0;
                width: 18px;
                height: 18px;
                background-color: #f7ba01;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .bottom-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0465d2;
      padding: 0 25px;
      .categories-btn {
        select {
          font-size: 0.9rem;
          font-weight: 500;
          background-color: #035dc3;
          border: none;
          color: #fff;
          padding: 20px;
          cursor: pointer;
        }
      }
      .navbar {
        nav {
          ul {
            display: flex;
            li {
              list-style: none;
              margin: 0 5px;
              a {
                font-size: 0.9rem;
                font-weight: 500;
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
                padding: 10px 8px;
                border-radius: 5px;
                &:hover {
                  background-color: #035dc3;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TopHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between py-[20px] px-[80px]">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              src="./Images/logo.png"
              alt=""
              className="bg-blue-600 w-[50px] p-1 rounded"
            />
          </NavLink>
          <span className="font-bold text-[#f7ba01] uppercase text-xl">
            Store
          </span>
        </div>
        <div className="flex items-center gap-10">
          <form
            role="search"
            action="http://localhost:3000/"
            className="flex items-center border border-[#000]/3 rounded-sm"
          >
            <input
              type="search"
              placeholder="Search for your item type..."
              className="w-[400px] p-[10px] border-none outline-none"
            />
            <select
              name="produdt-cat"
              id="select"
              className="text-[#000]/6 w-[150px] p-[10px] border-l border-[#000]/3 outline-none "
            >
              <option value="all">All category</option>
              <option value="food">Food</option>
              <option value="fashion">Fashion</option>
              <option value="electric">Electric</option>
            </select>
            <button
              type="submit"
              className="text-white text-base py-[15px] px-[20px] cursor-pointer transition-all bg-[#f7ba01] hover:bg-[#e7af08] rounded"
            >
              <BsSearch />
            </button>
          </form>

          <div className="">
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsPerson />
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <IoIosGitCompare className="compare-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    0
                  </span>
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsHeart className="whishlist-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    0
                  </span>
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsBag className="cart-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    0
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
