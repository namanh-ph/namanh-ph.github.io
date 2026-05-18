const projectsData = [
  {
    title: 'Graph-Based AML Triage & Risk Scoring',
    category: 'Production & Full-stack',
    domain: 'Financial Crime',
    shortDescription:
      'End-to-end AML analytics for a banking network, with governed data pipelines, rule and ML risk scoring, graph signals, and an analyst dashboard.',
    overview:
      'A production-style AML platform that turns raw banking transactions into validated alerts, account risk scores, graph-based risk indicators, and investigation cases. It uses a governed Bronze/Silver/Gold pipeline, covers six AML typologies, adds anomaly scoring and a supervised baseline model, and gives investigators a Streamlit dashboard for triage and case review.',
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
    githubLink: 'https://github.com/namanh-ph/graph-aml-case-triage',
  },
  {
    title: 'Rainfall Risk & Parametric Insurance',
    category: 'Production & Full-stack',
    domain: 'Climate Risk / Insurtech',
    shortDescription:
      'Full-stack rainfall risk simulator that converts BoM data into portfolio exposure insights and parametric payout scenarios for Victorian SME and property assets.',
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
    githubLink: 'https://github.com/namanh-ph/rainfall-risk-and-parametric-insurance-simulator',
  },
  {
    title: 'Commitment On Chain (Ethereum dApp)',
    category: 'Modelling & Specialised Tech',
    domain: 'Web3 / Smart Contracts',
    shortDescription:
      'Ethereum accountability dApp where users stake ETH on personal goals, get refunded for finishing on time, or lose the stake to a chosen backup wallet.',
    overview:
      'A Solidity-based accountability dApp that turns personal commitments into on-chain stakes. Users create a goal, lock a small amount of ETH, set a deadline, and choose a backup wallet in advance. Completing the goal before the deadline refunds the stake; missing the deadline sends it to the backup wallet, giving each commitment a clear financial consequence.',
    features: [
      'Solidity smart contract handling stake escrow, deadline logic, and conditional payouts.',
      'Truffle + Ganache development loop for compile, migrate, and local-chain testing.',
      'Mocha + Chai test suite for contract behaviour and edge cases.',
      'Vanilla JS + Web3.js frontend integrated with MetaMask for wallet interaction.',
    ],
    technologies: ['Solidity', 'Ethereum', 'Truffle', 'Ganache', 'Web3.js', 'MetaMask', 'Mocha', 'Chai'],
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
    githubLink: 'https://github.com/namanh-ph/arima-garch-stock-price-volatility-prediction',
  },
  {
    title: 'Tail Risk with GARCH-EVT',
    category: 'Modelling & Specialised Tech',
    domain: 'Econometrics',
    shortDescription:
      'Comparison of standard VaR models with GARCH-EVT to measure extreme downside risk across the ASX 200, BHP, and CBA from 2015 to 2024.',
    overview:
      'A tail-risk modelling project that tests how well different VaR and ES methods capture large downside moves in Australian equities. It compares Historical, Normal, GARCH(1,1)-std, and GARCH-EVT models across the ASX 200, BHP, and CBA using daily returns from 2015 to 2024. The results show GARCH-EVT gives the most reliable 99% VaR estimates, passing both Kupiec and Christoffersen backtests while simpler models tend to underestimate deep-tail losses.',
    features: [
      'Daily prices 2015–2024 for ^AXJO, CBA.AX, and BHP.AX with full return diagnostics.',
      'VaR and Expected Shortfall at 95% and 99% under four model families.',
      'GPD tail estimation on standardised residuals for the GARCH-EVT branch.',
      'Kupiec and Christoffersen backtests for every VaR series.',
      'Quarto report (HTML + PDF) with tables, figures, and diagnostics.',
    ],
    technologies: ['R', 'Quarto', 'rugarch', 'evir'],
    githubLink: 'https://github.com/namanh-ph/market-tail-risk-garch-evt-r',
  },
  {
    title: 'Credit Card Churn Prediction',
    category: 'Modelling & Specialised Tech',
    domain: 'Banking Analytics',
    shortDescription:
      'End-to-end churn modelling for a credit-card portfolio, using IV and z-tests for feature screening, Power BI for customer insight, and PyCaret to compare classifiers.',
    overview:
      'A credit-card churn prediction case study that moves from raw customer data through statistical testing, business analysis, and model evaluation. IV tests are used to screen categorical variables, z-tests assess continuous features, and Power BI dashboards break down customer behaviour across demographics, card usage, credit activity, and transactions. Logistic Regression, SVM, and XGBoost are then compared through PyCaret, with XGBoost performing best while flagged for possible overfitting and further tuning.',
    features: [
      'SQL data preparation and feature pruning.',
      'Information Value (IV) for categorical variables and two-tailed z-tests for continuous ones.',
      'Power BI segmentation across customer overview, card information, credit usage, and transactions.',
      'Logistic Regression, SVM, and XGBoost compared via PyCaret with confusion matrix and ROC review.',
    ],
    technologies: ['Python', 'SQL', 'Excel', 'Power BI', 'PyCaret', 'scikit-learn', 'XGBoost'],
    githubLink: 'https://github.com/namanh-ph/predictive-churn-analysis-banking',
  },
  {
    title: 'Business Case: EON Motor Corporation',
    category: 'BI & Business Consulting',
    domain: 'Executive Reporting',
    shortDescription:
      'Financial performance review for an EV manufacturer, covering profitability trends, cost structure, scenario testing, and forecast-driven recommendations.',
    overview:
      'An executive-focused financial analysis of Eco-Oriented Next-Gen (EON) Motor Corporation. The review breaks down profitability, sales performance, and variable cost behaviour across three business phases: initial rollout, high performance, and recovery. It also tests cost-structure scenarios and recommends a more selective product strategy that balances profit-volume strength, product value, and financial risk.',
    features: [
      'Profitability trends across initial, high-performance, and recovery phases.',
      'Variable cost ratio decomposition and after-tax revenue what-ifs.',
      'Model-level cost & profit breakdown with break-even and PV ratio analysis.',
      'Portfolio recommendation framework balancing risk and product value.',
      'Tableau Prep for wrangling and Tableau for the executive dashboard.',
    ],
    technologies: ['Tableau', 'Tableau Prep'],
    githubLink: 'https://github.com/namanh-ph/business-case-eon-motor-corporation',
  },
  {
    title: 'Learning Journey: Case Studies & Practice',
    category: 'Learning Journey',
    domain: 'Mixed',
    shortDescription:
      'A collection of earlier case studies across customer analytics, SQL, valuation, portfolio optimisation, BI, energy, hospitality, and sequence modelling.',
    overview:
      'A curated set of earlier projects that traces the analytical foundation behind my larger builds. These case studies cover customer segmentation, SQL problem-solving, company valuation, portfolio optimisation, BI storytelling, energy reliability analysis, hospitality analytics, and deep learning for time-series forecasting. They are presented as focused learning projects, each showing a specific method, toolset, or business problem.',
    features: [
      'E-Commerce Online Retail Analysis: RFM analysis with K-Means and hierarchical clustering to group customers into 6 lifecycle segments.',
      '8-Week SQL Challenge: 8 SQL challenges covering multiple case studies.',
      'Company Valuation - DCF Analysis: Valuation of REA Group using DuPont analysis, bottom-up beta, CAPM-based WACC, sensitivity testing, plus a yfinance pipeline of multiple companies.',
      'Portfolio Optimisation with Monte Carlo: portfolio analysis using CAPM, risk-return metrics, correlation review, and random-weight simulation for Sharpe-optimal allocation.',
      'Business Case: ChemCorp Incorporated: Tableau case study on customer mix, market position, product profitability, and divestment recommendations.',
      'Business Case: American Energy Market Regulator: SQL and Tableau analysis of US power outages, focused on outage frequency, duration, energy loss, and provider reliability scoring.',
      'Business Case: Hotel Bookings: SQL and Power BI analysis of overseas visitors, booking channels, seasonality, and cancellation patterns for a Lisbon hotel group.',
      'Stock Price Prediction - LSTM vs Transformer: Comparison of two sequence models on the same stock series, with Transformer reaching a lower MAPE than LSTM.',
    ],
    technologies: ['Python', 'SQL', 'R', 'Excel', 'Power BI', 'Tableau', 'PyTorch', 'scikit-learn', 'yfinance'],
    githubLink: 'https://github.com/namanh-ph/project-showcase',
  },
]

export default projectsData
