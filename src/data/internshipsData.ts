interface Internship {
  company: string;
  role: string;
  duration: string;
  logoUrl: string;
  location: string;
  status: 'Current' | 'Previous';
  accentColor: string;
  responsibilities: string[];
  tech: string[];
}

export const internships: Internship[] = [
  {
    company: 'Crowe LLP',
    role: 'Data Engineer Analytics',
    duration: 'Jun 2024 - Present',
    logoUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Tampa, Florida',
    status: 'Current',
    accentColor: 'from-sky-700/50 via-indigo-700/50 to-violet-700/50',
    responsibilities: [
      'Architected Snowflake Data Warehouse for real-time financial analytics, migrating 12TB using AWS Glue and dbt; implemented dimensional modeling with SCD Type 2, achieving 35% query latency reduction and enabling sub-second compliance reporting.',
      'Streamlined PySpark pipelines handling 1.2 billion monthly financial events from Apache Kafka to Redshift, applying broadcast joins and improved partitioning to reduce execution time by 27% (from 52 to 38 minutes) and save $40K in infrastructure costs annually.',
      'Engineered automated reconciliation system between Core Banking and General Ledger (GL) using SQL window functions; processed $75B+ daily transactions at 99.9% accuracy, eliminating $8M in annual discrepancies and reducing manual audit effort by 87%.',
      'Built modular AWS Glue job templates and dbt macro libraries, standardizing 80+ data pipelines; reduced new pipeline deployment time from 4 days to 1 day, enabling faster market response for emerging compliance requirements.',
      'Developed and implemented a comprehensive Data Governance framework for the organization, documented over 150 data flow maps and 200 metadata standards, cut SOX audit findings by 60%, and set up a central data stewardship council to ensure ongoing compliance.',
      'Conducted quarterly Variance Analysis on $500M+ financial portfolios using Python and SQL; identified critical budget drivers in less than 24 hours versus 5 days manually, enabling $15M quarterly capital reallocation and 40 %faster executive decision-making.',
      'Built statistical anomaly detection model on $75B+ daily transactions using isolation forests; flagged suspicious patterns with 97 %precision, reducing downstream fraud investigation time by 80 % and preventing $2.5M+ in potential losses.'
    ],
    tech: ['Snowflake', 'AWS Glue', 'dbt', 'PySpark', 'Kafka', 'Redshift', 'SQL', 'Python', 'AWS'],
  },
  {
    company: 'GP InfoTech',
    role: 'Data Engineer',
    duration: 'Mar 2021 - Jul 2023',
    logoUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Hyderabad, India',
    status: 'Previous',
    accentColor: 'from-blue-800/50 via-slate-700/50 to-indigo-800/50',
    responsibilities: [
      'Developed HIPAA-compliant Python ETL pipelines using GCP Dataflow with Apache Beam to process 4TB+ monthly electronic health records; implemented FHIR standard transformations for HL7 data integration, improving clinical data accuracy from 94% to 99.8% and eliminating compliance violations.',
      'Designed Pub/Sub + Cloud Composer streaming architecture for 800K daily prescription records to BigQuery. Optimized schema and partitioning, reducing pharmacy analytics query latency by 45-60%.',
      'Optimized GCP Dataproc PySpark jobs analyzing 1.5M patient encounters. Broadcast joins and partition tuning reduced job latency from 35 to 23 minutes (34% improvement).',
      'Created Power BI dashboards that tracked 60+ clinical KPIs for 200+ staff, leading to targeted actions that cut 30-day hospital readmissions by 12%, saved 240 patient-days, boosted patient satisfaction by 18%, and delivered $1.2M in savings.',
      'Performed pharmacy cost variance analysis across 8 hospitals using ARIMA time-series forecasting models; identified $500K in annual inventory waste through pattern recognition and demand forecasting, driving hospital-wide procurement optimization that reduced pharmacy costs by 8% ($400K savings)',
      'Implemented automated data quality validation framework using Great Expectations for 1.5M+ patient encounters daily; flagged pre-production anomalies in real-time, achieving 99.2% accuracy, preventing HIPAA compliance violations, and maintaining zero audit exceptions across eight consecutive external audits.'
    ],
    tech: ['Python', 'GCP', 'Dataflow', 'Apache Beam', 'BigQuery', 'PySpark', 'Power BI', 'Great Expectations'],
  },
  {
    company: 'Carborundum Universal',
    role: 'Data Analyst',
    duration: 'Feb 2020 - Mar 2021',
    logoUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Chennai, India',
    status: 'Previous',
    accentColor: 'from-teal-700/50 via-cyan-700/45 to-indigo-700/50',
    responsibilities: [
      'Developed a Power BI platform that combined 12+ KPIs from 5 different systems and automated daily reports, cutting manual Excel work by 85% and delivering real-time dashboards for executives.',
      'Created Power BI dashboards analyzing 150K customer records with SQL queries, delivering sales team insights that improved conversion rates 22% through customer segmentation analysis',
      'Designed Power BI dashboards with RFM customer segmentation (150K records). Delivered segment-specific insights to sales leadership for targeted outreach campaigns.',
      'Collaborated with finance, operations, and C-suite executives to translate business requirements into actionable dashboards and KPI scorecards; delivered 4 executive-level reports with interactive drill-down capabilities, reducing decision-making cycle time by 60% and improving forecast accuracy for quarterly planning',
      'Analyzed A/B test results for 8+ marketing campaigns (email, landing page, pricing), helping leadership accelerate feature rollout decisions by 35% and boost conversion rates by 12%.'
    ],
    tech: ['Power BI', 'SQL', 'Excel'],
  },
];