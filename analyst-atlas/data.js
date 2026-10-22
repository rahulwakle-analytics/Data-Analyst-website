/** Edit course content here. Each tool has ten lessons, five quiz questions and practice resources. */
export const courses = [
  {
    id:'excel',name:'Excel',level:'Beginner',hours:18,color:'#16835d',symbol:'▦',tagline:'Turn messy spreadsheets into reliable decisions.',
    description:'Excel is the fastest route from raw business exports to reconciled metrics, summaries and stakeholder-ready reporting.',
    lessons:[
      ['Workbook foundations', '35 min', 'Structure raw data as an Excel Table, freeze headers, apply correct data types and avoid merged cells in analytical ranges.', 'Select your data and press Ctrl+T; name the table Sales. Structured references expand when new rows arrive.', '=SUM(Sales[Revenue])'],
      ['Essential formulas', '55 min', 'Use SUMIFS, COUNTIFS, IF, IFERROR and absolute references to build repeatable business rules.', 'SUMIFS calculates revenue for a selected region without modifying source records.', '=SUMIFS(Sales[Revenue],Sales[Region],"West")'],
      ['XLOOKUP and joins', '45 min', 'Match product, customer and employee identifiers across tables without brittle column offsets.', 'Always match on a stable unique key; set a not-found message for easier validation.', '=XLOOKUP(A2,Products[SKU],Products[Category],"Missing")'],
      ['Dates and text cleaning', '45 min', 'Standardize dates, remove extra spaces and extract parts of identifiers before reporting.', 'TRIM handles repeated spaces and TEXT formats dates for display; store actual dates as dates.', '=TRIM(CLEAN(A2))'],
      ['Pivot tables', '60 min', 'Aggregate transactions by region, period and category using refreshable PivotTables.', 'Place Region in Rows, Month in Columns and Revenue in Values; check Sum rather than Count.', 'Rows: Region | Columns: Month | Values: Sum of Revenue'],
      ['Business charts', '45 min', 'Choose bar charts for category comparison, lines for trends and scatter charts for relationships.', 'Avoid dual axes unless scales are unmistakably labeled. Sort bars logically.', 'Chart: Monthly revenue → Line'],
      ['Power Query', '75 min', 'Import files, promote headers, set column types, remove errors and append monthly exports.', 'Load from Folder, transform one sample file, and refresh when new exports arrive.', 'Transform → Data Type → Date'],
      ['Data validation', '40 min', 'Prevent bad inputs with validation lists, duplicate checks and conditional formatting.', 'Highlight duplicate invoice IDs, but inspect business rules before removing legitimate repeated lines.', '=COUNTIF($A:$A,A2)>1'],
      ['KPI dashboard', '90 min', 'Build a focused dashboard showing Revenue, Orders, Average Order Value and monthly growth.', 'AOV equals revenue divided by distinct orders, not number of line items.', '=IFERROR(Revenue/Orders,0)'],
      ['QA and handoff', '50 min', 'Reconcile totals to source systems, document refresh steps and protect formula cells.', 'Check row counts, date coverage and filter states before sending a report.', 'Check: source total = dashboard total']
    ],
    demo:'excel',snippet:'=SUMIFS(Sales[Revenue], Sales[Region], "West")',
    cheats:[['SUMIFS','Conditional sum'],['COUNTIFS','Conditional count'],['XLOOKUP','Lookup by key'],['IFERROR','Friendly fallback'],['FILTER','Dynamic row subset'],['EOMONTH','Period boundaries']],
    datasets:[['Sample Superstore','Retail orders and margin','https://www.kaggle.com/datasets/vivek468/superstore-dataset-final'],['Microsoft financial sample','Revenue and segment analysis','https://learn.microsoft.com/en-us/power-bi/create-reports/sample-financial-download']],
    quiz:[['Which function sums revenue only for the West region?',['COUNTIF','SUMIFS','LEFT'],1,'SUMIFS supports conditional aggregation.'],['A good data table should have:',['Merged headers','One header row and typed columns','Blank separator rows'],1,'Consistent tabular structure supports pivots and refresh.'],['XLOOKUP is typically used to:',['Join data by matching keys','Animate charts','Format dates'],0,'It retrieves a corresponding value for a lookup key.'],['Average Order Value is:',['Revenue / Orders','Orders / Revenue','Revenue × Orders'],0,'AOV is total revenue divided by order count.'],['After updating a Power Query source, you should:',['Refresh the query','Rebuild all formulas','Delete the table'],0,'Refresh reapplies recorded transformation steps.']]
  },
  {
    id:'sql',name:'SQL',level:'Beginner → Advanced',hours:24,color:'#3278d5',symbol:'⌘',tagline:'Ask precise questions of large datasets.',
    description:'SQL gives analysts the language to select, join, aggregate and validate operational data at its source.',
    lessons:[
      ['SELECT and FROM','35 min','Retrieve only required columns instead of SELECT * in production analytical queries.','Choose named fields from an orders table.','SELECT order_id, region, revenue FROM orders;'],
      ['WHERE and sorting','40 min','Filter rows with comparisons, IN, BETWEEN and ORDER BY.','Apply filters before aggregation; use ISO date literals.','SELECT * FROM orders WHERE revenue >= 100 ORDER BY revenue DESC;'],
      ['Aggregations','50 min','Use SUM, AVG, COUNT and COUNT(DISTINCT) with correct grain.','Revenue by region needs GROUP BY region.','SELECT region, SUM(revenue) AS sales FROM orders GROUP BY region;'],
      ['JOINs','70 min','Combine facts and dimensions with INNER and LEFT JOIN without duplicating measures.','Validate join cardinality before trusting totals.','SELECT o.order_id, c.segment FROM orders o LEFT JOIN customers c ON o.customer_id=c.customer_id;'],
      ['CASE and nulls','50 min','Build segments with CASE; handle missing values using COALESCE.','A null is unknown, not automatically zero.','SELECT CASE WHEN revenue >= 500 THEN \'High\' ELSE \'Standard\' END AS band FROM orders;'],
      ['HAVING and subqueries','55 min','Filter aggregated groups with HAVING and organize comparisons with subqueries.','WHERE filters rows; HAVING filters grouped results.','SELECT region FROM orders GROUP BY region HAVING SUM(revenue)>1000;'],
      ['CTEs','60 min','Use WITH clauses to make multi-step transformations reviewable.','Name transformations around their business purpose.','WITH sales AS (SELECT region,SUM(revenue) total FROM orders GROUP BY region) SELECT * FROM sales;'],
      ['Window functions','80 min','Use ROW_NUMBER, LAG and SUM OVER for rankings, comparisons and running totals.','Windows retain individual rows instead of collapsing them.','SELECT region, revenue, ROW_NUMBER() OVER (PARTITION BY region ORDER BY revenue DESC) AS rn FROM orders;'],
      ['Date analysis','65 min','Group by calendar periods and compare current versus previous periods.','Date functions differ across SQL engines; check your database dialect.','SELECT order_date, SUM(revenue) FROM orders GROUP BY order_date;'],
      ['Optimization and QA','80 min','Inspect execution plans, push selective filters early, index join columns where appropriate and validate totals.','Measure performance with EXPLAIN; avoid assuming an index always helps.','EXPLAIN SELECT region, SUM(revenue) FROM orders GROUP BY region;']
    ],demo:'sql',snippet:'SELECT region, SUM(revenue) AS sales\nFROM orders\nGROUP BY region\nORDER BY sales DESC;',
    cheats:[['SELECT','Pick columns'],['WHERE','Filter rows'],['GROUP BY','Aggregate by grain'],['LEFT JOIN','Keep left-side rows'],['HAVING','Filter groups'],['LAG','Previous-row comparison']],
    datasets:[['Chinook database','Music store relational schema','https://github.com/lerocha/chinook-database'],['BigQuery public datasets','Large public analytical tables','https://cloud.google.com/bigquery/public-data']],
    quiz:[['Which clause groups rows for SUM?',['ORDER BY','GROUP BY','WHERE'],1,'GROUP BY sets the aggregation grain.'],['Which join retains every left-side row?',['INNER JOIN','LEFT JOIN','CROSS JOIN'],1,'LEFT JOIN includes unmatched rows on the left.'],['Which expression ranks rows within a region?',['ROW_NUMBER() OVER (PARTITION BY region ORDER BY revenue DESC)','COUNT(*)','COALESCE()'],0,'ROW_NUMBER is a window function.'],['WHERE vs HAVING: HAVING filters:',['Raw rows','Aggregated groups','Column names'],1,'HAVING evaluates grouped results.'],['A one-to-many join can:',['Increase row counts','Always reduce row counts','Never affect totals'],0,'One matching left row can become many joined rows.']]
  },
  {
    id:'python',name:'Python',level:'Intermediate',hours:28,color:'#a57714',symbol:'{ }',tagline:'Clean, explore and automate data with code.',
    description:'Python turns repeatable data preparation, exploration and visualization into auditable scripts and reusable workflows.',
    lessons:[
      ['Python essentials','50 min','Practice variables, lists, dictionaries, loops and functions used in analysis.','Favor clear naming and small functions over clever one-liners.','total = sum([120, 180, 250])'],
      ['Pandas DataFrames','65 min','Read CSVs, inspect dtypes, select rows and columns, and preview distributions.','Inspect shape, info and head before transforming.','df = pd.read_csv("orders.csv")'],
      ['Filtering and sorting','55 min','Select records with boolean masks and sort_values.','Use loc for transparent conditional selections.','west = df.loc[df["region"] == "West"]'],
      ['Missing data','70 min','Measure nulls and use dropna or fillna only when assumptions are defensible.','Record why missing values occur before imputing them.','df.isna().sum()'],
      ['Merging data','70 min','Merge dataframes with explicit keys and validation of relationship cardinality.','validate="many_to_one" can catch duplicate dimension keys.','df.merge(customers, on="customer_id", how="left", validate="many_to_one")'],
      ['Groupby and pivots','70 min','Summarize sales by segment and month using groupby and pivot_table.','Reset the index for clean downstream exports.','df.groupby("region", as_index=False)["revenue"].sum()'],
      ['Exploratory analysis','85 min','Examine distributions, outliers, correlations and data quality before making claims.','Correlation is not evidence of causation.','df[["revenue", "discount"]].describe()'],
      ['Matplotlib and Seaborn','80 min','Build line, bar and distribution charts with appropriate labels and scales.','Choose a chart based on the question, not decoration.','ax = df.plot(x="month", y="revenue", kind="line")'],
      ['Automating reports','90 min','Combine file loading, cleaning, summary tables and Excel exports into a function.','Save outputs predictably; log checks for row counts and required columns.','summary.to_excel("monthly_summary.xlsx", index=False)'],
      ['Reproducible workflows','75 min','Use virtual environments, requirements and modular scripts for consistent reporting.','Never hardcode credentials in notebooks.','python -m venv .venv']
    ],demo:'python',snippet:'import pandas as pd\nsummary = df.groupby("region", as_index=False)["revenue"].sum()\nprint(summary)',
    cheats:[['read_csv','Load a CSV'],['loc','Filter rows/columns'],['isna','Find missing values'],['merge','Join DataFrames'],['groupby','Aggregate records'],['to_excel','Export a workbook']],
    datasets:[['Palmer Penguins','Clean EDA practice','https://github.com/allisonhorst/palmerpenguins'],['UCI Online Retail','Transactional customer behavior','https://archive.ics.uci.edu/dataset/352/online+retail']],
    quiz:[['Which Pandas function reads a CSV?',['read_csv','to_csv','merge'],0,'read_csv loads CSV data into a DataFrame.'],['Which method groups by region?',['groupby','fillna','dropna'],0,'groupby produces grouped objects for aggregation.'],['What does isna() identify?',['Missing values','Duplicate files','Chart types'],0,'isna detects null-like entries.'],['Which library is commonly used for static Python plots?',['Matplotlib','Requests','pathlib'],0,'Matplotlib is a foundational plotting library.'],['For a repeatable script, passwords should:',['Be hardcoded','Be stored in environment variables or a secret manager','Be printed in logs'],1,'Keep sensitive configuration outside source code.']]
  },
  {
    id:'powerbi',name:'Power BI',level:'Intermediate',hours:26,color:'#98701b',symbol:'▥',tagline:'Model metrics. Tell the business story.',
    description:'Power BI combines Power Query, relational modeling, DAX and interactive reporting into governed business intelligence.',
    lessons:[
      ['Power BI workflow','45 min','Understand Desktop, Power Query, semantic models, reports and the Power BI Service.','Start with the question and grain, then choose visuals.','Source → Transform → Model → DAX → Report'],
      ['Power Query shaping','70 min','Set types, remove errors, merge/append sources and build refreshable transformations.','Apply consistent key formats before merging.','Power Query: Transform Data → Change Type'],
      ['Star schema modeling','85 min','Build a fact table and conformed dimensions with one-to-many relationships.','Keep filtering predictable with single-direction relationships where possible.','DimDate[Date] 1 → * FactSales[OrderDate]'],
      ['DAX fundamentals','75 min','Create measures with SUM, DISTINCTCOUNT, DIVIDE and CALCULATE.','Measures respond to filter context; columns are calculated during refresh.','Revenue = SUM(FactSales[Revenue])'],
      ['Filter context','85 min','Use CALCULATE and REMOVEFILTERS carefully for percent-of-total metrics.','Understand row context versus filter context.','Share % = DIVIDE([Revenue], CALCULATE([Revenue], REMOVEFILTERS(DimRegion)))'],
      ['Time intelligence','80 min','Create a marked date table and period comparisons that honor calendar design.','Check that your model has a contiguous date table.','LY Revenue = CALCULATE([Revenue], SAMEPERIODLASTYEAR(DimDate[Date]))'],
      ['Visual best practices','75 min','Build KPIs, trends, segment comparisons and accessible tooltips.','Limit unnecessary visuals; keep metric units visible.','Visual: Card Revenue + Line Trend + Category Bar'],
      ['Interactions and drillthrough','65 min','Configure slicer interactions, tooltips, drillthrough and bookmarks intentionally.','Test every filter state and empty-state behavior.','Format → Edit interactions'],
      ['Performance and validation','75 min','Reduce cardinality, avoid excessive calculated columns and profile visuals.','Validate totals against source reports at the same grain.','View → Performance analyzer'],
      ['Publish and security','70 min','Publish to workspaces, set refresh, review permissions and configure RLS when required.','RLS filters report data by viewer; sharing access is configured separately.','Modeling → Manage roles']
    ],demo:'dashboard',snippet:'Revenue = SUM(FactSales[Revenue])\nAOV = DIVIDE([Revenue], DISTINCTCOUNT(FactSales[OrderID]))',
    cheats:[['CALCULATE','Modify filter context'],['DIVIDE','Safe division'],['DISTINCTCOUNT','Unique entity count'],['SUMX','Row-wise expression sum'],['RELATED','Fetch related value'],['SAMEPERIODLASTYEAR','Prior-year date set']],
    datasets:[['Microsoft sample datasets','Reports and semantic modeling','https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets'],['AdventureWorks','Star schema practice','https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure']],
    quiz:[['Where is DAX measure logic evaluated?',['In filter context','Only in Power Query','Only in SQL'],0,'Measures are evaluated within the current filter context.'],['A star schema typically has:',['Fact and dimension tables','Only one flat table','No relationships'],0,'Separating dimensions and facts improves clarity.'],['Why use DIVIDE?',['Safely handle division by zero','Connect to SQL','Import files'],0,'DIVIDE handles zero-denominator cases gracefully.'],['Which tool can inspect visual query times?',['Performance analyzer','Format painter','Bookmarks'],0,'Performance analyzer helps find expensive visuals.'],['RLS is used to:',['Restrict rows by role','Change chart colors','Publish a public link'],0,'Row-level security applies role-specific data filters.']]
  },
  {
    id:'tableau',name:'Tableau',level:'Intermediate',hours:22,color:'#6e62bd',symbol:'◈',tagline:'Make patterns obvious and exploration intuitive.',
    description:'Tableau helps analysts build interactive visual explanations with calculated fields, parameters, dashboards and guided stories.',
    lessons:[
      ['Connect and inspect','45 min','Connect to spreadsheets and databases; distinguish dimensions and measures.','Check column roles and default aggregation after connecting.','Connect → Microsoft Excel → Sheet'],
      ['Marks and shelves','55 min','Use Rows, Columns, Marks and Show Me to encode comparisons clearly.','Measure relationships using scatterplots rather than unrelated bars.','Columns: Order Date | Rows: SUM(Sales)'],
      ['Filtering and grouping','65 min','Apply dimension, measure, context and relative-date filters appropriately.','Order of operations can affect reported metrics.','Filters: Region = West'],
      ['Calculated fields','75 min','Write row-level expressions and aggregate calculations with consistent granularity.','Never mix aggregate and non-aggregate expressions accidentally.','SUM([Profit]) / SUM([Sales])'],
      ['Date and table calculations','70 min','Build running sums and percent differences, confirming the addressing direction.','Table calculations depend on visible table layout.','RUNNING_SUM(SUM([Sales]))'],
      ['Level of detail','85 min','Use FIXED expressions to compute KPIs at a defined entity grain.','Context filters affect FIXED LOD evaluation.','{ FIXED [Customer ID] : SUM([Sales]) }'],
      ['Dashboard layout','75 min','Build responsive tiled containers and establish clear visual priority.','Place key comparisons near the top and minimize decoration.','Dashboard → New Dashboard'],
      ['Actions and parameters','80 min','Use filter actions, highlight actions and parameters to power guided exploration.','Include an obvious reset behavior for interactions.','Dashboard → Actions → Add Action'],
      ['Storytelling','65 min','Sequence views around a question, key finding and business action.','Annotation should explain a takeaway, not repeat a label.','Story: Context → Drivers → Recommendation'],
      ['Publish and QA','65 min','Check extract freshness, permissions, mobile layouts and accessible color contrast.','Test on published view, not only in authoring.','Server → Publish Workbook']
    ],demo:'dashboard',snippet:'// Calculated field: Profit Margin\nSUM([Profit]) / SUM([Sales])',
    cheats:[['SUM([Sales])','Aggregate sales'],['IF / THEN / END','Conditional logic'],['FIXED LOD','Set calculation grain'],['RUNNING_SUM','Cumulative metric'],['DATEPART','Date component'],['Parameter','User-controlled input']],
    datasets:[['Sample Superstore','Orders, categories and regions','https://help.tableau.com/current/pro/desktop/en-us/exampleconnections.htm'],['Tableau public resources','Community datasets and visualizations','https://public.tableau.com/']],
    quiz:[['What are dimensions used for?',['Segmenting the view','Only numeric sums','Publishing workbooks'],0,'Dimensions establish categorical detail.'],['What does FIXED LOD control?',['Calculation level of detail','Font size','Dashboard width'],0,'FIXED defines the grain independently of many view dimensions.'],['Which feature can filter another view when clicked?',['Dashboard filter action','Workbook title','Axis label'],0,'Dashboard actions connect interactions between sheets.'],['Profit margin should usually be:',['SUM(Profit)/SUM(Sales)','SUM(Profit)/COUNT(Region)','COUNT(Sales)'],0,'Ratio of aggregates correctly weights transactions.'],['Before publishing, check:',['Extract refresh and permissions','Only background color','Number of animations'],0,'Data freshness and access are operational essentials.']]
  }
];
export const demoOrders = [
  {id:1001,region:'West',category:'Technology',revenue:860},
  {id:1002,region:'East',category:'Furniture',revenue:420},
  {id:1003,region:'South',category:'Office Supplies',revenue:195},
  {id:1004,region:'West',category:'Furniture',revenue:540},
  {id:1005,region:'North',category:'Technology',revenue:730},
  {id:1006,region:'East',category:'Technology',revenue:310},
  {id:1007,region:'South',category:'Furniture',revenue:625},
  {id:1008,region:'West',category:'Office Supplies',revenue:175}
];
export const chartDatasets={revenue:{label:'Revenue ($k)',labels:['Jan','Feb','Mar','Apr','May','Jun'],values:[38,52,46,67,63,84]},users:{label:'Active users (k)',labels:['Jan','Feb','Mar','Apr','May','Jun'],values:[24,32,41,48,59,73]},orders:{label:'Orders (hundreds)',labels:['Jan','Feb','Mar','Apr','May','Jun'],values:[31,43,39,58,54,69]}};
// Extended instructional guidance: each entry is [detailed explanation, worked example].
export const lessonGuides = {
  "excel": [
    [
      "An analytical workbook should store one record per row and one variable per column. Format dates as real dates and amounts as numbers, because text-formatted amounts break sums.",
      "If Sales has 120 transaction rows, Ctrl+T creates a growing table; adding row 121 makes SUM(Sales[Revenue]) include it automatically."
    ],
    [
      "SUMIFS adds numbers only where conditions match; COUNTIFS counts matching records. Use $ to lock a reference when copying formulas, and IFERROR only when you know how missing results should be handled.",
      "With West revenue of 500, 700 and East revenue of 300, SUMIFS for West returns 1,200."
    ],
    [
      "XLOOKUP searches a key column and returns a value from its corresponding row. Clean identifiers first and check duplicates: repeated SKU codes can lead to ambiguous lookups.",
      "If A2 is SKU-17 and the Products table maps SKU-17 to Footwear, XLOOKUP returns Footwear."
    ],
    [
      "TRIM removes ordinary extra spaces, CLEAN removes many nonprinting characters, and VALUE or DATEVALUE can convert correctly structured text. Test locale-dependent dates before conversion.",
      "An exported value '  Pune   Store ' becomes 'Pune Store' after TRIM."
    ],
    [
      "PivotTables summarize detailed transactions without rewriting the source. Rows define categories, Columns split periods and Values set aggregation; refresh after underlying data changes.",
      "With West sales of 400 and 600 in June, a PivotTable shows West/June = 1,000 when Revenue is summed."
    ],
    [
      "Choose charts based on the question rather than decoration. Bars compare categories, lines explain time sequences, and scatter plots compare numeric variables. Include units and meaningful axes.",
      "Six monthly revenue totals belong on a line chart; revenue by five stores is clearer as a sorted bar chart."
    ],
    [
      "Power Query is a repeatable ETL workflow: extract files, transform columns, then load cleaned tables. Apply type conversions before calculations and confirm append inputs share the same column meanings.",
      "Drop a new October sales file into a folder and use Refresh to append it to January–September exports."
    ],
    [
      "Validation prevents avoidable mistakes at entry time, while conditional formatting highlights exceptions after data is entered. Never assume every duplicate invoice ID is invalid: invoices can have multiple lines.",
      "Configure a Status dropdown with Open, Closed and On Hold to prevent inconsistent spellings."
    ],
    [
      "Define each KPI with its numerator, denominator and period before designing visuals. Distinct orders are essential when each order contains multiple product lines.",
      "Revenue 50,000 across 200 distinct orders gives AOV 250, even if there are 430 line items."
    ],
    [
      "Good dashboards must reconcile to source exports and document refresh ownership. Test filters, blanks, duplicate keys and unexpected date gaps before sharing.",
      "Compare a source-system total of 125,400 with the dashboard total; investigate any mismatch before publication."
    ]
  ],
  "sql": [
    [
      "SELECT chooses output columns and FROM specifies the source relation. Naming only necessary fields reduces data transfer and documents the purpose of a report.",
      "SELECT order_id, region FROM orders returns those two columns for every order."
    ],
    [
      "WHERE filters source rows before aggregation and ORDER BY determines displayed sort order. Use inclusive BETWEEN carefully for timestamps; half-open date ranges avoid missing late-night records.",
      "WHERE revenue >= 100 keeps 150 and 200 but excludes 60; ORDER BY revenue DESC puts 200 first."
    ],
    [
      "Aggregations summarize records at a chosen grain. GROUP BY sets that grain, whereas COUNT(DISTINCT order_id) prevents multiple lines of one order inflating order counts.",
      "West orders with revenue 100 and 250 produce SUM(revenue) = 350 for West."
    ],
    [
      "JOIN combines tables by matching keys. A LEFT JOIN preserves all left-side rows, but duplicate dimension keys can multiply facts, so validate row counts and totals after joining.",
      "Two orders for customer C1 join to one customers row for C1 without changing order count."
    ],
    [
      "CASE maps values into business-defined groups and COALESCE substitutes a fallback for NULL. NULL means unknown or absent; only replace it with zero if the metric semantics justify that choice.",
      "A 650 transaction maps to High, while a 200 transaction maps to Standard."
    ],
    [
      "WHERE removes records before grouping; HAVING evaluates aggregates after grouping. Subqueries help calculate comparison values without hardcoding numbers.",
      "Regions with totals 750 and 1,300: HAVING SUM(revenue)>1000 retains only the second."
    ],
    [
      "CTEs named with WITH divide large queries into readable logical stages. They improve maintainability but are not guaranteed to improve performance; test the execution plan.",
      "Create a monthly_sales CTE that aggregates orders, then SELECT only the three highest-revenue months."
    ],
    [
      "Window functions compute a value across related rows without collapsing them. PARTITION BY defines groups; ORDER BY determines sequence, which must be deterministic for stable ranking.",
      "In West, revenues 500, 300 and 200 receive ROW_NUMBER values 1, 2 and 3 when sorted descending."
    ],
    [
      "Date grouping allows daily, monthly and year-over-year comparisons. Use the database's actual date functions and a calendar table when reporting fiscal periods.",
      "Summing all orders dated in April produces April sales; LAG can compare April with March."
    ],
    [
      "First confirm query correctness, then inspect EXPLAIN and improve the expensive operations. Indexes may help selective filters and joins, but indexing every column can slow writes and consume storage.",
      "If a report scans 10 million rows daily, inspect the plan before changing indexes."
    ]
  ],
  "python": [
    [
      "Python scripts run statements in order; variables store values and functions package reusable logic. Use descriptive names and test small inputs before processing large files.",
      "Set revenue = 1500 and orders = 6; revenue / orders produces AOV 250."
    ],
    [
      "A DataFrame is a labeled, column-oriented table. Inspect shape, dtypes, head and descriptive statistics before assuming that imported CSV columns are reliable.",
      "pd.read_csv('orders.csv') creates a DataFrame; df.head() previews its first five rows."
    ],
    [
      "Boolean masks select records based on conditions, while sort_values orders the resulting DataFrame. Combine masks with & and parentheses, not Python's scalar and.",
      "df[df['revenue'] > 500] keeps 650 and 900 and removes 200."
    ],
    [
      "Missing values should be measured before correction. Use dropna for truly unusable records or fillna with a justified rule; do not silently fill every missing sale with zero.",
      "If three of 100 customer ages are missing, report 3% missingness before filling them with a documented median."
    ],
    [
      "merge combines datasets using keys; validate the relationship with the validate argument where possible. Compare row counts before and after to identify unexpected duplicates.",
      "Joining orders to a unique product table on sku attaches category names while retaining each order row."
    ],
    [
      "groupby aggregates records within categories. Specify the column to aggregate and its operation to avoid misleading totals and make outputs reusable.",
      "Orders of 200 and 300 in West produce revenue 500 for West after groupby('region')['revenue'].sum()."
    ],
    [
      "EDA explores distributions, outliers and relationships before modeling or reporting. Distinguish exploratory patterns from causal explanations; document anomalies for business review.",
      "A histogram of order_value reveals that most orders fall below 500 with a few above 5,000."
    ],
    [
      "Matplotlib controls plots explicitly, while Seaborn adds convenient statistical defaults. Label axes, choose suitable scales and avoid crowded legends.",
      "Plot month versus total revenue as a line chart and label the y-axis 'Revenue (₹)'."
    ],
    [
      "Automation is most valuable for repeatable jobs with predictable inputs. Parameterize paths, validate required columns, log failures and ensure reruns do not double count data.",
      "A daily script reads new orders, refreshes summary tables and saves a date-stamped report."
    ],
    [
      "Reproducibility means another analyst can run the same code and obtain comparable outputs. Pin dependencies, fix random seeds where applicable and separate input, processing and output stages.",
      "Save requirements.txt and a README describing how to regenerate the monthly sales summary."
    ]
  ],
  "powerbi": [
    [
      "Power BI Desktop connects to data, transforms it, models relationships and builds reports. Power BI Service distributes published semantic models and reports to authorized audiences.",
      "Import orders, relate them to products and create a Revenue by Category report before publishing."
    ],
    [
      "Power Query transforms data before it enters the model. Rename fields, fix types, remove irrelevant columns and preserve reusable transformations rather than editing source files by hand.",
      "Convert OrderDate from text into a Date field and remove an unused export notes column."
    ],
    [
      "A star schema places numeric events in fact tables and descriptive attributes in dimension tables. Set relationships according to business keys and avoid ambiguous filter paths.",
      "FactSales relates many sales rows to one DimProduct record per ProductID."
    ],
    [
      "DAX measures evaluate at query time under filter context, whereas calculated columns store values for every row at refresh. Start with explicit base measures.",
      "Total Revenue = SUM(FactSales[Revenue]); a region slicer automatically changes the displayed amount."
    ],
    [
      "Filter context comes from slicers, visual axes, relationships and DAX expressions. CALCULATE modifies the context in which an expression is evaluated.",
      "CALCULATE([Total Revenue], DimRegion[Region]='West') returns West revenue even on an all-region card."
    ],
    [
      "Time intelligence compares periods using a correctly configured date table with continuous dates. Ensure you understand calendar vs fiscal years and missing dates.",
      "Compare April 2026 revenue with April 2025 using DATEADD over a marked Date table."
    ],
    [
      "Build visuals around decisions: KPI cards show headline values, line charts show trends, bar charts compare categories. Use meaningful titles and accessible color contrast.",
      "Put Revenue, Profit and Margin cards above a monthly Revenue line and category bar chart."
    ],
    [
      "Interactions define how selecting a data point filters or highlights other visuals. Drillthrough sends users from summary context into detail; test behavior with multiple slicers.",
      "Selecting 'Footwear' in a category bar filters the sales-by-month visual to Footwear."
    ],
    [
      "Model performance improves with clean dimensions, fewer high-cardinality columns and efficient measures. Validate that totals reconcile after every modeling change.",
      "Replace a large text transaction key in a visual with an aggregated Sales measure and compare render time."
    ],
    [
      "Publishing makes reports accessible through Power BI Service subject to workspace, licensing and permission rules. Row-level security controls which rows a viewer can access; test roles explicitly.",
      "A West region manager should see only West transactions when assigned to the West RLS role."
    ]
  ],
  "tableau": [
    [
      "Connect Tableau to a source and identify dimensions, measures and data types. Decide between live connection and extract based on freshness, performance and governance.",
      "Connect to orders.csv, classify Region as a dimension and Revenue as a numeric measure."
    ],
    [
      "Rows and Columns shelves define the visual layout while the Marks card controls color, size, label and detail. Tableau aggregates measures according to the view's level of detail.",
      "Drag Region to Rows and SUM(Sales) to Columns to create a revenue bar chart."
    ],
    [
      "Filters restrict the records or marks visible, whereas groups combine related category members. Be aware of the order of operations when combining filters.",
      "Filter Order Date to 2026 and group small product categories into 'Other'."
    ],
    [
      "Calculated fields express reusable business logic at row or aggregate level. Avoid mixing aggregated and unaggregated fields in the same expression without a clear plan.",
      "Create Profit Ratio = SUM([Profit]) / SUM([Sales]) and format it as a percentage."
    ],
    [
      "Date calculations compare values over time, while table calculations operate on the visible result table. Configure addressing and partitioning so calculations follow the intended direction.",
      "A running sum of monthly sales should increase in chronological month order."
    ],
    [
      "Level of Detail expressions set the granularity of a calculation independently from some visible dimensions. FIXED, INCLUDE and EXCLUDE behave differently under filters.",
      "FIXED [Customer ID]: SUM([Sales]) gives customer lifetime sales independent of the current view's dimensions."
    ],
    [
      "Dashboards arrange worksheets into a coherent experience. Use containers for alignment, appropriate device layouts and clear hierarchy so viewers know where to start.",
      "Put three KPI tiles above a time trend and category breakdown with consistent spacing."
    ],
    [
      "Actions let selections filter, highlight or navigate across views; parameters let users change assumptions or measures. Make interactive affordances discoverable and reversible.",
      "Clicking a state on a map filters the store ranking table to that state."
    ],
    [
      "Data storytelling connects a question, evidence and decision. Add annotations for real events rather than letting viewers infer unsupported causes from correlation.",
      "Show a sales dip, annotate a documented stockout and end with an inventory-replenishment recommendation."
    ],
    [
      "Before publishing, validate calculations, permissions, extracts, refresh schedules and dashboard performance. Test the actual experience at realistic screen sizes.",
      "Reconcile Tableau revenue against the source export, then test filters and refresh with a viewer account."
    ]
  ]
};
