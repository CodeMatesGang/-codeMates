import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import image from '../../images/leo.jpg'
// import LeoLogo from '../../images/leoLogo.png'
// import AlphaClubs from './AlphaClubs';
import OmegaClubs from './OmegaClubs';
import './LeoClub.css'

function LeoClub() {
    return <>
    <Container className='mainContainer'>
            <img
                src={image}
                alt="lions"
                height="300px"
                width="100%"
                className='shadow rounded'
            />  
            <div>
                <h2>Lions Club</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eveniet qui mollitia voluptas blanditiis doloribus officia eum id. Sequi iusto libero fugiat amet asperiores fugit quidem possimus esse, beatae harum, et atque necessitatibus facilis. Iusto corrupti nisi ullam exercitationem quaerat! Illum soluta odit reprehenderit ab! Dolore sapiente et vitae modi temporibus, quo nulla eius illo nobis voluptatem, officiis doloribus, est aut atque aliquam dignissimos mollitia odio quae accusamus aliquid nam fuga. Tenetur odio corrupti quasi aspernatur, recusandae expedita asperiores at quos minima dolores, culpa reiciendis in totam delectus quae. Labore, corrupti sed modi ipsam impedit dolores eius velit ab tenetur.
                </p>
            </div>

            <div className="LeoClubs mt-5">

                <h2>Our Leo Clubs</h2>
                {/* <AlphaClubs/> */}
            {/* <h3>Alpha Club</h3>
                <img
                    src={LeoLogo}
                    alt="Leo Logo"
                    height="250px"
                    className='leoImage mt-3'/>
                <p className='mt-5'>Name</p>   */}
                <OmegaClubs/>
            </div>
                {/* <Button as={Link} to='/leoclubuploads' variant="outline-primary"> Admin View </Button> */}
    </Container>
    </>;
}
 export default LeoClub