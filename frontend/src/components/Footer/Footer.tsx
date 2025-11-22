import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <p>
          &copy; {currentYear} Edaisyma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
