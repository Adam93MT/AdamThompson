import React from 'react';
import PropTypes from "prop-types"
import classnames from "classnames"
import Head from "next/head"
import styles from './default-template.module.scss';
import Header from '../../components/Header';

const DefaultPage = ({ children, meta, title, className, id, } ) => {
  const pageTitle = title ? title : (meta ? meta.title : '—')
  return (
    <>
      <Head><title>{pageTitle}</title></Head>
      <main className={classnames(styles.default_page, pageTitle, className, meta?.section)} id={id}>
        <Header color="black" />
        <article>{children}</article>
      </main>
    </>
  );
}

DefaultPage.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default DefaultPage;
