
import styles from 'src/ui/Hero/styles.module.css';

const Component = () => <div className={styles.container}>
  <h1 className={styles.title}>Writing <i>testable</i> code must be <i>easy</i></h1>

  <p>We don't write enough tests. Our frontend needs more tests. Without excuses. Testing is all about confidence and money. It should be easy to add new tests, to debug them, locally or in the CI environment. Every time we ship a flaky feature, we are losing money. We are losing the opportunity to add new features because we have to fix bugs.</p>

  <p>This project is all about tests. It contains test recipes describing a possible approach to test one of the many scenarios we face in the frontend in our day to day basis.</p>
</div>;

export default Component;