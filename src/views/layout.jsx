import 'twin.macro';

import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LangToggle from '@/components/lang-toggle/lang-toggle';
import Title from '@/components/title/title';

function Layout() {
  console.log(i18next);
  const { t } = useTranslation();
  return (
    <div tw='p-5'>
      <LangToggle />
      <Title text={'Hello'} bold />
      <div>{t('heading')}</div>
    </div>
  );
}

export default Layout;
