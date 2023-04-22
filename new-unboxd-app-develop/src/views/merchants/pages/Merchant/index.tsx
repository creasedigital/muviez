import { useEffect } from "react";
import { PageLoader } from "../../../../components";
// import { useHistory } from "react-router-dom";

const Merchant = () => {
    // const history = useHistory();

    useEffect(() => {
        window.location.href = 'https://unboxd.gifts/merchants'
        // history.push('/merchants');

    }, [])

    return (
        <PageLoader />
    );
}

export default Merchant;