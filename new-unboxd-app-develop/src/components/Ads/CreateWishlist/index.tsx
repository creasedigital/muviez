import { Ad, Anchor, Text } from "../style";
import AdPhone from '../../../assets/img/ad-phone.png';

const CreateWishlist = () => {
    return (
        <Ad>
            <img src={AdPhone} alt="phone advert" />
            <Text>Like this wishlist? &nbsp;<Anchor to="/wishlist/create"> Set up your own - It’s free</Anchor></Text>
        </Ad>
    );
}

export default CreateWishlist;