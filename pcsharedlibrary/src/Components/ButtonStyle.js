import styled from 'styled-components'

export const TabButton = styled.button`
align-items: center;
background: #f5f5fa;
border: 0;
border-radius: 10px;
box-shadow: -10px -10px 30px 0 #fff,10px 10px 30px 0 #1d0dca17;
box-sizing: border-box;
color: #2a1f62;
cursor: pointer;
display: flex;
font-family: "Roboto, Helvetica, Arial, sans-serif",monospace;
font-size: 1rem;
justify-content: center;
line-height: 1.5rem;
padding: 8px;
position: relative;
text-align: left;
transition: .2s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: pre;
width: max-content;
word-break: normal;
word-spacing: normal;
textTransform: 'uppercase';
&:hover {
    background-color: lightgray;
    color: Blue;
  }
  }
`