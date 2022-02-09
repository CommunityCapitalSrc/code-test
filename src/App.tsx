import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Button/Button';

const Wrapper = styled.div`
  background-color: #fff;
`;

function App() {
  const { t } = useTranslation();

  return (
    <Wrapper className="App">
      {t('noumena.dashboard.welcome_title', {
        brandName: t('noumena.default.brand_name'),
      })}
      <Button>{t('noumena.dashboard.welcome_title')}</Button>
    </Wrapper>
  );
}

export default App;
