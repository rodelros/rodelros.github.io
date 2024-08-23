import styles from './route_map.module.css';
import commonstyles from '../../header.module.css';
export default function RouteMap() {
    return (
        <div className={styles.route_map}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`} href='/'>route map</a>
        </div>
    );
}