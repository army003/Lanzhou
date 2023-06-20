import React from 'react';
import tw from 'twin.macro';

const style = ({ twStyle, bold = false }) => [tw`text-primary text-s30`, bold && tw`font-bold`, twStyle];

function Title({ text, bold, twStyle }) {
  return <p css={style({ twStyle, bold })}>{text}</p>;
}

export default Title;
