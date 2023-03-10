import * as styles from "../../styles/modules/displays/Headers.module.scss";

export const MobileHeader = ({ title }) => {
	return <h3 className={styles.headers}>{title}</h3>;
};

export const MobileHeaderUnderlined = ({ title }) => {
	return <h3 className={styles.underlinedHeader}>{title}</h3>;
};

export const MobileHeaderCenter = ({ title, className }) => {
	return <h2 className={`${styles.centeredHeader} ${className}`}>{title}</h2>;
};

export const DesktopHeader = ({ title, children, className }) => {
	return (
		<h1 className={`${styles.headers} ${className}`}>{title || children}</h1>
	);
};

export const DesktopHeaderCenter = ({ title, className }) => {
	return <h5 className={`${styles.centeredHeader} ${className}`}>{title}</h5>;
};

export const SmallDesktopHeader = ({ title, children, className }) => {
	return (
		<h4 className={`${styles.headers} ${className}`}>{title || children}</h4>
	);
};

export const Para = ({ children, desc, className }) => {
	return (
		<p className={`${styles.paragraph} ${className}`}>{children || desc}</p>
	);
};
