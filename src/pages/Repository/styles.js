import styled from 'styled-components';

export const Loading = styled.div`
  color: ${props => props.theme.white};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${props => props.theme.primary};
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
    color: ${props => props.theme.gray};
    line-height: 1.5;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 5px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: ${props => props.theme.dark};

          &:hover {
            color: ${props => props.theme.primary};
          }
        }

        span {
          background: ${props => props.theme.dark};
          color: ${props => props.theme.white};
          border-radius: 2px;
          font-size: 12px;
          font-weight: bold;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
          display: inline-block;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: ${props => props.theme.gray};
      }
    }
  }
`;
