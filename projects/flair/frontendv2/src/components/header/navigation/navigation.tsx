import styles from './navigation.module.css';
import Deals from './deals/deals';
import Destinations from './destinations/destinations';
import RouteMap from './route_map/route_map';
import TravelInfo from './travel_info/travel_info';
import OptionalFees from './optional_fees/optional_fees';
import Help from './help/help';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Deals />
            <Destinations />
            <RouteMap />
            <TravelInfo />
            <OptionalFees />
            <Help />
        </nav>
    );
}