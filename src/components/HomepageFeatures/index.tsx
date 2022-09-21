import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Connect Data",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Connect your data to Datafi platform. Datafi supports various SQL,
        no-SQL, SaaS data-sources (eg: MSSQL, Databricks, Synapse, Snowflake,
        MySQL, PostgresSQL)
      </>
    ),
  },
  {
    title: "Configure Security & Privacy",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Datafi lets you to build advanced security and privacy layer on top of
        the data connected to the platform.
      </>
    ),
  },
  {
    title: "Build Views & Apps",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Use Datafi's no-code builder to build DataApps & DataViews on top of
        data connected. You don't need to be tech-savvy to use the builder tool
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
