'use client';

import styles from './page.module.scss';
import Header from './src/components/header';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
