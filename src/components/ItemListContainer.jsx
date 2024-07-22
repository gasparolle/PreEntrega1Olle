import Container from 'react-bootstrap/Container';


export const ItemListContainer = (props) => {
    return <Container><h4 className='bienvenidos'>{props.greeting}</h4></Container>;
}