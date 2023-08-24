import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      Coded by{' '}
      <a href="https://github.com/kubameyza/disney-characters-showcase/tree/main/disney-characters-showcase">
        Jakub Meyza
      </a>
    </div>
  );
};
export default Footer;
