import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const features = [
  {
    title: 'Customizable',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Most of the components and styles used in the package are customizable.
      </>
    ),
  },
  {
    title: 'All in One',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        There are several modes and implementations that bring you the best experiences.
      </>
    ),
  },
  {
    title: 'Localizable',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can localize the component locally or globally.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <div className={styles.hero}>
        <header className={styles.header}>
          <h1>{siteConfig.title}</h1>
          <p className={styles.tagLine}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to={useBaseUrl('docs/')}>Get Started</Link>
          </div>
        </header>
        <main>
          {features && features.length > 0 && (
            <section className={styles.section}>
              <div className={styles.features}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}
