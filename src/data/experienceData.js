const experienceData = [
  {
    role: 'AI Engineer',
    organisation: 'Komosion',
    project: 'AI Product Matching System',
    period: 'August 2025 – Present',
    description:
      'Building LLM-driven services that classify, enrich, and match product records from 40+ retailer feeds across ~1.6M SKUs, with humans-in-the-loop only for low-confidence outputs.',
    responsibilities: [
      'Built Python services combining LLM APIs, embedding models, and rule-based checks to classify, enrich, and match product records across 40+ retailer feeds (~1.6M SKUs).',
      'Developed a product matching system using embeddings and confidence scoring, improving match precision from 54% to 89%.',
      'Deployed AI enrichment workflows through batch jobs and internal APIs with retries, logging, version tracking, and output validation, lifting scheduled job success rate to 99.3%.',
      'Reduced manual catalogue review from 12 hours/week to 3 hours/week by routing only low-confidence outputs to reviewers and auto-approving validated high-confidence matches.',
    ],
    tools: ['Python', 'OpenAI API', 'Embeddings', 'LangChain', 'Batch jobs', 'Internal APIs'],
    outcomes: [
      'Match precision lifted from 54% to 89%.',
      'Scheduled job success rate raised to 99.3%.',
      'Manual catalogue review cut by 75% (12 → 3 hours/week).',
    ],
  },
  {
    role: 'Lead Research Analyst',
    organisation: 'LENSELL',
    project: 'Financial Service',
    period: 'August 2025 – November 2025',
    description:
      'Led a research team developing a standardised AI risk-rating framework for listed IT-sector companies across ASX, NASDAQ, and TSE markets.',
    responsibilities: [
      'Led a research team focused on developing a standardised AI risk-rating framework for listed IT-sector companies (ASX, NASDAQ, TSE).',
      'Analysed 200+ annual reports from listed IT firms and built a standardised risk taxonomy.',
      'Designed a cross-company risk taxonomy covering Financial, Technological, Social, and Governance risk categories, enabling consistent comparison across firms, markets, and disclosure contexts.',
      'Prototyped an NLP-based company risk-rating workflow using transformer-based representation learning to map disclosure text and sentiment inputs to taxonomy categories and generate risk scorecards.',
    ],
    tools: ['Python', 'NLP', 'Transformer models', 'Representation learning', 'Sentiment analysis'],
    outcomes: [
      '200+ listed-company annual reports analysed.',
      'Cross-market risk taxonomy (F-T-S-G) delivered for ASX, NASDAQ, and TSE coverage.',
      'Working prototype mapping disclosure text to risk scorecards.',
    ],
  },
  {
    role: 'Data Engineer',
    organisation: 'SW Education',
    project: 'Data Migration',
    period: 'July 2024 – December 2024',
    description:
      'Led a team migrating 500GB of legacy data into AWS RDS, built the surrounding ETL and governance, and shipped a natural-language query interface for business users.',
    responsibilities: [
      'Led a team focused on migrating 500GB of legacy data into AWS RDS, reducing data processing errors by 45% and improving report refresh efficiency by 57%.',
      'Built Python and SQL ETL pipelines across AWS RDS, S3, and AWS Glue to automate ingestion, transformation, validation, and modelling, cutting manual reporting effort by 75%.',
      'Built a natural language query interface using LangChain, OpenAI API, and AWS IAM, allowing business users to ask sales and marketing questions and receive answers.',
      'Implemented a data governance framework using AWS Glue Data Catalog, Lake Formation LF-Tags, and CloudTrail audit logs to improve data lineage, classification, quality monitoring, and access traceability.',
    ],
    tools: ['Python', 'SQL', 'AWS RDS', 'AWS S3', 'AWS Glue', 'Lake Formation', 'CloudTrail', 'LangChain', 'OpenAI API'],
    outcomes: [
      '500GB legacy migration completed.',
      'Data processing errors down 45%; report refresh efficiency up 57%.',
      'Manual reporting effort reduced by 75%.',
      'NL query interface live for business users.',
    ],
  },
]

export default experienceData
