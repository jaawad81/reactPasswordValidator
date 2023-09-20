import React, { useState, useEffect, useMemo } from "react";
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
  const [allRequirementMet, setAllRequirementMet] = useState(false);

  const handlePassword = (e) => {
    let p = e.target.value;
    setPassword(p);
  };

  const requirements = useMemo(
    () => [
      { regex: /.{8,}/, text: "At least 8  characters length" },
      { regex: /[0-9]/, text: "At least 1 number {0...9}" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter {a...z} " },
      { regex: /[A-Z]/, text: "At least uppercase letter {A...Z} " },
      { regex: /[^A-Za-z8-9]/, text: "At least 1 lowercase letter {!...&} " },
    ],
    []
  );

  useEffect(() => {
    const allMet = requirements.every((req) => req.regex.test(password));
    setAllRequirementMet(allMet);
  }, [password, requirements]);

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
        {/* <div className="p-strength">
          <span className="line red"></span>
          <span className="line blue"></span>
          <span className="line green"></span>
        </div> */}
        <div className="p-content">
          <p>Password Must Contain:</p>
          <ul className="requiurement-list">{requirements.map((req,index)=>(
            <li className={req.regex.test(password)?'valid':''} key={index}>
             {req.regex.test(password)?<MdGppGood color='purple'/>:<MdGppGood color='black'/>}
              <span>{req.text}</span>
            </li>
          ))}</ul>
        </div>
      </div>
    </section>
  );
};

export default Password;
