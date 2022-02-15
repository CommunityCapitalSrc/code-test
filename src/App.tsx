import styled from 'styled-components';
import { Button } from '@/components/Button/Button';
import { identify } from '@/helpers/util';

const Wrapper = styled.div`
  background-color: #fff;
`;

function App() {
  const shouldBeAString = identify('Submit');
  return (
    <Wrapper className="App">
      <Button>{shouldBeAString}</Button>
    </Wrapper>
  );
}

export default App;
