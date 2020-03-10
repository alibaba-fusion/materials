import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Select, Card } from '@alifd/next';
import { getLocale, setLocale } from '@/utils/locale';

const Option = Select.Option;
const LANG_CONFIG = {
  'zh-CN': {
    text: '简体中文',
    icon: '🇨🇳',
  },
  'en-US': {
    text: 'English',
    icon: '🇬🇧',
  },
};

function changeLang(key) {
  setLocale(key);
}

export default function SelectLang() {
  const selectedLang = getLocale();
  return (
    <Card free>
      <Card.Header
        title={<FormattedMessage id="app.i18n.demo" />}
        extra={(
          <Select
            onChange={changeLang}
            value={selectedLang}
            size="small"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {Object.keys(LANG_CONFIG).map((lang) => {
              return (
                <Option value={lang} key={lang}>
                  {LANG_CONFIG[lang].text}
                </Option>
              );
            })}
          </Select>)}
      />
      <Card.Divider />
      <Card.Content>
        <FormattedMessage id="app.i18n.content" />
      </Card.Content>
    </Card>
  );
}
