import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 3.5rem);
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: 0.2s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 1.25rem 3.125rem;
  gap: 0.625rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  font-weight: 500;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.875rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.bgLighter};
  }
`;

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.soft};
`;

const Links = styled.div`
  margin-left: 3.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Link = styled.span`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

function SignIn() {
  return (
    <Container>
      <Wrapper>
        {/* SignIn */}
        <Title>Sign-In</Title>
        <SubTitle>to continue to MJYouTube</SubTitle>
        <Input type="text" placeholder="Email or phone" />
        <Input type="password" placeholder="Password" />
        <Button>Sign-In</Button>

        <SubTitle>OR</SubTitle>

        {/* SignUp */}
        <Title>Sign-Up</Title>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email or Phone." />
        <Input type="password" placeholder="Password" />
        <Button>Sign-Up</Button>
        <More>
          English(USA)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
