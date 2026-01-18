import customerChurn from '../assets/Customer-Churn-Analysis-using-Power-BI-Public.png';
import spotifyPipeline from '../assets/Real-Time-Spotify-Data-Pipeline-With-Aws-And-Snowflake .png';
import databricksPipeline from '../assets/Databricks End-to-End ETL Pipeline Project.png';
import atmDashboard from '../assets/ATM Transaction Dashboard  Power BI .png';
import walmartSales from '../assets/Walmart Sales Data Analysis Built an end-to-end data pipeline using Pandas and MySQL .png';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Customer-Churn-Analysis',
    description:'An interactive Power BI dashboard project that analyzes customer churn patterns, identifies key factors driving attrition, and provides insights to improve customer retention strategies.',
    imageUrl: customerChurn,
    techStack: ['Power BI', 'Data Visualization', 'SQL', 'DAX', 'Data Cleaning & Transformation'],
    repoLink: 'https://github.com/pulishashank8/Customer-Churn-Analysis-using-Power-BI-Public.git',
  },
  {
    title: 'Real-Time-Spotify-Data-Pipeline',
    description:'A real-time data pipeline project that streams Spotify data using AWS services and integrates it with Snowflake for storage, transformation, and advanced analytics.',
    imageUrl: spotifyPipeline,
    techStack: ['AWS','Snowflake', 'Python', 'SQL', 'Data Pipeline Development'],
    repoLink: 'https://github.com/pulishashank8/Real-Time-Spotify-Data-Pipeline-With-Aws-And-Snowflake.git',
    
  },
  {
    title: 'Databricks End-to-End ETL Pipeline',
    description:'An end-to-end ETL pipeline project built on Databricks to ingest, transform, and load data efficiently for analytics and reporting.',
    imageUrl: databricksPipeline,
    techStack: ['Databricks', 'PySpark', 'SQL', 'Data Modeling','ETL Development'],
    repoLink: 'https://github.com/pulishashank8/databricks-etl-pipeline-end-to-end.git',
  },
  {
    title: 'ATM Transaction Dashboard',
    description:'An interactive Power BI dashboard that visualizes ATM transaction trends, cash withdrawals, and customer usage patterns to support data-driven decision-making.',
    imageUrl: atmDashboard,
    techStack: ['Power BI','Data Visualization', 'SQL', 'DAX', 'Data Cleaning & Transformation'],
    repoLink: 'https://github.com/pulishashank8/ATM-Transactions-Dashboard-Power-BI.git',
  },
  {
    title: 'Walmart Sales Data Analysis',
    description:'An end-to-end data pipeline project analyzing Walmart sales data using Pandas for transformation and MySQL for storage, querying, and reporting.',
    imageUrl: walmartSales,
    techStack: ['Python', 'MySQL', 'Pandas', 'Data Analysis', 'ETL Pipeline Development'],
    repoLink: 'https://github.com/pulishashank8/Walmart-sale-Data-Analysis.git',
  },
];