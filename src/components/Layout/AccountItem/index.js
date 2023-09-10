import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1694419200&x-signature=tSXd%2Bor9ek1JKxoAmjCi9avCXtM%3D" alt="Hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}><h4>Nguyễn Văn A <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} /></h4></p>
                <span className={cx('usename')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;