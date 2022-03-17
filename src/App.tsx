import styled from 'styled-components';
import { Wizard } from '@/components/Wizard/Wizard';
import { identify } from '@/helpers/util';

const Wrapper = styled.div`
  background-color: #fff;
`;

function App() {
  const shouldBeAString = identify('Submit');
  // const shouldBeANumber = identify(123);

  return (
    <Wrapper className="App">
      <Wizard />
      <div style={{ display: 'none' }}>{shouldBeAString}</div>
      {/* <div style={{ display: 'none'}}>{shouldBeANumber}</div> */}
    </Wrapper>
  );
}

export default App;
