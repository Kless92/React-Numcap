import { useSelector } from 'react-redux';
import {Col, Row} from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDiplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = useSelector((state)=>[selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)]);
    console.log('display items:', items);

    return (
        <Row>
            {items.map((item, idx)=>{
                return (
                    item && (//to prevent errors
                    <Col md ClassName='m-1' key={idx}>
                        <AnimatedDisplayCard item={item}/>
                    </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;