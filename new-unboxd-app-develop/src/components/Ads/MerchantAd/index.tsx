import { Ad, Anchor, Text } from "../style";
import Sneakers from '../../../assets/img/sneakers.png';

const MerchantAd = () => {
    return (
        <Ad style={{display: 'none'}}>
            <img src={Sneakers} alt="phone advert" />
            <Text>Save up to 50% on sneakers &nbsp;<Anchor to="/merchants/@shopbcode/christmas-season"> Check it out</Anchor></Text>
        </Ad>
    );
}

export default MerchantAd;