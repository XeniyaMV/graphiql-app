import Code from '../Code';
import styles from './responseViewer.module.scss';
import prettify from '@/utils/prettify';

interface Props {
  GQLResponse: string;
}

function ResponseViewer({ GQLResponse }: Props): JSX.Element {
  const respObj = {
    value: GQLResponse,
  };

  const response = prettify(JSON.stringify(respObj));
  return (
    <section className={styles.responseViewer}>
      <Code value={response} readonly={true} />
    </section>
  );
}

export default ResponseViewer;
