import styled, { css } from 'styled-components'

const MyButton = styled.button`
background: transparent;
  border-radius: ${props => props.borderRadius || '3px'};
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;
  font-size: 12px;
  
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

// const Container = styled.div`
//   display: inline-block;
//   margin: 10px;
//   box-shadow: 3px 3px 3px #ccc;
// `

// class Icon extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props)
//   }

//   render() {
//     return (
//       <i onClick={this.props.onClick}>{this.props.children}</i>
//     )
//   }
// }

// export default function (props) {
//   return (
//     <Container>
//       <MyButton><Icon {...props} onClick={props.onClick}></Icon></MyButton>
//     </Container>
//   )
// }

export default styled(MyButton)`
  display: inline-block;
  box-shadow: 3px 3px 3px #ccc;
`