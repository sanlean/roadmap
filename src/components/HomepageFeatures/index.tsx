import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comece do zero',
    image: 'https://raw.githubusercontent.com/sanlean/roadmap/refs/heads/main/static/img/roadmap-session-1.webp',
    description: (
      <>
        Aprendizado de programação começando do nível mais iniciante para quem não
        está familiarizado com código.
      </>
    ),
  },
  {
    title: 'Roadmap completo',
    image: 'https://raw.githubusercontent.com/sanlean/roadmap/refs/heads/main/static/img/roadmap-session-2.webp',
    description: (
      <>
        Saiba o que é necessário estudar para ser um desenvolvedor completo que
        constrói aplicações backend e mobile utilizando a linguagem <code>kotlin</code>.
      </>
    ),
  },
  {
    title: 'Livre para usar',
    image: 'https://raw.githubusercontent.com/sanlean/roadmap/refs/heads/main/static/img/roadmap-session-3.webp',
    description: (
      <>
        Conteúdo totalmente gratuito e <i>open source</i>, com liberdade total
        para aproveitar como achar melhor e com a linguagem que preferir.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
