import styled from 'styled-components';
import { Button } from '@/components/Button/Button';

const Wrapper = styled.div`
  background-color: #fff;
`;

function App() {
  return (
    <Wrapper className="App">
      <Button>Submit</Button>
    </Wrapper>
  );
}

export default App;
