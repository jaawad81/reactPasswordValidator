import React, { useState } from "react";
import "./Password.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdGppGood } from "react-icons/md";

const Password = () => {
  let is = false,
    isN = false,
    isCapital = false,
    isSmall = false,
    isSpecial = false;
  const [password, setPassword] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const handlePassword = (e) => {
    let p = e.target.value;
    console.log("password:" + p);
    setPassword(p);

    console.log("8 Char:" + is9(p));
    console.log("number:" + isNumber(p));
    console.log("capital:" + isCapitalCap(p));
    console.log("small:" + isSmallCap(p));
    console.log("special:" + isSpecialChar(p));
  };
  const smallAlphabetRegex = /[a-z]/g;
  const capitalAlphabetRegex = /^[A-Z]+$/;
  const numberRegex = /^[0-9]+$/;
  const specialCharacterRegex = /^[!@#$%^&*()-_=+[\]{};:'",.<>?/\\|]+$/;

  const is9 = (p) => {
    return p.length >= 8 ? true : false;
  };
  const isNumber = (p) => {
    return numberRegex.test(p) ? true : false;
  };
  const isSmallCap = (p) => {
    return smallAlphabetRegex.test(p) ? true : false;
  };
  const isCapitalCap = (p) => {
    return capitalAlphabetRegex.test(p) ? true : false;
  };
  const isSpecialChar = (p) => {
    return specialCharacterRegex.test(p);
  };

  return (
    <section className="p-wrapper">
      <div className="p-container">
        <h1>Password Validator</h1>
        <div className="p-input">
          <input type={passwordType} name="name" onChange={handlePassword} />

          <div className="p-icon">
            {passwordType === "password" ? (
              <AiFillEye
                onClick={() => {
                  setPasswordType("text");
                }}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  setPasswordType("password");
                }}
              />
            )}
          </div>
        </div>
        <div className="p-strength">
          <span className="line red"></span>
          <span className="line blue"></span>
          <span className="line green"></span>
        </div>
        <div className="p-validations ">
          <div className="row ">
            <span className="icon">
              <MdGppGood color={is ? "purple" : "black"} />
            </span>
            <span className="content">Password must be 8 characters</span>
          </div>
          <div className="row ">
            <span className="icon">
              <MdGppGood color={isN ? "purple" : "black"} />
            </span>
            <span className="content">Password must contain 0-8</span>
          </div>
          <div className="row ">
            <span className="icon">
              <MdGppGood color={isSmall ? "purple" : "black"} />
            </span>
            <span className="content">
              Password must contain at least 1 small letter
            </span>
          </div>
          <div className="row ">
            <span className="icon">
              <MdGppGood color={isCapital ? "purple" : "black"} />
            </span>
            <span className="content">
              Password must contain at least 1 capital letter
            </span>
          </div>
          <div className="row ">
            <span className="icon">
              <MdGppGood color={isSpecial ? "purple" : "black"} />
            </span>
            <span className="content">
              Password must contain at least 1 special charater
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
