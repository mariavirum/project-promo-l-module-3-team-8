import React, { useState } from "react";
import Palettes from "./Palettes";
import InputList from "./InputList";
import GetAvatar from "./GetAvatar";
import Profile from "./Profile";
import Share from "./Share";
import Collapsable from "./Collapsable";

function Form(props) {
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const [clasePalettes, setClasePalettes] = useState(""); //valor incial
  const funcionPalettes = () => {
    if (clasePalettes === "") {
      setClasePalettes("hidden");
    } else {
      setClasePalettes("");
    }
  };
  const [claseInputs, setClaseInputs] = useState(""); //valor incial
  const funcionInputs = () => {
    if (claseInputs === "") {
      setClaseInputs("hidden");
    } else {
      setClaseInputs("");
    }
  };
  const [claseShare, setClaseShare] = useState(""); //valor incial
  const funcionShare = () => {
    if (claseShare === "") {
      setClaseShare("hidden");
    } else {
      setClaseShare("");
    }
  };
  /* const [claseAvatar, setClaseAvatar] = useState(""); //valor incial
  const funcionAvatar = () => {
    if (claseAvatar === "") {
      setClaseAvatar("hidden");
    } else {
      setClaseAvatar("");
    }
  };
 */

  return (
    <div className="centralcolumn divided__options">
      <section className="design">
        <Collapsable
          iconCollapsable={"far fa-object-ungroup"}
          title={"Diseña"}
          funcion={funcionPalettes}
        />
        <Palettes
          hidden={clasePalettes}
          handlePalettesWithLifting={props.handlePalettesWithLifting}
        />
        <div className="line-dividing--fill"></div>
      </section>

      <section className="fill">
        <Collapsable
          iconCollapsable={"far fa-keyboard dropdown__icon"}
          title={"Rellena"}
          funcion={funcionInputs}
          /* funcion2={funcionAvatar} */
        />
        <InputList
          hidden={claseInputs}
          handleInput={props.handleInput}
          data={props.data}
        />
        <GetAvatar
          /*  hidden={claseAvatar} */
          /* funcion={funcionAvatar} */
          avatar={avatar}
          updateAvatar={updateAvatar}
        />
        <Profile avatar={avatar} />
        <div className="line-dividing--fill"></div>
      </section>
      <section className="share">
        <Collapsable
          shareBtn={"dropdownshare-btn"}
          iconCollapsable={"fas fa-share-alt"}
          title={"Comparte"}
          funcion={funcionShare}
        />
        <Share
          hidden={claseShare}
          handleShareWithLifting={props.handleShareWithLifting}
          responseApi={props.responseApi}
        />
        <div className="line-dividing"></div>
      </section>
    </div>
  );
}

export default Form;
