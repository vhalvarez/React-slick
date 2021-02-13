import { Container } from 'react-bootstrap'
import ImageSlider from './components/Slider'
import './styles/App.scss'

function App() {
    return (
        <Container className='carousel'>
            <h1 className='slider_title'>React Image Carrousel</h1>
            <ImageSlider />
        </Container>
    )
}

export default App
