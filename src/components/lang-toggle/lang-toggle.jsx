/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import { AnimatePresence, motion } from 'framer-motion';
import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

function LangToggle() {
  const { t } = useTranslation();
  const i18Lang = i18next.language;
  const [lang, setLang] = useState(i18Lang);

  const toggleStyles = {
    active: tw`border py-1 px-3 border-black rounded-3xl`,
    inactive: tw` border border-white py-1 px-3`
  };

  console.log('lang', i18Lang);
  const handleChangeLang = () => {
    const nextLang = lang === 'kk' ? 'ru' : 'kk';
    setLang(nextLang);
    i18next.changeLanguage(nextLang);
  };

  return (
    <>
      <div
        tw='border border-black flex rounded-3xl overflow-hidden relative w-[75px] h-[35px] border-2'
        onClick={handleChangeLang}
      >
        <AnimatePresence>
          <motion.div
            tw='rounded-full h-[35px] w-[45px] border border-black absolute border-2'
            animate={lang === 'kk' ? { left: '28px', top: '-2px' } : { left: '-2px', top: '-2px' }}
            transition={{ duration: 0.3, transitionTimingFunction: 'ease-out' }}
          >
            <div tw='flex justify-center items-center font-bold'>{lang === 'kk' ? 'каз' : 'рус'}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default LangToggle;
