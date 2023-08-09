import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
  margin-left: 10px;
  label {
    display: flex;
    align-items: center;

    input {
      border-radius: 7px;
      height: 20px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      border: none;

      background-color: #fadcd9;
    }
  }
`;
