import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Quattrocento Sans, Cardo";
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box
}
html{
  overflow-x: hidden;
}
  body{
    background-color: #fff;
    font-family: ${({ theme }) => theme.font.family};
    overflow-x: hidden;
    
  }
  h1,h2,h3{
    font-family: ${({ theme }) => theme.font.header};
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0;
  }

  h4,h5,h6{
    font-family: ${({ theme }) => theme.font.body};
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0;
  }

  h1{
    
    width: fit-content;
    line-height: 3.625rem;
    
      font-size: 3.5rem;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      }
  }

h2{
  line-height: 3.25rem;
  font-size:1.75rem;
  @media screen and (min-width: 768px) {
    font-size: 5rem;
    }
}

h3{
  line-height: 3rem;
  font-size:1.625rem;
  @media screen and (min-width: 768px) {
    font-size: 1.875rem;
    }
}
h4{
  line-height: 2.75rem;
  color: ${({ theme }) => theme.color.primary};
  @media screen and (min-width: 768px) {
    font-size:1.125rem;
    }
}
h5{
  line-height: 2.5rem;
  
  font-size:1.25rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    }
  
}
h6{
  line-height: 2rem;
 
  font-size:1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    }
}

p{
  font-family: ${({ theme }) => theme.font.body};
  font-weight: normal;
  line-height: 166%;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.grey};
  margin: 0 0 1.5rem;
}

a{
  color: ${({ theme }) => theme.color.link};
  text-decoration: none;
}

button{
  font-family: ${({ theme }) => theme.font.body};
  background-color: transparent;
  border:none;
}

ul{
  display: grid;
  grid-gap: 1rem;
  margin-left: 0;
  padding: 0px 0px 0px 20px;
  
}

li{
  font-family: ${({ theme }) => theme.font.body};

}

`

export default GlobalStyle
