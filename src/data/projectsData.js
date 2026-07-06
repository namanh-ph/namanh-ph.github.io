const projectsData = [
  {
    title: 'Graph-Based AML Triage & Risk Scoring',
    category: 'Production & Full-stack',
    domain: 'Financial Crime',
    shortDescription:
      'End-to-end AML analytics for a banking network, with governed data pipelines, rule and ML risk scoring, graph signals, and a dashboard.',
    overview:
      'A production-style AML platform that uses banking transactions to create validated alerts, account risk scores, graph-based risk indicators, and investigation cases. This project uses a Bronze/Silver/Gold pipeline, covers six AML typologies, adds anomaly scoring and a supervised baseline model, and gives investigators a Streamlit dashboard for triage and case review.',
    features: [
      'Bronze / Silver / Gold data architecture with DVC-tracked lineage and Pandera schema validation.',
      'Account, behavioural, jurisdiction, and graph-based feature engineering.',
      'AML rule engine, Isolation Forest anomaly scoring, and composite account risk scoring.',
      'Customer–account–transaction–counterparty network analytics on NetworkX + Neo4j.',
      'Case generation with deterministic evidence packs, analyst lifecycle workflows, and feedback labels.',
      'Supervised baseline models with threshold calibration, drift validation, and model cards.',
      'Streamlit dashboard covering alerts, cases, accounts, graph, model metrics, audit, and validation.',
    ],
    technologies: [
      'Python',
      'Polars',
      'DuckDB',
      'NetworkX',
      'Neo4j',
      'scikit-learn',
      'MLflow',
      'Pandera',
      'Streamlit',
      'DVC',
      'Docker',
      'PostgreSQL',
    ],
    gallery: [
      {
        src: '/images/projects/graph-aml/overview.jpg',
        alt: 'Graph-based AML triage platform overview dashboard',
        caption: 'Platform Overview',
      },
      {
        src: '/images/projects/graph-aml/case-queue.jpg',
        alt: 'Graph-based AML investigation case queue',
        caption: 'Case Queue',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/graph-aml-case-triage',
  },
  {
    title: 'Rainfall Risk & Parametric Insurance',
    category: 'Production & Full-stack',
    domain: 'Climate Risk / Insurtech',
    shortDescription:
      'Full-stack rainfall risk simulator using BoM data to form portfolio exposure insights and parametric payout scenarios for Victorian SME and property assets.',
    overview:
      'A full-stack climate-risk and insurtech platform for analysing how extreme rainfall affects a portfolio of Victorian SME or property assets, and estimating what a parametric insurance product could pay out. It links assets to rainfall stations and LGAs using geospatial logic, builds rainfall features across multiple time windows, scores risk with transparent rules, tests payout sensitivity across triggers and coverage levels, and adds a LightGBM ranking model behind a FastAPI backend and React + Leaflet dashboard.',
    features: [
      'Victorian SME / property portfolio joined to BoM stations and ABS LGA boundaries.',
      'Asset-to-station distance matching and PostGIS spatial joins to LGAs.',
      'Rainfall feature engineering across 1, 3, 7, and 30-day windows.',
      'Rule-based 0–100 risk scoring with risk-band portfolio segmentation.',
      'Parametric payout simulation with threshold and coverage-multiplier sensitivity.',
      'LightGBM risk ranking, MLflow experiment tracking, and a FastAPI service layer.',
      'React + Leaflet dashboard with maps, KPIs, charts, filters, rankings, and a static HTML report export.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'Alembic',
      'PostgreSQL',
      'PostGIS',
      'GeoPandas',
      'LightGBM',
      'MLflow',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Leaflet',
      'Recharts',
    ],
    gallery: [
      {
        src: '/images/projects/rainfall-risk/risk-map.jpg',
        alt: 'Rainfall risk and parametric insurance risk map',
        caption: 'Risk Map',
      },
      {
        src: '/images/projects/rainfall-risk/portfolio-analytics.jpg',
        alt: 'Rainfall risk portfolio analytics dashboard',
        caption: 'Portfolio Analytics',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/rainfall-risk-and-parametric-insurance-simulator',
  },
  {
    title: 'Tail Risk with GARCH-EVT',
    category: 'Modelling & Specialised Tech',
    domain: 'Econometrics',
    shortDescription:
      'Comparison of standard VaR models with GARCH-EVT to measure extreme downside risk across the ASX 200, BHP, and CBA from 2015 to 2024.',
    overview:
      'A tail-risk modelling project that tests how well different VaR and ES methods capture large downside moves in Australian equities. The project compares Historical, Normal, GARCH(1,1)-std, and GARCH-EVT models across the ASX 200, BHP, and CBA using daily returns from 2015 to 2024. The results show GARCH-EVT gives the most reliable 99% VaR estimates, passing both Kupiec and Christoffersen backtests while simpler models tend to underestimate deep-tail losses.',
    features: [
      'Daily prices 2015–2024 for ^AXJO, CBA.AX, and BHP.AX with full return diagnostics.',
      'VaR and Expected Shortfall at 95% and 99% under four model families.',
      'GPD tail estimation on standardised residuals for the GARCH-EVT branch.',
      'Kupiec and Christoffersen backtests for every VaR series.',
      'Quarto report (HTML + PDF) with tables, figures, and diagnostics.',
    ],
    technologies: ['R', 'Quarto', 'rugarch', 'evir'],
    gallery: [
      {
        src: '/images/projects/garch-evt/conditional-volatility.png',
        alt: 'GARCH conditional volatility chart',
        caption: 'GARCH Conditional Volatility',
      },
      {
        src: '/images/projects/garch-evt/var-exceedance-99.png',
        alt: '99 percent value at risk exceedance chart',
        caption: '99% VaR Exceedance',
      },
      {
        src: '/images/projects/garch-evt/violation-ratio-comparison.png',
        alt: 'Value at risk violation ratio comparison chart',
        caption: 'VaR Violation Ratio Comparison',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/market-tail-risk-garch-evt-r',
  },
  {
    title: 'Commitment On Chain (Ethereum dApp)',
    category: 'Modelling & Specialised Tech',
    domain: 'Web3 / Smart Contracts',
    shortDescription:
      'Ethereum accountability dApp that enables users to stake ETH on personal goals, get refunded for finishing on time, or lose the stake to a chosen backup wallet.',
    overview:
      'This is a accountability dApp where users create a goal, lock a small amount of ETH, set a deadline, and choose a backup wallet in advance. Completing the goal before the deadline refunds the stake, but missing the deadline sends it to the backup wallet.',
    features: [
      'Solidity smart contract handling stake escrow, deadline logic, and conditional payouts.',
      'Truffle + Ganache development loop for compile, migrate, and local-chain testing.',
      'Mocha + Chai test suite for contract behaviour and edge cases.',
      'Vanilla JS + Web3.js frontend integrated with MetaMask for wallet interaction.',
    ],
    technologies: ['Solidity', 'Ethereum', 'Truffle', 'Ganache', 'Web3.js', 'MetaMask', 'Mocha', 'Chai'],
    gallery: [
      {
        src: '/images/projects/commitment-on-chain/introduction.jpg',
        alt: 'Commitment On Chain website introduction screen',
        caption: 'Website Introduction',
      },
      {
        src: '/images/projects/commitment-on-chain/create-goal.jpg',
        alt: 'Commitment On Chain create goal screen',
        caption: 'Create Goal',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/blockchain-app-etherium-solidity',
  },
  {
    title: 'ARIMA-GARCH Volatility Forecasting',
    category: 'Modelling & Specialised Tech',
    domain: 'Quantitative Finance',
    shortDescription:
      'Forecast using ARIMA and GJR-GARCH models to determine monthly price changes and return volatility for a Vietnamese listed stock.',
    overview:
      'A stock volatility forecasting project focused on monthly price changes and percentage returns for a Vietnamese listed equity. It builds ARIMA and GJR-GARCH models, then combines them into an ARIMA-GARCH workflow to capture both the expected movement in returns and the changing volatility patterns around them.',
    features: [
      'Monthly price-change and percentage-return analysis on a Vietnamese listed equity.',
      'ARIMA model selection for the conditional mean component.',
      'GJR-GARCH for asymmetric conditional volatility with leverage effects.',
      'Combined ARIMA-GARCH prediction visualisation for price and return paths.',
    ],
    technologies: ['Python', 'pandas', 'NumPy', 'statsmodels', 'arch', 'Matplotlib'],
    gallery: [
      {
        src: '/images/projects/arima-garch/price-change-model.png',
        alt: 'ARIMA-GARCH model output for stock price changes',
        caption: 'ARIMA-GARCH Model for Price Change',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/arima-garch-stock-price-volatility-prediction',
  },
  {
    title: 'Credit Card Churn Prediction',
    category: 'Modelling & Specialised Tech',
    domain: 'Banking Analytics',
    shortDescription:
      'End-to-end churn modelling for a credit-card portfolio, using IV and z-tests for feature screening, Power BI for customer insight, and PyCaret to compare classifiers.',
    overview:
      'A credit-card churn prediction case study that utilises statistical testing, business analysis, and model evaluation. IV tests are used to screen categorical variables, z-tests assess continuous features, and Power BI dashboards break down customer behaviour across demographics, card usage, credit activity, and transactions. Logistic Regression, SVM, and XGBoost are then compared through PyCaret, with XGBoost performing best while flagged for possible overfitting and further tuning.',
    features: [
      'SQL data preparation and feature pruning.',
      'Information Value (IV) for categorical variables and two-tailed z-tests for continuous ones.',
      'Power BI segmentation across customer overview, card information, credit usage, and transactions.',
      'Logistic Regression, SVM, and XGBoost compared via PyCaret with confusion matrix and ROC review.',
    ],
    technologies: ['Python', 'SQL', 'Excel', 'Power BI', 'PyCaret', 'scikit-learn', 'XGBoost'],
    gallery: [
      {
        src: '/images/projects/credit-card-churn/customer-overview.png',
        alt: 'Credit card customer overview dashboard',
        caption: 'Customer Overview Dashboard',
      },
      {
        src: '/images/projects/credit-card-churn/xgboost-confusion-matrix.png',
        alt: 'XGBoost confusion matrix for credit card churn prediction',
        caption: 'XGBoost Confusion Matrix',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/predictive-churn-analysis-banking',
  },
  {
    title: 'Business Case: EON Motor Corporation',
    category: 'BI & Business Consulting',
    domain: 'Executive Reporting',
    shortDescription:
      'Financial performance review for an EV manufacturer, covering profitability trends, cost structure, scenario testing, and forecast-driven recommendations.',
    overview:
      'This is an executive-level financial analysis report of Eco-Oriented Next-Gen (EON) Motor Corporation. The review breaks down profitability, sales performance, and variable cost behaviour across three business phases: initial rollout, high performance, and recovery. It also tests cost-structure scenarios and recommends a more selective product strategy that balances profit-volume strength, product value, and financial risk.',
    features: [
      'Profitability trends across initial, high-performance, and recovery phases.',
      'Variable cost ratio decomposition and after-tax revenue what-ifs.',
      'Model-level cost & profit breakdown with break-even and PV ratio analysis.',
      'Portfolio recommendation framework balancing risk and product value.',
      'Tableau Prep for wrangling and Tableau for the executive dashboard.',
    ],
    technologies: ['Tableau', 'Tableau Prep'],
    gallery: [
      {
        src: '/images/projects/eon-motor/financial-health-overview.png',
        alt: 'EON Motor financial health overview dashboard',
        caption: 'Financial Health Overview',
      },
      {
        src: '/images/projects/eon-motor/model-financial-performance.png',
        alt: 'EON Motor model financial performance dashboard',
        caption: 'Model Financial Performance',
      },
      {
        src: '/images/projects/eon-motor/model-cost-profit-breakdown.png',
        alt: 'EON Motor cost and profit breakdown dashboard',
        caption: 'Model Cost & Profit Breakdown',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/business-case-eon-motor-corporation',
  },
  {
    title: 'Learning Journey: Case Studies & Practice',
    category: 'Learning Journey',
    domain: 'Mixed',
    shortDescription:
      'A collection of earlier case studies across customer analytics, SQL, valuation, portfolio optimisation, BI, energy, hospitality, and sequence modelling.',
    overview:
      'A curated set of earlier projects that traces the analytical foundation behind my larger builds. These case studies cover customer segmentation, SQL problem-solving, company valuation, portfolio optimisation, BI storytelling, energy reliability analysis, hospitality analytics, and deep learning for time-series forecasting.',
    features: [
      'E-Commerce Online Retail Analysis: RFM analysis with K-Means and hierarchical clustering to group customers into 6 lifecycle segments.',
      '8-Week SQL Challenge: 8 SQL challenges covering multiple case studies.',
      'Company Valuation - DCF Analysis: Valuation of a listed Australian company using DuPont analysis, bottom-up beta, CAPM-based WACC, sensitivity testing, and stress-test it against multiple scenarios.',
      'Portfolio Optimisation with Monte Carlo: portfolio analysis using CAPM, risk-return metrics, correlation review, and random-weight simulation for Sharpe-optimal allocation.',
      'Business Case: ChemCorp Incorporated: Tableau case study on customer mix, market position, product profitability, and divestment recommendations.',
      'Business Case: American Energy Market Regulator: SQL and Tableau analysis of US power outages, focused on outage frequency, duration, energy loss, and provider reliability scoring.',
      'Business Case: Hotel Bookings: SQL and Power BI analysis of overseas visitors, booking channels, seasonality, and cancellation patterns for a Lisbon hotel group.',
      'Stock Price Prediction - LSTM vs Transformer: Comparison of two sequence models on the same stock series, with Transformer reaching a lower MAPE than LSTM.',
    ],
    technologies: ['Python', 'SQL', 'R', 'Excel', 'Power BI', 'Tableau', 'PyTorch', 'scikit-learn', 'yfinance'],
    gallery: [
      {
        src: '/images/projects/learning-journey/rfm-retail-analysis.png',
        alt: 'RFM retail customer analysis dashboard',
        caption: 'RFM Retail Analysis',
      },
      {
        src: '/images/projects/learning-journey/portfolio-monte-carlo.png',
        alt: 'Portfolio construction and Monte Carlo simulation analysis',
        caption: 'Portfolio Construction and Monte Carlo Simulation',
      },
      {
        src: '/images/projects/learning-journey/hotel-analysis.png',
        alt: 'Hotel bookings business analysis dashboard',
        caption: 'Business Case: Hotel Analysis',
      },
    ],
    githubLink: 'https://github.com/namanh-ph/project-showcase',
  },
]

export default projectsData
