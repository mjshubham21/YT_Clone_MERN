import styled from "styled-components";

const Container = styled.div`
  display: flex;
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

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Input = styled.input``;

const Button = styled.button``;

const More = styled.div``;

function SignIn() {
  return (
    <Container>
      <Wrapper>
        {/* SignIn */}
        <Title>SignIn</Title>
        <SubTitle>to continue to MJYouTube</SubTitle>
        <Input type="text" placeholder="Email or phone" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>

        <SubTitle>OR</SubTitle>

        {/* SignUp */}
        <Title>SignUp</Title>
        <Input type="text" placeholder="Email or phone" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
        <More>More options</More>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
