import React from 'react'
//burda buton componnetimi export ediyorum ki appjs de kullanabilim
// butonlarima css vermek icin hepsine bir isim veriyorum

export const Button = (props) => {
  const {type,text} = props
  const getButtonClass = () => {
    switch (type) {
      case Button_Types.PRIMARY:
        return "primaryBtn";
      case Button_Types.DEFAULT:
        return "defaultBtn";
      case Button_Types.DASHED:
        return "dashedBtn";
      case Button_Types.TEXT:
        return "textBtn";
      default:
        return "linkBtn";
    }

  };
  //butonlarimi bir fonksiyon kullanarak olusturuyorum .
  return <div className={`${getButtonClass()}`}>{text}</div>;

}
export const Button_Types={
  PRIMARY:'PRIMARY',
  DEFAULT:'DEFAULT',
  DASHED:'DASHED',
  TEXT:'TEXT',
  LINK:'LINK'

};

