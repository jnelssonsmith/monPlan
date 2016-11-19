$(document).ready(function(){
  var content = [
    {
      "UnitCode": "ACB1100",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB1200",
      "UnitName": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB2020",
      "UnitName": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB2491",
      "UnitName": "Company reporting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB2851",
      "UnitName": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB3021",
      "UnitName": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB3041",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACB3050",
      "UnitName": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC1100",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC1200",
      "UnitName": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC2100",
      "UnitName": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC2200",
      "UnitName": "Introduction to management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC2400",
      "UnitName": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC2888",
      "UnitName": "Industry-based learning period A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC3100",
      "UnitName": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC3200",
      "UnitName": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC3600",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC3888",
      "UnitName": "Industry-based learning period B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACC5903",
      "UnitName": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF1100",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF1200",
      "UnitName": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF2100",
      "UnitName": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF2200",
      "UnitName": "Introduction to management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF2400",
      "UnitName": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF3100",
      "UnitName": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF3200",
      "UnitName": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF3600",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF3900",
      "UnitName": "Global issues in accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5001",
      "UnitName": "Research project in accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5080",
      "UnitName": "Management control systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5100",
      "UnitName": "Strategic management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5120",
      "UnitName": "Forensic accounting and fraud examination",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5130",
      "UnitName": "Financial statement analysis and business valuation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5150",
      "UnitName": "Financial reporting issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5268",
      "UnitName": "Accounting for healthcare managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5320",
      "UnitName": "Business analytics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5330",
      "UnitName": "Integrated systems for business enterprises",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5350",
      "UnitName": "Applied contemporary accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5510",
      "UnitName": "Integrated accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5903",
      "UnitName": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5904",
      "UnitName": "Accounting information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5950",
      "UnitName": "Introductory accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5953",
      "UnitName": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5955",
      "UnitName": "Management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5956",
      "UnitName": "Advanced financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACF5957",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG2020",
      "UnitName": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG2491",
      "UnitName": "Company reporting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG2851",
      "UnitName": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG3021",
      "UnitName": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG3041",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG3050",
      "UnitName": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACG5973",
      "UnitName": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACM5903",
      "UnitName": "Accounting for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACP1100",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACP1200",
      "UnitName": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACP2851",
      "UnitName": "Business information and systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS1000",
      "UnitName": "Principles of accounting and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS1002",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS2700",
      "UnitName": "Ethics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS2730",
      "UnitName": "Financial accounting A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS2740",
      "UnitName": "Financial accounting B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS2760",
      "UnitName": "Auditing A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS2770",
      "UnitName": "Cost and management accounting A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS3730",
      "UnitName": "Financial accounting C",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS3740",
      "UnitName": "Financial accounting D",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS3750",
      "UnitName": "Cost and management accounting B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS3765",
      "UnitName": "Auditing C",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACS3770",
      "UnitName": "Auditing B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW1100",
      "UnitName": "Introduction to financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW1200",
      "UnitName": "Accounting for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW2020",
      "UnitName": "Cost information for decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW2491",
      "UnitName": "Financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW2522",
      "UnitName": "Accounting for Islamic financial institutions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW2851",
      "UnitName": "Accounting information systems and financial modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW3021",
      "UnitName": "Performance measurement and control",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW3040",
      "UnitName": "Accounting theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW3041",
      "UnitName": "Auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACW3050",
      "UnitName": "Advanced financial accounting theory and issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX2900",
      "UnitName": "Accounting for sustainability",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX3150",
      "UnitName": "Financial analysis and valuation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX3250",
      "UnitName": "Advanced management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX3500",
      "UnitName": "International study program in accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4000",
      "UnitName": "Research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4018",
      "UnitName": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4040",
      "UnitName": "Issues in accounting information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4050",
      "UnitName": "Issues in auditing and assurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4070",
      "UnitName": "Issues in financial accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4090",
      "UnitName": "Issues in management accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4150",
      "UnitName": "Empirical research in analysis of financial statements",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX4190",
      "UnitName": "Behavioural research in accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ACX5951",
      "UnitName": "International study program in accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ADA1111",
      "UnitName": "Design thinking",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA2001",
      "UnitName": "Interdisciplinary studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA3001",
      "UnitName": "Interdisciplinary studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA3111",
      "UnitName": "Design thinking",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA4001",
      "UnitName": "Interdisciplinary studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA4111",
      "UnitName": "Design thinking advanced",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA4500",
      "UnitName": "Design thinking approaches",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADA5001",
      "UnitName": "Interdisciplinary studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADD5091",
      "UnitName": "Research methods 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADD5092",
      "UnitName": "Research methods 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADD6093",
      "UnitName": "Research documentation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADM5001",
      "UnitName": "Research methods",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ADM5002",
      "UnitName": "Theory workshop",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT1101",
      "UnitName": "Introduction to visual culture in Art Design & Architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT1102",
      "UnitName": "Modernism and the avant-garde",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2001",
      "UnitName": "Art writing and criticism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2011",
      "UnitName": "Baroque to enlightenment: European art before modernism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2025",
      "UnitName": "The body in contemporary art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2102",
      "UnitName": "International art 1945-1990",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2105",
      "UnitName": "Contemporary international art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2120",
      "UnitName": "Art and social change",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2130",
      "UnitName": "Renaissance to Baroque: Italian art and architecture in context",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2136",
      "UnitName": "Contemporary art fieldwork: context and site",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2137",
      "UnitName": "Art and the moving image",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2138",
      "UnitName": "Space, place and society",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2207",
      "UnitName": "Popular culture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2440",
      "UnitName": "Photography: History and theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2530",
      "UnitName": "Neo-Baroque aesthetics: History and theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2602",
      "UnitName": "Art criticism and curatorship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2712",
      "UnitName": "Curating: Histories and theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2722",
      "UnitName": "Curating: Practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2740",
      "UnitName": "Australian art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT2801",
      "UnitName": "The medium in contemporary art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3001",
      "UnitName": "Art writing and criticism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3011",
      "UnitName": "Baroque to enlightenment: European art before modernism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3025",
      "UnitName": "The body in contemporary art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3102",
      "UnitName": "International art 1945-1990",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3105",
      "UnitName": "Contemporary international art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3109",
      "UnitName": "Constructing art in Australia: colonialism to postcolonialism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3120",
      "UnitName": "Art and social change",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3130",
      "UnitName": "Renaissance to Baroque: Italian art and architecture in context",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3137",
      "UnitName": "Art and the moving image",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3138",
      "UnitName": "Space, place and society",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3150",
      "UnitName": "Project studies",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3207",
      "UnitName": "Popular culture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3440",
      "UnitName": "Photography: History and theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3530",
      "UnitName": "Neo-Baroque aesthetics: History and theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3602",
      "UnitName": "Art Criticism and Curatorship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3712",
      "UnitName": "Curating: Histories and theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3722",
      "UnitName": "Curating: Practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3740",
      "UnitName": "Australian art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT3801",
      "UnitName": "The medium in contemporary art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4002(A)",
      "UnitName": "Minor Thesis Part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4002(B)",
      "UnitName": "Minor Thesis Part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4012",
      "UnitName": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4025",
      "UnitName": "Visual culture internship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4076",
      "UnitName": "Australian postmodernism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4100",
      "UnitName": "Theory reading unit",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4111",
      "UnitName": "Project studies. Art history and theory honours",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4112",
      "UnitName": "Major project - Art history and theory honours",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4200",
      "UnitName": "Advanced art theory reading unit",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4406",
      "UnitName": "Curating internship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4503",
      "UnitName": "Advanced art theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AHT4504",
      "UnitName": "Art theory research seminar",
      "Faculty": "ada"
    },
    {
      "UnitCode": "AMG5018",
      "UnitName": "Celebrity, fashion, publicity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5382",
      "UnitName": "Contemporary issues in Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5400",
      "UnitName": "Global digital media: Issues in international and transnational communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5409",
      "UnitName": "Communication research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5721",
      "UnitName": "Media practices in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5742",
      "UnitName": "Communications research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5743",
      "UnitName": "Communications research thesis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5751",
      "UnitName": "Communications industry internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMG5894",
      "UnitName": "Communications theories and practices",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1017",
      "UnitName": "Academic literacies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1018",
      "UnitName": "Learning in higher education",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1277",
      "UnitName": "Media studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1278",
      "UnitName": "Communication technologies and practices",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1304",
      "UnitName": "Television studies: Forms and approaches",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1305",
      "UnitName": "Film studies: Forms and approaches",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1309",
      "UnitName": "Introduction to sexuality studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1310",
      "UnitName": "Introduction to gender studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1325",
      "UnitName": "Introduction to world politics and history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1326",
      "UnitName": "Transformation from above: Globalisation and the state",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1328",
      "UnitName": "Introduction to journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU1329",
      "UnitName": "Broadcast journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2140",
      "UnitName": "States and markets",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2439",
      "UnitName": "Youth and mobile media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2448",
      "UnitName": "Film genres",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2450",
      "UnitName": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2453",
      "UnitName": "Research methods in the social sciences",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2498",
      "UnitName": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2625",
      "UnitName": "Borders, people and identity: Migration in the 21st century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2685",
      "UnitName": "Malaysian studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2780",
      "UnitName": "Radio news and current affairs",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2785",
      "UnitName": "Media, power and reporting in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2787",
      "UnitName": "Multimedia journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2789",
      "UnitName": "Video news and current affairs",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2814",
      "UnitName": "Transforming community: Project design and public relations for social campaigns",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2832",
      "UnitName": "Postcolonial and diasporic literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2906",
      "UnitName": "Genders, sexualities and religions in Southeast Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2907",
      "UnitName": "Sexual and reproductive health and rights in global contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2908",
      "UnitName": "Critical methodologies for action research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU2920",
      "UnitName": "Transformation from below: Civil, society, social movements and political change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3127",
      "UnitName": "Stardom: Celebrity, society and power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3449",
      "UnitName": "Reading social media: Sociotechnological literacies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3451",
      "UnitName": "Freedom and control in the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3499",
      "UnitName": "Authorship and writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3560",
      "UnitName": "Contemporary feminisms in Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3570",
      "UnitName": "International relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3575",
      "UnitName": "Task force: Responding to global challenges",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3630",
      "UnitName": "Governing the global economy: Stability, efficiency, justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3650",
      "UnitName": "A world in crisis: Multilevel responses to global emergencies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3744",
      "UnitName": "Workplace learning internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3806",
      "UnitName": "Business reporting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3810",
      "UnitName": "Understanding trends in global media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3857",
      "UnitName": "Writing techniques",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU3858",
      "UnitName": "Writing experiments",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU4718",
      "UnitName": "Arts honours dissertation 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU4719",
      "UnitName": "Arts honours dissertation 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU4720",
      "UnitName": "Research issues and methodology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AMU4727",
      "UnitName": "Readings in social, political and cultural theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ANT1800",
      "UnitName": "Introduction to anatomy and medical terminology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "APG4264",
      "UnitName": "Criminal behaviours and enterprises: Individuals, groups and organisations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4287",
      "UnitName": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4314",
      "UnitName": "Seeking justice: South Africa and Rwanda",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4416",
      "UnitName": "Crime prevention: A global perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4417",
      "UnitName": "Policing, security and risk management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4421",
      "UnitName": "Dramatic theory, criticism and research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4423",
      "UnitName": "Performance investigation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4553",
      "UnitName": "Field studies in regional sustainability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4554",
      "UnitName": "Resource evaluation and management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4556",
      "UnitName": "Urbanisation and regional development in the Indo-Pacific rims",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4571",
      "UnitName": "Human services management: Structure and context",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4572",
      "UnitName": "Human services management: Principles and process",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4618",
      "UnitName": "Researching histories",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4677",
      "UnitName": "Theory and practice in sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4681",
      "UnitName": "Social research practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4761",
      "UnitName": "Program planning and evaluation in the human services",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4762",
      "UnitName": "Management and leadership in the human services",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4763",
      "UnitName": "Human services research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4789",
      "UnitName": "Research methods in music",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4809",
      "UnitName": "Advocacy for community rights",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4823",
      "UnitName": "Water management project management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4824",
      "UnitName": "Science of water",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4825",
      "UnitName": "Water, sustainability and development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG4826",
      "UnitName": "Water governance and policy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5018",
      "UnitName": "Celebrity, fashion, publicity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5042",
      "UnitName": "Practices of teaching Englishes for intercultural communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5043",
      "UnitName": "Language in society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5044",
      "UnitName": "Professional internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5045",
      "UnitName": "Gender and development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5046",
      "UnitName": "General linguistics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5047",
      "UnitName": "Issues in teaching English as an international language",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5048",
      "UnitName": "Translation for special purposes",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5049",
      "UnitName": "Theory and practice of interpreting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5050",
      "UnitName": "Communication research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5051",
      "UnitName": "Special topics in bioethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5054",
      "UnitName": "Research methods for development practice and change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5064",
      "UnitName": "Gender, security and conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5065",
      "UnitName": "Governing migration: Refugees, borders and development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5066",
      "UnitName": "Shanghai city lab",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5067",
      "UnitName": "Cultural economy and sustainable development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5068",
      "UnitName": "Creative cities",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5072",
      "UnitName": "Art worlds",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5080",
      "UnitName": "Bioethics and the body",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5081",
      "UnitName": "Public health ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5087",
      "UnitName": "Introduction to disaster preparedness and management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5089",
      "UnitName": "Responding to international disasters and humanitarian crises",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5092",
      "UnitName": "Human rights in global politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5094",
      "UnitName": "Global jihad?",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5095",
      "UnitName": "Research and writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5099",
      "UnitName": "Media innovation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5135",
      "UnitName": "Video journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5180",
      "UnitName": "Policy and political communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5181",
      "UnitName": "Intergovernmental relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5182",
      "UnitName": "Digital management and production",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5183",
      "UnitName": "International tourism marketing research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5184",
      "UnitName": "Video-making as research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5189",
      "UnitName": "Monitoring and evaluation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5190",
      "UnitName": "Global journalism: Hong Kong field school",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5201",
      "UnitName": "Intensive intermediate Indonesian for fieldwork",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5202",
      "UnitName": "Intensive introductory Indonesian for fieldwork",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5207",
      "UnitName": "Intensive introductory Spanish for fieldwork",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5208",
      "UnitName": "Intensive intermediate Spanish for fieldwork",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5210",
      "UnitName": "Bioethics theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5229",
      "UnitName": "Prosperity, poverty and sustainability in a globalised world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5230",
      "UnitName": "Ecosystems and environmental management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5264",
      "UnitName": "Criminal behaviours and enterprises: Individuals, groups and organisations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5267",
      "UnitName": "Hermeneutics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5272",
      "UnitName": "Writers and the creative process",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5290",
      "UnitName": "Holocaust memories: Landscape, mourning, identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5324",
      "UnitName": "Advanced seminar in International political economy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5327",
      "UnitName": "Wars of recognition: Terrorism and political violence",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5332",
      "UnitName": "Security and securitisation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5337",
      "UnitName": "Governance and democratisation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5347",
      "UnitName": "Research methods in applied linguistics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5348",
      "UnitName": "Second language acquisition",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5349",
      "UnitName": "World Englishes",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5372",
      "UnitName": "Community development in a globalising world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5389",
      "UnitName": "Tourism industry and marketing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5390",
      "UnitName": "Contemporary tourism and development in emerging economies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5393",
      "UnitName": "Ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5394",
      "UnitName": "Questions of life and death",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5397",
      "UnitName": "Media, technologies and social change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5398",
      "UnitName": "Digital media technologies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5400",
      "UnitName": "Issues in international communications",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5401",
      "UnitName": "Media empires and entrepreneurs",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5425",
      "UnitName": "Perspectives on environment and sustainability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5426",
      "UnitName": "Environmental analysis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5428",
      "UnitName": "Environmental governance and citizenship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5433",
      "UnitName": "Corporate sustainability management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5434",
      "UnitName": "Sustainability measurement",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5547",
      "UnitName": "Studio production",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5571",
      "UnitName": "Human services management: Structure and context",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5572",
      "UnitName": "Human services management: Principles and process",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5609",
      "UnitName": "Sustainable tourism development and planning",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5616",
      "UnitName": "Conference interpreting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5617",
      "UnitName": "Human research ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5627",
      "UnitName": "Research in political ecology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5628",
      "UnitName": "Doctrines of development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5640",
      "UnitName": "Journalism in society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5642",
      "UnitName": "Investigative journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5652",
      "UnitName": "Language and intercultural communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5653",
      "UnitName": "Journalism futures: New York field school",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5662",
      "UnitName": "Cultural and creative industries",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5666",
      "UnitName": "Terrorism, counter-terrorism and intelligence",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5667",
      "UnitName": "Terrorism, fringe politics and extremist violence",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5668",
      "UnitName": "Advanced seminar in international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5671",
      "UnitName": "New publishing media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5690",
      "UnitName": "Applied translation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5702",
      "UnitName": "Bilingualism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5703",
      "UnitName": "Literacy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5704",
      "UnitName": "Discourse analysis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5705",
      "UnitName": "Language and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5717",
      "UnitName": "Applied industry research and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5720",
      "UnitName": "Cultural tourism and events management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5729",
      "UnitName": "Clinical ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5730",
      "UnitName": "Bioethics, public policy, and the law",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5732",
      "UnitName": "Ethical issues in professional life",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5733",
      "UnitName": "Health care ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5736",
      "UnitName": "Criminal justice research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5738",
      "UnitName": "Criminal justice dissertation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5739",
      "UnitName": "Criminal justice dissertation - Part 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5740",
      "UnitName": "Criminal justice dissertation - Part 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5741",
      "UnitName": "Supervised reading in criminal justice and criminology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5742",
      "UnitName": "Communications research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5752",
      "UnitName": "Field trip in media and communications",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5782",
      "UnitName": "Film festival study tour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5786",
      "UnitName": "Human services research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5804",
      "UnitName": "Environmental revolutions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5805",
      "UnitName": "Project planning and management in international development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5848",
      "UnitName": "Research thesis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5849",
      "UnitName": "Research thesis A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5850",
      "UnitName": "Research thesis B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5856",
      "UnitName": "Research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5862",
      "UnitName": "Publishing history, culture and commerce",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5867",
      "UnitName": "Research practicum",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5868",
      "UnitName": "Research practicum",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5874",
      "UnitName": "Practice of conference interpreting and translation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5875",
      "UnitName": "Introduction to interpreting and translation studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5876",
      "UnitName": "Theoretical issues in literary and cultural translation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5881",
      "UnitName": "Translation studies abroad 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5882",
      "UnitName": "Translation studies abroad 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5883",
      "UnitName": "Major translation project part 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5884",
      "UnitName": "Major translation project part 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5885",
      "UnitName": "Advanced interpreting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5894",
      "UnitName": "Communications theories and practices",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5900",
      "UnitName": "Cultural economy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5980",
      "UnitName": "Monash-Warwick University joint project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5990",
      "UnitName": "Managing public sector organisations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5991",
      "UnitName": "Choices and challenges for government in a market economy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5992",
      "UnitName": "Delivering public value",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5993",
      "UnitName": "Designing public policies and programs",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5994",
      "UnitName": "Decision making under uncertainty",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5995",
      "UnitName": "Governing by the rules",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APG5996",
      "UnitName": "Leading public sector change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APR4702",
      "UnitName": "Classical languages for researchers",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APR6001",
      "UnitName": "Bioethics theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APR6035",
      "UnitName": "Advanced Research Methodologies in Media, Film and Journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "APR6100",
      "UnitName": "Film, Media and Communication Studies: The State of the Fields",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ARC1001",
      "UnitName": "Foundation studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC1002",
      "UnitName": "Foundation studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC1102",
      "UnitName": "Technologies and environments 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC1301",
      "UnitName": "Architecture communications 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC1401",
      "UnitName": "Introduction to architectural and visual cultures",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2001",
      "UnitName": "Architecture Design Studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2002",
      "UnitName": "Architecture Design Studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2101",
      "UnitName": "Technologies and environments 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2301",
      "UnitName": "Architecture communications 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2401",
      "UnitName": "Contemporary architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC2402",
      "UnitName": "19th and 20th century architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3001",
      "UnitName": "Architecture Design Studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3002",
      "UnitName": "Architecture Design Studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3101",
      "UnitName": "Technologies and environments 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3102",
      "UnitName": "Integrated technologies, environments and professional studies",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3401",
      "UnitName": "Architecture and the City",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3501",
      "UnitName": "Advanced studies in architecture A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC3502",
      "UnitName": "Advanced studies in architecture B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4001",
      "UnitName": "Advanced architecture project 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4002",
      "UnitName": "Advanced architecture project 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4101",
      "UnitName": "Integrated project- technologies, environments and professional practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4201",
      "UnitName": "Professional studies 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4501",
      "UnitName": "Advanced architecture studies 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC4502",
      "UnitName": "Advanced architecture studies 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5001",
      "UnitName": "Advanced architecture project 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5002",
      "UnitName": "Final architecture project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5201",
      "UnitName": "Professional practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5401",
      "UnitName": "Architecture Research Methods",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5501",
      "UnitName": "Advanced architecture studies 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ARC5502",
      "UnitName": "Advanced Studies in Architecture 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "ASC5001",
      "UnitName": "Addiction science: A biopsychosocial overview",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5002",
      "UnitName": "Socio-cultural perspectives of addiction",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5003",
      "UnitName": "Addiction policies, prevention and public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5004",
      "UnitName": "Addiction assessment and treatment: Practice and innovation",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5007",
      "UnitName": "Recovery principles",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5008",
      "UnitName": "Co-occurring disorders in mental health and addiction",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5009",
      "UnitName": "Developmental factors: Children and families, youth and early interventions",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASC5010",
      "UnitName": "Gambling and other process addictions",
      "Faculty": "med"
    },
    {
      "UnitCode": "ASP1010",
      "UnitName": "Earth to cosmos - introductory astronomy",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP1022",
      "UnitName": "Life in the universe - astrobiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP2011",
      "UnitName": "Astronomy",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP2062",
      "UnitName": "Introduction to astrophysics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP3012",
      "UnitName": "Stars and galaxies",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP3051",
      "UnitName": "Relativity and cosmology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP3162",
      "UnitName": "Computational astrophysics and the extreme universe",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP3231",
      "UnitName": "Observational astronomy",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4100",
      "UnitName": "Astrophysics honours research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4110",
      "UnitName": "Astrophysics honours research project - Part 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4120",
      "UnitName": "Astrophysics honours research project - Part 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4200",
      "UnitName": "Astrophysics honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4210",
      "UnitName": "Astrophysics honours coursework part 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ASP4220",
      "UnitName": "Astrophysics honours coursework part 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ATM3040",
      "UnitName": "Physical meteorology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ATM3050",
      "UnitName": "Dynamical meteorology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ATS1001",
      "UnitName": "Chinese introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1002",
      "UnitName": "Chinese introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1020",
      "UnitName": "Leadership for social change 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1040",
      "UnitName": "Religions and the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1041",
      "UnitName": "World religions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1044",
      "UnitName": "Performance 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1045",
      "UnitName": "Performance 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1046",
      "UnitName": "Composition 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1047",
      "UnitName": "Composition 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1048",
      "UnitName": "Creative music technology 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1049",
      "UnitName": "Creative music technology 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1061",
      "UnitName": "French introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1062",
      "UnitName": "French introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1089",
      "UnitName": "Fundamentals of journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1090",
      "UnitName": "Practice of journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1091",
      "UnitName": "German introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1092",
      "UnitName": "German introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1111",
      "UnitName": "Indonesian 1: Biographies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1112",
      "UnitName": "Indonesian 2: Journeys and cultural encounters",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1141",
      "UnitName": "Japanese introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1142",
      "UnitName": "Japanese introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1171",
      "UnitName": "Korean introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1172",
      "UnitName": "Korean introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1189",
      "UnitName": "Acting 1: Theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1190",
      "UnitName": "Acting 2: Theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1191",
      "UnitName": "Spanish introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1192",
      "UnitName": "Spanish introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1203",
      "UnitName": "Magic, science and spirituality",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1211",
      "UnitName": "Ukrainian introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1212",
      "UnitName": "Ukrainian introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1221",
      "UnitName": "Italian introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1222",
      "UnitName": "Italian introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1229",
      "UnitName": "Intensive introductory Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1230",
      "UnitName": "Intensive introductory Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1247",
      "UnitName": "Ancient cultures 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1248",
      "UnitName": "Ancient cultures 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1250",
      "UnitName": "Social justice and Indigenous Australians",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1254",
      "UnitName": "Culture, power and difference: Indigeneity and Australian identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1255",
      "UnitName": "Encountering cultures: Introduction to anthropology 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1259",
      "UnitName": "Exploring contemporary Australia: People, events, ideas",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1261",
      "UnitName": "Understanding human behaviour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1262",
      "UnitName": "Understanding social behaviour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1263",
      "UnitName": "Bioethics: Current controversies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1264",
      "UnitName": "Bioethics, justice and the law",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1267",
      "UnitName": "Latin language 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1269",
      "UnitName": "Latin language 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1279",
      "UnitName": "Media and culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1280",
      "UnitName": "Understanding the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1281",
      "UnitName": "Understanding crime: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1282",
      "UnitName": "Criminal justice: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1287",
      "UnitName": "Performance in context 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1288",
      "UnitName": "Performance in context 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1291",
      "UnitName": "Communication in international languages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1292",
      "UnitName": "Englishes for global communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1297",
      "UnitName": "Academic writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1298",
      "UnitName": "Professional writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1304",
      "UnitName": "Introduction to television studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1305",
      "UnitName": "Introduction to film studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1309",
      "UnitName": "The Global challenge",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1310",
      "UnitName": "Extreme earth! Natural hazards and human vulnerability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1314",
      "UnitName": "Human rights theory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1315",
      "UnitName": "Human rights theory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1316",
      "UnitName": "Medieval Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1317",
      "UnitName": "Renaissance Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1319",
      "UnitName": "Global Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1320",
      "UnitName": "Nations at war: Revolution and empire",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1321",
      "UnitName": "Nations at war: The twentieth century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1322",
      "UnitName": "Conflict and coexistence 1: Jews, Christians and Muslims from antiquity through the middle ages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1325",
      "UnitName": "Contemporary worlds 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1326",
      "UnitName": "Contemporary worlds 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1336",
      "UnitName": "Yiddish language, culture and literature 1A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1337",
      "UnitName": "Yiddish language, culture and literature 1B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1338",
      "UnitName": "The language game: Why do we talk the way we do?",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1339",
      "UnitName": "Describing and analysing language and communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1340",
      "UnitName": "English for academic purposes",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1343",
      "UnitName": "Popular music in global perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1345",
      "UnitName": "Music and history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1346",
      "UnitName": "Music and culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1347",
      "UnitName": "Music ensemble 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1348",
      "UnitName": "Music ensemble 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1353",
      "UnitName": "Foundations of modern politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1365",
      "UnitName": "Introduction to sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1366",
      "UnitName": "The individual and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1371",
      "UnitName": "Life, death and morality (Introduction to philosophy A)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1515",
      "UnitName": "Reading across cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1701",
      "UnitName": "Terrorism and political violence: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1835",
      "UnitName": "Time, self and mind (Introduction to philosophy B)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1873",
      "UnitName": "Introduction to international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1899",
      "UnitName": "Music theory and ear training 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1900",
      "UnitName": "Music theory and ear training 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1903",
      "UnitName": "Introducing literature: Ways of reading",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1904",
      "UnitName": "Reading the city: Literary genres",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1905",
      "UnitName": "Chinese Introductory for background speakers 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1906",
      "UnitName": "Chinese Introductory for background speakers 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1940",
      "UnitName": "Chinese translation 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1945",
      "UnitName": "Australian government and politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1959",
      "UnitName": "Chinese translation 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS1960",
      "UnitName": "Conflict and coexistence 2: Jews, Christians and Muslims in the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2001",
      "UnitName": "Chinese introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2002",
      "UnitName": "Chinese introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2003",
      "UnitName": "Chinese intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2004",
      "UnitName": "Chinese intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2005",
      "UnitName": "Chinese proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2006",
      "UnitName": "Chinese proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2019",
      "UnitName": "Perspectives on Indigenous Art: Production, meaning and symbolism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2020",
      "UnitName": "Colonialism in comparison: Australia, New Zealand and the Pacific",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2039",
      "UnitName": "Understanding modern China",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2040",
      "UnitName": "Understanding contemporary China",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2043",
      "UnitName": "Chinese translation for professional purposes 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2044",
      "UnitName": "Chinese translation for professional purposes 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2056",
      "UnitName": "Race, crime and difference",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2057",
      "UnitName": "Genocide",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2060",
      "UnitName": "The art of teaching music performance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2063",
      "UnitName": "French intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2064",
      "UnitName": "French intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2065",
      "UnitName": "French proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2066",
      "UnitName": "French proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2075",
      "UnitName": "Representing Paris: Literature and visual culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2083",
      "UnitName": "Bread and circuses: Performing identity in Greco-Roman cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2084",
      "UnitName": "Ancient mythologies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2086",
      "UnitName": "Leadership for social change 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2087",
      "UnitName": "Lifestyle journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2088",
      "UnitName": "Russia and the US: Comparative politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2093",
      "UnitName": "German intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2094",
      "UnitName": "German intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2095",
      "UnitName": "German proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2096",
      "UnitName": "German proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2104",
      "UnitName": "The ethnographic endeavour: Capturing the Indigenous past to understand the Indigenous present",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2105",
      "UnitName": "Making performance 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2106",
      "UnitName": "A short history of the world: From the big bang to climate change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2107",
      "UnitName": "Colonial America: From puritans to revolutionaries",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2108",
      "UnitName": "The modern family: A global history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2109",
      "UnitName": "The commodities that changed the world: An introduction to globalisation and global history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2110",
      "UnitName": "Slavery: A history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2113",
      "UnitName": "Indonesian 3: Contemporary issues in Indonesia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2114",
      "UnitName": "Indonesian 4: Stories and storytelling in the Indonesian archipelago",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2122",
      "UnitName": "Performance 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2123",
      "UnitName": "Performance 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2127",
      "UnitName": "Composition 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2128",
      "UnitName": "Composition 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2129",
      "UnitName": "Creative music technology 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2130",
      "UnitName": "Creative music technology 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2138",
      "UnitName": "The archaeology of world rock art",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2139",
      "UnitName": "Song writing: How to write a popular song",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2141",
      "UnitName": "Japanese introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2142",
      "UnitName": "Japanese introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2143",
      "UnitName": "Japanese intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2144",
      "UnitName": "Japanese intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2145",
      "UnitName": "Japanese proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2146",
      "UnitName": "Japanese proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2159",
      "UnitName": "Recording and computer music production",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2161",
      "UnitName": "Indonesia now: Culture, conflict and crisis management in the Asian century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2162",
      "UnitName": "Literature and visual culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2163",
      "UnitName": "The writing self: Creative nonfiction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2164",
      "UnitName": "Italian transformations: Reading and writing self-discovery",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2169",
      "UnitName": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2170",
      "UnitName": "Arts international experience",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2171",
      "UnitName": "Korean introductory 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2172",
      "UnitName": "Korean introductory 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2173",
      "UnitName": "Korean intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2174",
      "UnitName": "Korean intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2185",
      "UnitName": "Biblical texts and contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2193",
      "UnitName": "Spanish intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2194",
      "UnitName": "Spanish intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2195",
      "UnitName": "Spanish proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2196",
      "UnitName": "Spanish proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2214",
      "UnitName": "Italy on film (In country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2215",
      "UnitName": "Ukrainian intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2216",
      "UnitName": "Ukrainian intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2223",
      "UnitName": "Italian intermediate 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2224",
      "UnitName": "Italian intermediate 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2225",
      "UnitName": "Italian proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2226",
      "UnitName": "Italian proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2229",
      "UnitName": "Intensive introductory Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2230",
      "UnitName": "Intensive introductory Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2231",
      "UnitName": "Intensive intermediate Italian 1 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2232",
      "UnitName": "Intensive intermediate Italian 2 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2244",
      "UnitName": "A history of American business",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2247",
      "UnitName": "Italian proficient 2 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2249",
      "UnitName": "Sustainable development in South East Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2250",
      "UnitName": "Communications and cultures in the global era",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2251",
      "UnitName": "Cuba study tour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2255",
      "UnitName": "Smartphone journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2256",
      "UnitName": "Political psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2257",
      "UnitName": "Long-form television: \"HBO\" and beyond",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2260",
      "UnitName": "Developmental psychology: Behaviour across the lifespan",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2271",
      "UnitName": "Beowulf: An interdisciplinary approach",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2275",
      "UnitName": "The European Union from consensus to crisis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2280",
      "UnitName": "Video games: Industry and culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2290",
      "UnitName": "Global leadership and advanced research program",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2295",
      "UnitName": "Screening contemporary Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2296",
      "UnitName": "Musical theatre 1: History and form",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2297",
      "UnitName": "Musical theatre 2: Skills and performance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2315",
      "UnitName": "Journalism and global change in Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2324",
      "UnitName": "Climate change communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2325",
      "UnitName": "Cross-cultural literary encounters",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2331",
      "UnitName": "Music - Overseas study program 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2332",
      "UnitName": "Music - Overseas study program 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2333",
      "UnitName": "Jazz history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2335",
      "UnitName": "War and memory: Resistance, massacre and representation in second world war Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2344",
      "UnitName": "Archaeology in Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2349",
      "UnitName": "The golden age of Athens",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2351",
      "UnitName": "The archaeology of death in ancient Egypt: The early dynastic period to middle kingdom",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2352",
      "UnitName": "Egypt's golden age",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2354",
      "UnitName": "Interrogating racism: Indigenous Australians and the state",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2355",
      "UnitName": "Race and power: Imagining Indigenous Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2358",
      "UnitName": "Contesting laws: Heritage, culture and land",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2359",
      "UnitName": "Hearing the country: Studies in Indigenous Australian ethnoecology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2364",
      "UnitName": "Indigenous Australian politics and activism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2365",
      "UnitName": "Australian Indigenous literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2366",
      "UnitName": "Australian Indigenous art and design",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2367",
      "UnitName": "Australian Indigenous women",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2369",
      "UnitName": "Indigenous Australian human rights",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2373",
      "UnitName": "Visualising cultures: Film and ethnography",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2378",
      "UnitName": "The anthropology of international development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2379",
      "UnitName": "Fairy tale in Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2380",
      "UnitName": "Global migrations: Making the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2382",
      "UnitName": "War and memory in the Asia Pacific: Legacies of World War II",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2385",
      "UnitName": "Anzac legends: Australians at war",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2386",
      "UnitName": "Paradise lost? Sustainability and Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2387",
      "UnitName": "Beyond Gallipoli: Australians in the Great War",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2394",
      "UnitName": "Australia and Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2395",
      "UnitName": "Australia in a globalising world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2400",
      "UnitName": "Personality: Beyond the persona",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2410",
      "UnitName": "Narrative",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2422",
      "UnitName": "Romanticism and its literary legacy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2427",
      "UnitName": "Earthworks: Literature and environment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2436",
      "UnitName": "New media: From the telegraph to Twitter",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2439",
      "UnitName": "Youth media: Understanding media research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2440",
      "UnitName": "The public sphere",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2442",
      "UnitName": "Print cultures: Books as media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2443",
      "UnitName": "On the road: Travel and representation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2444",
      "UnitName": "Inscribing Italy: Travels and imaginings",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2448",
      "UnitName": "Screen theories and techniques",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2449",
      "UnitName": "Media texts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2450",
      "UnitName": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2454",
      "UnitName": "Media audiences",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2456",
      "UnitName": "Cybercrime",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2457",
      "UnitName": "Crime, media and culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2458",
      "UnitName": "Crime, control and policing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2465",
      "UnitName": "Human rights in the criminal justice sphere",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2469",
      "UnitName": "Victims, justice and the law",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2471",
      "UnitName": "Comparative criminal justice: An international perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2473",
      "UnitName": "Offender profiling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2485",
      "UnitName": "Reading the past",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2490",
      "UnitName": "Advanced Professional Writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2492",
      "UnitName": "Shakespeare and Renaissance literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2497",
      "UnitName": "Popular writing and criticism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2498",
      "UnitName": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2500",
      "UnitName": "The \"Great\" American Novel",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2508",
      "UnitName": "Introduction to poetry writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2513",
      "UnitName": "Short fiction classic and contemporary",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2516",
      "UnitName": "Adaptation into film",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2517",
      "UnitName": "Introduction to fiction writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2519",
      "UnitName": "Children's literature: A comparative study",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2520",
      "UnitName": "Eurovisions: Europe since World War II",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2530",
      "UnitName": "Film and Television Genres",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2535",
      "UnitName": "Storytelling in film and television: From classical narrative to art cinema",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2538",
      "UnitName": "Film and Television Institutions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2547",
      "UnitName": "Cities and sustainability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2548",
      "UnitName": "Environmental policy and management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2551",
      "UnitName": "Writing resistance: Understanding the power of Indigenous story-telling through literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2560",
      "UnitName": "Gender, theory and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2561",
      "UnitName": "Sex and the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2563",
      "UnitName": "Global consumption",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2566",
      "UnitName": "Researching the Past: (Re)discovering the voiceless",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2569",
      "UnitName": "Australian history: Professional and political contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2579",
      "UnitName": "Witches and depravity in the medieval and early modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2584",
      "UnitName": "Australia's black history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2586",
      "UnitName": "Islam: Principles, civilisations, influences",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2588",
      "UnitName": "Australian stories: People, place and histories",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2590",
      "UnitName": "Twentieth-century Britain: Rule Britannia to cool Britannia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2595",
      "UnitName": "The rise and fall of Nazi Germany",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2596",
      "UnitName": "The Vietnam War",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2597",
      "UnitName": "Qualitative social research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2600",
      "UnitName": "The Holocaust",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2602",
      "UnitName": "Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2603",
      "UnitName": "The age of crusades: Cultures and societies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2610",
      "UnitName": "Ancient religions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2612",
      "UnitName": "The Renaissance in Florence",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2617",
      "UnitName": "The American civil war",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2619",
      "UnitName": "Cultural diversity in contemporary Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2620",
      "UnitName": "The age of the Samurai",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2624",
      "UnitName": "Global governance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2625",
      "UnitName": "Mobile worlds: Borders, displacement and belonging",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2628",
      "UnitName": "Power and poverty: International development in a globalised world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2629",
      "UnitName": "Religion and spirituality in a globalising world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2633",
      "UnitName": "Global cities: Past, present and future",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2637",
      "UnitName": "Global bioethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2640",
      "UnitName": "The ethics of global conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2647",
      "UnitName": "Journalism: War, crime and trauma",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2648",
      "UnitName": "Contemporary Japan",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2653",
      "UnitName": "Studies in Japanese interaction and language use",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2656",
      "UnitName": "e-journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2658",
      "UnitName": "Journalism ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2665",
      "UnitName": "Language endangerment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2667",
      "UnitName": "Language across time",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2668",
      "UnitName": "Descriptive syntax: Grammatical structure, typology and universals",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2669",
      "UnitName": "Phonetics and phonology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2671",
      "UnitName": "Managing intercultural communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2672",
      "UnitName": "Computational linguistics: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2673",
      "UnitName": "History and sociolinguistics of English",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2674",
      "UnitName": "Semantics and pragmatics: The study of meaning in human languages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2676",
      "UnitName": "Sociolinguistics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2678",
      "UnitName": "Language and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2679",
      "UnitName": "Psycholinguistics and child language acquisition",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2680",
      "UnitName": "Literacies and communication: Education, media and cyberspace",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2681",
      "UnitName": "Structure of English",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2682",
      "UnitName": "Second language acquisition and attrition",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2683",
      "UnitName": "The analysis of discourse: Texts, narrative and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2687",
      "UnitName": "The ethnomusicology of improvisation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2691",
      "UnitName": "Politics, violence and memory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2693",
      "UnitName": "Politics and the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2698",
      "UnitName": "Middle East politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2699",
      "UnitName": "Parties and power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2706",
      "UnitName": "Foreign policy analysis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2716",
      "UnitName": "Cultural diversity and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2718",
      "UnitName": "Families, relationships and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2720",
      "UnitName": "Youth, culture and social change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2723",
      "UnitName": "Social research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2727",
      "UnitName": "Men, masculinity and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2731",
      "UnitName": "Regional and rural societies: People, place and nature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2732",
      "UnitName": "Writing the world, the other and the self",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2733",
      "UnitName": "Work and technology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2734",
      "UnitName": "Sociology of deviance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2736",
      "UnitName": "Environmental sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2737",
      "UnitName": "Social justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2739",
      "UnitName": "Sex and gender in society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2743",
      "UnitName": "Build your career: Planning and strategies for employability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2748",
      "UnitName": "Ancient Greek A/2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2750",
      "UnitName": "Ancient Greek B/2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2769",
      "UnitName": "English as an international language",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2770",
      "UnitName": "English as an international language: Language and globalisation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2772",
      "UnitName": "English language and text",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2773",
      "UnitName": "Literature and history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2778",
      "UnitName": "Public spaces and city life",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2782",
      "UnitName": "Alternative and mainstream communities",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2784",
      "UnitName": "News and power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2787",
      "UnitName": "Digital storytelling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2788",
      "UnitName": "Audio storytelling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2790",
      "UnitName": "Feature writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2791",
      "UnitName": "Editing and design",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2795",
      "UnitName": "Yiddish language, culture and literature 2A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2796",
      "UnitName": "Yiddish language, culture and literature 2B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2799",
      "UnitName": "Audio culture: From Cage to Gaga",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2800",
      "UnitName": "Music ensemble 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2801",
      "UnitName": "Music ensemble 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2804",
      "UnitName": "From the erotic to the exotic: Music in the nineteenth century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2805",
      "UnitName": "Music, identity and place",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2811",
      "UnitName": "Making performance 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2814",
      "UnitName": "Engagement, publicity and promotion",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2815",
      "UnitName": "Crisis and risk communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2820",
      "UnitName": "Abnormal psychology & behavioural disorders",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2821",
      "UnitName": "Social psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2822",
      "UnitName": "Advanced counselling and case management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2823",
      "UnitName": "Community development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2825",
      "UnitName": "Social issues and personal values",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2831",
      "UnitName": "Research in the social sciences",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2837",
      "UnitName": "Plato and Platonism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2839",
      "UnitName": "Ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2840",
      "UnitName": "Philosophy of mind",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2860",
      "UnitName": "After the death of God: Continental philosophy of religion from Nietzsche to today",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2861",
      "UnitName": "God, freedom and evil",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2863",
      "UnitName": "Foundations of modern philosophy: Descartes and the thinking self",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2865",
      "UnitName": "Language, truth and power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2866",
      "UnitName": "Symbolic logic",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2867",
      "UnitName": "Thinking about science",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2868",
      "UnitName": "Issues in political theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2871",
      "UnitName": "Environmental ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2872",
      "UnitName": "Topics in Indian philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2875",
      "UnitName": "The moral psychology of evil",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2890",
      "UnitName": "Script development 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2894",
      "UnitName": "Accommodating minorities in Australia?",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2895",
      "UnitName": "Gender, race and journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2896",
      "UnitName": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2898",
      "UnitName": "The Italian city: Historical and literary perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2900",
      "UnitName": "Writing about music: Headlines and hashtags",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2901",
      "UnitName": "Music theory and ear training 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2902",
      "UnitName": "Music theory and ear training 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2907",
      "UnitName": "Islamic responses to the post-colonial age",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2909",
      "UnitName": "Gangsters: A global story",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2910",
      "UnitName": "Professional and academic presentation skills",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2912",
      "UnitName": "Performance studies 1 - Concepts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2913",
      "UnitName": "Playtext study 1 - Traditions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2914",
      "UnitName": "The dark hero",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2915",
      "UnitName": "The roots of fantasy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2916",
      "UnitName": "Theories of theatre 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2918",
      "UnitName": "Social media and online public relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2924",
      "UnitName": "Ancient Egyptian language: The basics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2925",
      "UnitName": "Ancient Egyptian language: Intermediary stage",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2929",
      "UnitName": "Sociology of race and ethnic relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2932",
      "UnitName": "Struggles for justice: The history of rebellion, resistance and revolt",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2934",
      "UnitName": "Global indigeneity: Performance and spectacle from the eighteenth to the twenty-first century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2937",
      "UnitName": "Contemporary issues in European criminal justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2941",
      "UnitName": "Asia's underside: Violence, crime and protest",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2946",
      "UnitName": "Critical thinking: How to analyse arguments and improve your reasoning skills",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2957",
      "UnitName": "Medieval Italy: Sites of encounter",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2961",
      "UnitName": "Political ideas",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2962",
      "UnitName": "Now showing: Contemporary approaches to film and television",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2971",
      "UnitName": "Fields of play: Entertainment, politics and popular cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS2983",
      "UnitName": "Screen project: From film theory to digital video practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3002",
      "UnitName": "Documentary",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3004",
      "UnitName": "Crime, risk and security",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3005",
      "UnitName": "Chinese proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3006",
      "UnitName": "Chinese proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3007",
      "UnitName": "Chinese studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3008",
      "UnitName": "Chinese studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3009",
      "UnitName": "Chinese studies advanced 3: Readings in modern literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3010",
      "UnitName": "Chinese studies advanced 4: Readings in modern literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3011",
      "UnitName": "Chinese studies advanced 5: Contemporary literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3012",
      "UnitName": "Chinese studies advanced 6: Contemporary literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3013",
      "UnitName": "Chinese Business Translation 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3014",
      "UnitName": "Chinese Business Translation 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3020",
      "UnitName": "Colonialism in comparison: Australia, New Zealand and the Pacific",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3021",
      "UnitName": "Chamber Music 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3022",
      "UnitName": "Chamber Music 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3037",
      "UnitName": "Chinese online media: Contemporary issues and perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3038",
      "UnitName": "Chinese online media: Current issues and perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3040",
      "UnitName": "Cultures of remembrance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3041",
      "UnitName": "Chinese media analysis 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3042",
      "UnitName": "Chinese media analysis 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3045",
      "UnitName": "From translation to interpreting in Chinese 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3046",
      "UnitName": "From translation to interpreting in Chinese 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3058",
      "UnitName": "New writing in Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3059",
      "UnitName": "Applied media and social sciences internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3060",
      "UnitName": "Uni-Capitol Washington internship programme",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3061",
      "UnitName": "Music in Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3062",
      "UnitName": "Digital production",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3064",
      "UnitName": "Cultural intelligence: Building competencies for global leadership",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3065",
      "UnitName": "French proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3066",
      "UnitName": "French proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3067",
      "UnitName": "French studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3068",
      "UnitName": "French studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3069",
      "UnitName": "French studies advanced 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3070",
      "UnitName": "French studies advanced 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3071",
      "UnitName": "France on film",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3076",
      "UnitName": "Contemporary French fiction: Rewriting identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3077",
      "UnitName": "Whatever happened to truth?: French Literature, thought and visual culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3078",
      "UnitName": "From the fall of Rome to the millennium: The world of the early Middle Ages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3079",
      "UnitName": "The fall and rise of modern China: From opium war to opening up",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3080",
      "UnitName": "Remembering the past",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3083",
      "UnitName": "Translating across cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3089",
      "UnitName": "Social institutions and power in Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3091",
      "UnitName": "Digital literatures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3092",
      "UnitName": "Reading and researching history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3093",
      "UnitName": "Specialist topic in media, film and journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3094",
      "UnitName": "The music business: How to be successful in the music industry",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3095",
      "UnitName": "German proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3096",
      "UnitName": "German proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3097",
      "UnitName": "German advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3098",
      "UnitName": "German advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3099",
      "UnitName": "German advanced 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3100",
      "UnitName": "German advanced 4",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3102",
      "UnitName": "German dialects and dialectology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3104",
      "UnitName": "German literature in the age of Goethe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3105",
      "UnitName": "On the brink of modernity (Germany and Europe 1890-1920)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3108",
      "UnitName": "Introduction to the study of media culture from a German studies perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3111",
      "UnitName": "Leadership for social change 3",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3113",
      "UnitName": "Reporting the arts circuit",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3114",
      "UnitName": "The camera at war: Combat photography and the visual language of conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3115",
      "UnitName": "Indonesian 5: Indonesian political culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3116",
      "UnitName": "Indonesian 6: Indonesian writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3117",
      "UnitName": "Journalism through cultural interaction: Indonesia and its neighbours",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3118",
      "UnitName": "Soft power and Indonesia's performing arts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3124",
      "UnitName": "Everyday life in the Soviet Union",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3129",
      "UnitName": "Arts internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3130",
      "UnitName": "Arts international internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3135",
      "UnitName": "War and memory: Resistance, massacre and representation in second world war Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3136",
      "UnitName": "Performance 5",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3137",
      "UnitName": "Performance 6",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3139",
      "UnitName": "Extended major research unit",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3140",
      "UnitName": "Composition 5",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3141",
      "UnitName": "Composition 6",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3142",
      "UnitName": "Creative music technology 5",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3143",
      "UnitName": "Creative music technology 6",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3144",
      "UnitName": "Music research in the digital age",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3145",
      "UnitName": "Japanese proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3146",
      "UnitName": "Japanese proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3147",
      "UnitName": "Japanese studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3148",
      "UnitName": "Japanese studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3151",
      "UnitName": "Japanese studies advanced: Current issues",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3152",
      "UnitName": "Japanese studies advanced: Literature and film",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3153",
      "UnitName": "Music research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3157",
      "UnitName": "Sources of religious violence: Texts and contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3164",
      "UnitName": "Italian transformations: Reading and writing self-discovery",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3170",
      "UnitName": "Arts international experience",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3175",
      "UnitName": "Korean proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3176",
      "UnitName": "Korean proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3177",
      "UnitName": "Korean translation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3194",
      "UnitName": "Sacred cities: Between co-existence and persecution",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3195",
      "UnitName": "Spanish proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3196",
      "UnitName": "Spanish proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3197",
      "UnitName": "Spanish studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3198",
      "UnitName": "Spanish studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3207",
      "UnitName": "Film and society in Spain and Latin America",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3208",
      "UnitName": "In the footsteps of refugees",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3210",
      "UnitName": "Study tour: Crime and criminal justice in Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3214",
      "UnitName": "Italy on film (In country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3215",
      "UnitName": "Global creative cities",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3217",
      "UnitName": "Ukrainian proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3218",
      "UnitName": "Ukrainian proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3219",
      "UnitName": "Ukrainian studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3220",
      "UnitName": "Ukrainian studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3221",
      "UnitName": "Music, media, culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3225",
      "UnitName": "Italian proficient 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3226",
      "UnitName": "Italian proficient 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3227",
      "UnitName": "Italian studies advanced 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3228",
      "UnitName": "Italian studies advanced 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3237",
      "UnitName": "Italy on film",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3240",
      "UnitName": "The fiction of Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3241",
      "UnitName": "Italian theatre from Goldoni to Fo",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3244",
      "UnitName": "Dante",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3247",
      "UnitName": "Italian proficient 2 (in country)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3248",
      "UnitName": "Field methods in anthropology and international development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3251",
      "UnitName": "Cuba study tour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3265",
      "UnitName": "Broadcast studio journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3266",
      "UnitName": "Washington and the world: Washington D.C study tour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3275",
      "UnitName": "The European Union from consensus to crisis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3277",
      "UnitName": "Making sense of archaeological sites through their cultural objects",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3278",
      "UnitName": "Advanced writing and interviewing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3284",
      "UnitName": "Final journey: Remembering the Holocaust",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3287",
      "UnitName": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3288",
      "UnitName": "Renaissance Rome: The papacy and the world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3290",
      "UnitName": "Global leadership and advanced research program",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3295",
      "UnitName": "Screening contemporary Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3296",
      "UnitName": "Musical theatre 1: History and form",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3297",
      "UnitName": "Musical theatre 2: Skills and performance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3302",
      "UnitName": "Global connections: Understanding cultural literacy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3304",
      "UnitName": "Forms of identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3305",
      "UnitName": "Digital humanities: Expanding research paradigms",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3310",
      "UnitName": "Writing in Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3311",
      "UnitName": "Text and community in Medieval and Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3312",
      "UnitName": "Foreign bodies: Reading world crime fiction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3314",
      "UnitName": "Seeking justice: South Africa and Rwanda",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3315",
      "UnitName": "Journalism and global change in Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3319",
      "UnitName": "Cultural diversity in contemporary Europe",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3331",
      "UnitName": "Music - Overseas study program 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3332",
      "UnitName": "Music - Overseas study program 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3335",
      "UnitName": "International political economy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3338",
      "UnitName": "Understanding ancient cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3339",
      "UnitName": "Egypt: The broken reed?",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3340",
      "UnitName": "International security studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3344",
      "UnitName": "Archaeology in Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3346",
      "UnitName": "Imperial Rome: A study in power and perversion in the early empire",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3347",
      "UnitName": "Minoans, Mycenaeans and Egypt",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3350",
      "UnitName": "From Alexander to Kleopatra: The Hellenistic world and the rise of Rome",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3354",
      "UnitName": "Interrogating racism: Indigenous Australians and the state",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3359",
      "UnitName": "Hearing the country: Studies in Indigenous Australian ethnoecology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3364",
      "UnitName": "Indigenous Australian politics and activism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3366",
      "UnitName": "Australian Indigenous art and design",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3367",
      "UnitName": "Australian Indigenous women",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3369",
      "UnitName": "Indigenous Australian human rights",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3376",
      "UnitName": "Anthropology of human rights",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3379",
      "UnitName": "Fairy tale in Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3386",
      "UnitName": "Paradise lost? Sustainability and Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3387",
      "UnitName": "Beyond Gallipoli: Australians in the Great War",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3391",
      "UnitName": "A world of sport: Business, politics and media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3392",
      "UnitName": "A Lonely Planet? travel, culture, power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3394",
      "UnitName": "Australia and Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3399",
      "UnitName": "The politics of identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3404",
      "UnitName": "Eros and the body: Sexuality and body politics in the classical world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3405",
      "UnitName": "Critical theory and poststructuralism: Recent European philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3407",
      "UnitName": "Psychoanalytic readings - Freud, Jung, Lacan",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3419",
      "UnitName": "Aesthetics and European Philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3421",
      "UnitName": "Literature and modernism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3437",
      "UnitName": "Communication and creativity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3444",
      "UnitName": "Inscribing Italy: Travels and imaginings",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3445",
      "UnitName": "Communications ethics, policy and law",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3448",
      "UnitName": "Screen theories and techniques",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3449",
      "UnitName": "Media texts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3450",
      "UnitName": "Contemporary media theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3451",
      "UnitName": "Freedom and control in the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3459",
      "UnitName": "Prisons, power and punishment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3462",
      "UnitName": "Global crime and justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3464",
      "UnitName": "Study tour: Comparative criminology USA",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3465",
      "UnitName": "Human rights in the criminal justice sphere",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3466",
      "UnitName": "Sex, gender and crime",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3472",
      "UnitName": "Crime and violence: Town and country",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3473",
      "UnitName": "Offender profiling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3486",
      "UnitName": "Renaissance literature: Power and desire",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3487",
      "UnitName": "The Shadow of reason: Irrational literature in the eighteenth century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3495",
      "UnitName": "Interwar literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3496",
      "UnitName": "Fairy-tale traditions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3497",
      "UnitName": "Popular writing and criticism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3498",
      "UnitName": "Contemporary fiction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3499",
      "UnitName": "Authorship and writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3502",
      "UnitName": "Contemporary literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3503",
      "UnitName": "Writing women",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3506",
      "UnitName": "Poetry: Text and performance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3509",
      "UnitName": "Advanced poetry writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3518",
      "UnitName": "Advanced fiction writing",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3529",
      "UnitName": "Australian film and television: Nation, culture and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3531",
      "UnitName": "Gender and sexuality in film and television",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3536",
      "UnitName": "Alternatives in film and television",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3539",
      "UnitName": "Asian cinema and television",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3540",
      "UnitName": "Documentary and realism in film and television",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3543",
      "UnitName": "Australia's ancient Indigenous past: A 50,000 year archaeological odyssey",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3544",
      "UnitName": "On a dig: Practical archaeology in the field",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3546",
      "UnitName": "Environmental assessment and decision making",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3553",
      "UnitName": "Field studies in regional sustainability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3554",
      "UnitName": "Resource evaluation and management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3566",
      "UnitName": "Researching the Past: (Re)discovering the voiceless",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3569",
      "UnitName": "Australian history: Professional and political contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3570",
      "UnitName": "International relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3573",
      "UnitName": "The Renaissance Codes: Art, magic and belief",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3574",
      "UnitName": "Fears and fantasies: Deviance and criminality in the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3580",
      "UnitName": "The modern Middle East",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3582",
      "UnitName": "Arab-Israeli conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3583",
      "UnitName": "History and film: Nazi Germany and the Jewish Holocaust",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3584",
      "UnitName": "Australia's black history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3589",
      "UnitName": "Medieval and early modern Britain",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3593",
      "UnitName": "History of sexuality 1800 - to the present",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3597",
      "UnitName": "Qualitative social research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3599",
      "UnitName": "Modern Israel: History, politics and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3608",
      "UnitName": "Myth and meaning in ancient worlds",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3611",
      "UnitName": "Imagining God: The mystic quest in Judaism, Christianity and Islam",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3612",
      "UnitName": "The Renaissance in Florence",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3616",
      "UnitName": "Making America modern: Race, power and belonging in the twentieth-century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3623",
      "UnitName": "Nationality, ethnicity and conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3626",
      "UnitName": "Global disasters: Catastrophe and social change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3627",
      "UnitName": "Global cultures, media flows: creating and consuming (popular) culture",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3631",
      "UnitName": "The idea of travel: Global perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3632",
      "UnitName": "Post-conflict: Justice, memory, reconciliation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3634",
      "UnitName": "Indigenous peoples globally",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3636",
      "UnitName": "Sacred and profane: Religion, the secular and the state",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3639",
      "UnitName": "Poverty, climate change and international justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3645",
      "UnitName": "Journalism and global change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3649",
      "UnitName": "Japanese: Language and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3652",
      "UnitName": "Japan as empire: From Meiji to 1945",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3656",
      "UnitName": "e-journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3658",
      "UnitName": "Journalism ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3665",
      "UnitName": "Language endangerment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3666",
      "UnitName": "Eastern Austronesian languages of Indonesia, East Timor and Oceania",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3667",
      "UnitName": "Language across time",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3668",
      "UnitName": "Descriptive syntax: Grammatical structure, typology and universals",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3669",
      "UnitName": "Phonetics and phonology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3671",
      "UnitName": "Managing intercultural communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3672",
      "UnitName": "Computational linguistics: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3673",
      "UnitName": "History and sociolinguistics of English",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3674",
      "UnitName": "Semantics and pragmatics: The study of meaning in human languages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3677",
      "UnitName": "Aboriginal languages of Australia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3678",
      "UnitName": "Language and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3679",
      "UnitName": "Psycholinguistics and child language acquisition",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3680",
      "UnitName": "Literacies and communication: Education, media and cyberspace",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3682",
      "UnitName": "Second language acquisition and attrition",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3690",
      "UnitName": "Reflections on humanity: Truth, freedom and power",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3695",
      "UnitName": "Public policy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3697",
      "UnitName": "Gender and international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3705",
      "UnitName": "Knowledge and power in world politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3713",
      "UnitName": "Field education and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3715",
      "UnitName": "Sexuality and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3717",
      "UnitName": "Health, culture and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3719",
      "UnitName": "Modern political thought",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3725",
      "UnitName": "Population and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3726",
      "UnitName": "Critical social psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3730",
      "UnitName": "Sustainability and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3731",
      "UnitName": "Regional and rural societies: People, place and nature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3732",
      "UnitName": "Communications and media studies: Contemporary debates",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3733",
      "UnitName": "Work and technology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3734",
      "UnitName": "Sociology of deviance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3736",
      "UnitName": "Environmental sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3737",
      "UnitName": "Social justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3739",
      "UnitName": "Sex and gender in society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3743",
      "UnitName": "Build your career: Planning and strategies for employability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3745",
      "UnitName": "Global indigenous studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3760",
      "UnitName": "Global communications",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3774",
      "UnitName": "Directing workshop",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3775",
      "UnitName": "Theatre internship unit",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3776",
      "UnitName": "Script development 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3778",
      "UnitName": "Englishes in the global context",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3779",
      "UnitName": "Cultural linguistics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3780",
      "UnitName": "English as an international language: Language and education",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3781",
      "UnitName": "English as an international language: Writing across cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3782",
      "UnitName": "Bodies of work",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3786",
      "UnitName": "Journalism, law and ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3789",
      "UnitName": "Video journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3793",
      "UnitName": "Global research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3795",
      "UnitName": "Global correspondent",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3796",
      "UnitName": "Industry placement",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3797",
      "UnitName": "Truth, power and structure: Understanding history and politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3798",
      "UnitName": "Global Shakespeares",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3802",
      "UnitName": "Journalism practice and discourse",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3808",
      "UnitName": "Investigative reporting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3811",
      "UnitName": "Journalism professional placement",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3814",
      "UnitName": "Yiddish Language, culture and literature 3A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3815",
      "UnitName": "Yiddish Language, culture and literature 3B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3816",
      "UnitName": "The social context of language learning",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3818",
      "UnitName": "Drumming traditions of West Africa",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3819",
      "UnitName": "Orchestration",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3820",
      "UnitName": "Conducting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3821",
      "UnitName": "Critical perspectives on new musical works",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3823",
      "UnitName": "Improvising musical traditions of South Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3824",
      "UnitName": "Popular music and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3825",
      "UnitName": "Western art music in the 20th and 21st century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3828",
      "UnitName": "Film music",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3829",
      "UnitName": "East Asia and its music: Silk road histories and popular contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3833",
      "UnitName": "Writing/Performance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3834",
      "UnitName": "Production investigation III",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3836",
      "UnitName": "Victorian parliamentary internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3837",
      "UnitName": "Internal-external communication and reputation management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3838",
      "UnitName": "Public relations campaigns",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3842",
      "UnitName": "Sport psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3843",
      "UnitName": "Psychology and the workplace",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3844",
      "UnitName": "Forensic psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3846",
      "UnitName": "People and other animals: A social science perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3848",
      "UnitName": "Insights into practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3850",
      "UnitName": "Human services management and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3851",
      "UnitName": "Social policy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3852",
      "UnitName": "Contemporary issues in social science research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3855",
      "UnitName": "Making sense of the social world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3857",
      "UnitName": "Writing techniques",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3858",
      "UnitName": "Writing experiments",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3862",
      "UnitName": "Thinking about religion",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3867",
      "UnitName": "Crime fiction and film in Hispanic cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3869",
      "UnitName": "Political philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3870",
      "UnitName": "Philosophy of religion",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3873",
      "UnitName": "Philosophical issues in applied ethics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3876",
      "UnitName": "Theory of knowledge",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3877",
      "UnitName": "Philosophy of Jean-Paul Sartre and Simone de Beauvoir",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3878",
      "UnitName": "Recent logic",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3879",
      "UnitName": "Philosophy of language",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3882",
      "UnitName": "Metaphysics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3883",
      "UnitName": "Issues in logical theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3884",
      "UnitName": "Foundations of modern philosophy: Love and other passions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3885",
      "UnitName": "Stoic and epicurean philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3888",
      "UnitName": "Race and class in American Literature",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3892",
      "UnitName": "Dramaturgy 3: Contexts",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3894",
      "UnitName": "Accommodating minorities in Australia?",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3895",
      "UnitName": "Gender, race and journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3896",
      "UnitName": "Photojournalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3897",
      "UnitName": "Borderless media in East Asia",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3898",
      "UnitName": "The Italian city: Historical and literary perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3899",
      "UnitName": "Jazz arranging: Contemporary arranging techniques for small groups to large ensembles",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3900",
      "UnitName": "Jazz composition: From Tin Pan Alley to today",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3903",
      "UnitName": "Leaders, power and politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3905",
      "UnitName": "Democratic theory",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3908",
      "UnitName": "American empire: The United States from colonies to superpower",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3912",
      "UnitName": "Performance studies 2 - Cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3913",
      "UnitName": "Playtext study 2 - Shakespearean stages",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3917",
      "UnitName": "Representing war: Censorship, propaganda and art",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3918",
      "UnitName": "International journalism professional project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3919",
      "UnitName": "Journalism professional placement",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3926",
      "UnitName": "Gongs, punks and shadow plays",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3929",
      "UnitName": "Sociology of race and ethnic relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3930",
      "UnitName": "Encounters and empire: Europe and the world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3931",
      "UnitName": "Making digital history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3933",
      "UnitName": "The meaning of things: Writing cultural history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3934",
      "UnitName": "Global indigeneity: Performance and spectacle from the eighteenth to the twenty-first century",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3937",
      "UnitName": "Contemporary issues in European criminal justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3948",
      "UnitName": "Internship (undergraduate)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3951",
      "UnitName": "Japanese popular culture and identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3952",
      "UnitName": "The world of textiles",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3954",
      "UnitName": "Media industry project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3955",
      "UnitName": "Writing destruction: Literature of war",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3956",
      "UnitName": "Trauma and memory in the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3957",
      "UnitName": "Medieval Italy: Sites of encounter",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3958",
      "UnitName": "Designing and debating research practice in contemporary Indigenous studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3969",
      "UnitName": "Film and television studies in the digital era",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3970",
      "UnitName": "Performing film and television criticism with new technologies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3972",
      "UnitName": "Imagining Ibero-America: Travels, texts and transnational encounters",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3974",
      "UnitName": "European integration and security",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3976",
      "UnitName": "Histoire(s) de rire: The stakes of literary laughter in France",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3978",
      "UnitName": "Japanese communication in professional settings",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS3987",
      "UnitName": "Theories of theatre 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4002",
      "UnitName": "Honours research methods seminar",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4006",
      "UnitName": "Political theology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4137",
      "UnitName": "Special reading unit 1 (Honours)",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4171",
      "UnitName": "Advanced readings in media and communications studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4215",
      "UnitName": "History archives workshop",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4216",
      "UnitName": "History: Beyond the nation",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4217",
      "UnitName": "Histories of place and space",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4218",
      "UnitName": "Ideas in history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4230",
      "UnitName": "Arts honours thesis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4231",
      "UnitName": "Arts honours thesis A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4232",
      "UnitName": "Arts honours thesis B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4235",
      "UnitName": "Selected topics in theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4256",
      "UnitName": "Predynastic and early dynastic Egypt",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4257",
      "UnitName": "Reading the ancient past",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4269",
      "UnitName": "Rethinking theatre history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4279",
      "UnitName": "Historical film theory and criticism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4280",
      "UnitName": "Contemporary film theory and criticism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4286",
      "UnitName": "Final journey: Remembering the Holocaust",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4287",
      "UnitName": "War and peace: Models of conflict resolution",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4289",
      "UnitName": "Medieval dialogues: Reason, mysticism and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4290",
      "UnitName": "Holocaust memories: Landscape, mourning, identity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4296",
      "UnitName": "Imagining Europe: Representations and images of a continent",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4297",
      "UnitName": "Recording oral history: Theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4301",
      "UnitName": "Reading and writing history",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4311",
      "UnitName": "Text and community in Medieval and Renaissance Italy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4328",
      "UnitName": "Grand theories of politics and international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4333",
      "UnitName": "Issues in politics, governance and research",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4345",
      "UnitName": "Research methods in classical antiquity",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4348",
      "UnitName": "Theme and genre in literary studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4367",
      "UnitName": "Placement research project for honours in international studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4373",
      "UnitName": "Honours professional project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4374",
      "UnitName": "Honours specialist seminar",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4375",
      "UnitName": "Honours research seminar",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4388",
      "UnitName": "Special topic in literary studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4451",
      "UnitName": "Music honours thesis A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4452",
      "UnitName": "Music honours thesis B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4653",
      "UnitName": "Honours workshop",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4699",
      "UnitName": "Criminology honours coursework: Research, practice and policy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4702",
      "UnitName": "Classical languages for researchers",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4810",
      "UnitName": "Global justice: Civil and human rights after 1945",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4831",
      "UnitName": "Special project: Performance part 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4832",
      "UnitName": "Special project: Performance part 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4834",
      "UnitName": "Music honours project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4838",
      "UnitName": "Special project: Composition part 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4839",
      "UnitName": "Special project: Composition part 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4868",
      "UnitName": "Philosophy honours A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4869",
      "UnitName": "Philosophy honours B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4924",
      "UnitName": "Honours: Social sciences research methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4938",
      "UnitName": "Special project: Creative music technology part 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "ATS4939",
      "UnitName": "Special project: Creative music technology part 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1001",
      "UnitName": "Introduction to development studies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1010",
      "UnitName": "Fundamentals of political science",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1011",
      "UnitName": "Fundamentals of international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1019",
      "UnitName": "Psychology: Introduction 1A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1020",
      "UnitName": "Psychology: Introduction 1B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1035",
      "UnitName": "Principles of public relations practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1061",
      "UnitName": "French and francophone studies 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1062",
      "UnitName": "French and francophone studies 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1264",
      "UnitName": "Ethics and biotechnology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1279",
      "UnitName": "Media and society",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1281",
      "UnitName": "Explaining crime: Theory and practice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1282",
      "UnitName": "Introduction to Criminal Justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1285",
      "UnitName": "Child and youth development in South Africa: A person-in-environment perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1286",
      "UnitName": "Child and youth development: A five-level developmental model",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1294",
      "UnitName": "Reading Africa: An introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1306",
      "UnitName": "Introduction to human geography",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1308",
      "UnitName": "Introduction to Physical Geography",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1325",
      "UnitName": "International studies 1",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1326",
      "UnitName": "International studies 2",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1328",
      "UnitName": "Journalism 1: Introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1329",
      "UnitName": "Journalism 2: Introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1365",
      "UnitName": "Everyday life in sociological perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1366",
      "UnitName": "Families, relationships, health and the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1371",
      "UnitName": "Introduction to philosophy: Moral dilemmas and philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA1433",
      "UnitName": "Interpersonal communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2010",
      "UnitName": "Political ideologies",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2012",
      "UnitName": "Comparative politics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2015",
      "UnitName": "Biological and cognitive psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2016",
      "UnitName": "Public policy-making",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2030",
      "UnitName": "Corporate Communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2035",
      "UnitName": "Development communication",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2040",
      "UnitName": "Issues, crises and social responsibility management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2045",
      "UnitName": "Public relations and the media",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2378",
      "UnitName": "Development and the developing world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2436",
      "UnitName": "New media and cyber cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2455",
      "UnitName": "Child and adult development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2460",
      "UnitName": "Industrial and organisational psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2461",
      "UnitName": "Crime and punishment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2470",
      "UnitName": "Victimology in South Africa",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2490",
      "UnitName": "Research assessment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2495",
      "UnitName": "Social and community psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2549",
      "UnitName": "Poverty and power: The uneven world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2625",
      "UnitName": "Places and spaces: International migration in the global age",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2627",
      "UnitName": "Global and local cultures: Creating and consuming",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2633",
      "UnitName": "World cities: A historical and comparative analysis",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2717",
      "UnitName": "Medical sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2719",
      "UnitName": "Theoretical perspectives in political and social thought",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2723",
      "UnitName": "Methodological issues in the social sciences",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2762",
      "UnitName": "Health and safety guidelines for children and youth",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2763",
      "UnitName": "Child and youth assessment: Risk and protective factors, signs and symptoms",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2764",
      "UnitName": "Building support networks for children and families",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2765",
      "UnitName": "Child and youth interventions: Individual, group and community interventions",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2785",
      "UnitName": "Legal aspects of journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2787",
      "UnitName": "Journalism: An online perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2789",
      "UnitName": "Journalism: Video perspectives",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA2939",
      "UnitName": "Ethics and the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3010",
      "UnitName": "Competing models of political economy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3015",
      "UnitName": "War, peace and international security",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3018",
      "UnitName": "Research design and quantitative methods",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3031",
      "UnitName": "Public relations campaigns and events",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3135",
      "UnitName": "Abnormal behaviour",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3184",
      "UnitName": "Public relations work integrated learning",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3259",
      "UnitName": "Geographical information systems (GIS): Planning and decision making",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3301",
      "UnitName": "Social inclusion internship: Working on migrant and refugee settlement in multicultural communities",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3360",
      "UnitName": "Psychotherapy and Counselling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3380",
      "UnitName": "Sociology of development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3417",
      "UnitName": "Africa and its others",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3432",
      "UnitName": "Managing communication in multicultural organisations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3453",
      "UnitName": "Research fundamentals",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3462",
      "UnitName": "Psychological assessment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3463",
      "UnitName": "Criminal behaviour in South Africa: A psychosocial approach",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3465",
      "UnitName": "Personality",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3466",
      "UnitName": "Women and crime: Damsels in distress",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3467",
      "UnitName": "Child justice: Human rights, law reform and socio-criminology of deviance",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3468",
      "UnitName": "Forensic criminology: Victim and offender profiling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3542",
      "UnitName": "Geographical Information Systems: FOSS Geo-informatics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3546",
      "UnitName": "Environmental impact assessment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3547",
      "UnitName": "Urban planning, development and sustainability",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3548",
      "UnitName": "Environmental policy and resource management",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3550",
      "UnitName": "Climatology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3629",
      "UnitName": "Beliefs, religion and spirituality: A global perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3640",
      "UnitName": "Philosophy of war and global conflict",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3641",
      "UnitName": "Diplomacy in contemporary international relations",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3643",
      "UnitName": "Africa in the modern world",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3644",
      "UnitName": "South Africa: Democracy and development",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3688",
      "UnitName": "Foreign policy: Introduction",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3703",
      "UnitName": "The global politics of arms control and disarmament",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3717",
      "UnitName": "Medical sociology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3720",
      "UnitName": "Sociological perspectives on youth culture and social change",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3737",
      "UnitName": "South Africa and African social justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3744",
      "UnitName": "School of Social Science workplace internship",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3764",
      "UnitName": "Consulting",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3769",
      "UnitName": "Family functioning and child abuse: The child and youth care worker's role",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3770",
      "UnitName": "Intermediary services in courts: Protecting the rights of the child and youth victim",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3771",
      "UnitName": "Management of community projects: Working preventatively with children, youth and families",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3772",
      "UnitName": "Field placements in child and youth care settings",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3806",
      "UnitName": "Reporting economic and business issues",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3808",
      "UnitName": "Investigative journalism in the South African and African context",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3810",
      "UnitName": "Reporting sport and sport cultures",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3869",
      "UnitName": "Political philosophy and justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3871",
      "UnitName": "Environmentalism: A philosophical perspective",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA3919",
      "UnitName": "Professional placement in Journalism: South Africa",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4010",
      "UnitName": "Selected topics in philosophy",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4020",
      "UnitName": "Selected topics in journalism",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4110",
      "UnitName": "Sociology selected topics",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4310",
      "UnitName": "Child and youth care policy and leadership: Advocating for the rights of children and youth",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4420",
      "UnitName": "Adult psychopathology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4430",
      "UnitName": "Counselling",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4440",
      "UnitName": "Psychology research project",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4445",
      "UnitName": "Social issues in psychology",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4450",
      "UnitName": "Researching for social sciences and humanities",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4480",
      "UnitName": "Psychological testing and assessment",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4721",
      "UnitName": "Communication and media practice applied",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4743",
      "UnitName": "Theoretical perspectives of conflict, crime, victimisation and criminal justice",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4778",
      "UnitName": "Social science honours dissertation A",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4779",
      "UnitName": "Social science honours dissertation B",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4810",
      "UnitName": "The globalisation of civil and human rights",
      "Faculty": "arts"
    },
    {
      "UnitCode": "AZA4889",
      "UnitName": "Advanced concepts in geography and environmental science",
      "Faculty": "arts"
    },
    {
      "UnitCode": "BCH2011",
      "UnitName": "Structure and function of cellular biomolecules",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH2022",
      "UnitName": "Metabolic basis of human diseases",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH3021",
      "UnitName": "Cellular organisation: Organelle structure and function in health and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH3031",
      "UnitName": "Functional genomics and molecular medicine",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH3042",
      "UnitName": "Cell signal transduction: Role in cancer and human disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH3052",
      "UnitName": "Protein biology: From sequence to structure and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BCH3990",
      "UnitName": "Action in biochemistry research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BEG3150",
      "UnitName": "Industry based learning program",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEH1032",
      "UnitName": "Evidence based practice, research and population health in community based emergency health services",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH1041",
      "UnitName": "Human development and health across the lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH1042",
      "UnitName": "Law, ethics and professionalism",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2012",
      "UnitName": "Paramedic management of respiratory conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2032",
      "UnitName": "Paramedic clinical practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2131",
      "UnitName": "Paramedic management of cardiovascular conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2141",
      "UnitName": "The paramedic in the community",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2152",
      "UnitName": "Pharmacotherapy in community-based emergency health",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH2201",
      "UnitName": "Paramedic management of mental health",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3011",
      "UnitName": "Paramedic management of medical conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3012",
      "UnitName": "Clinical education, leadership and emergency preparedness",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3022",
      "UnitName": "Research and contemporary challenges in community based emergency health",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3030",
      "UnitName": "Integrated clinical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3032",
      "UnitName": "Paramedic management of critical care specialty situations",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3071",
      "UnitName": "Extended care paramedic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3121",
      "UnitName": "Paramedic management of toxicological and environmental conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH3161",
      "UnitName": "Paramedic management of maternal and neonatal health",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH4100",
      "UnitName": "Honours literature review",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH4200",
      "UnitName": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "BEH4300",
      "UnitName": "Honours research report",
      "Faculty": "med"
    },
    {
      "UnitCode": "BES3120",
      "UnitName": "Perspectives on global business issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BES4000",
      "UnitName": "Research methodology 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BES4010",
      "UnitName": "Research methodology 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BES4020",
      "UnitName": "Directed studies 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BES4030",
      "UnitName": "Directed studies 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BES4100",
      "UnitName": "Research project and report",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW3100",
      "UnitName": "Work placement program",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW4000",
      "UnitName": "Research methodology 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW4010",
      "UnitName": "Research methodology 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW4020",
      "UnitName": "Directed studies 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW4030",
      "UnitName": "Directed studies 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEW4100",
      "UnitName": "Research project and report",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX2001",
      "UnitName": "You, money and life",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX2010",
      "UnitName": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX2410",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX2440",
      "UnitName": "Mathematics for economics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX2520",
      "UnitName": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3000",
      "UnitName": "Current issues in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3001",
      "UnitName": "Industry and community placement",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3006",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3012",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3024",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3106",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3112",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3120",
      "UnitName": "Perspectives on global business issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3150",
      "UnitName": "Sustainability practice and organisations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3350",
      "UnitName": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3351",
      "UnitName": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3400",
      "UnitName": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3410",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3411",
      "UnitName": "Innovation and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3450",
      "UnitName": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3451",
      "UnitName": "Investigative project in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3460",
      "UnitName": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3500",
      "UnitName": "Current issues in commerce",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3510",
      "UnitName": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3555",
      "UnitName": "Integrative business practices",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3622",
      "UnitName": "Issues in global business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3710",
      "UnitName": "Labour economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX3722",
      "UnitName": "Engaging with international business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4420",
      "UnitName": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4460",
      "UnitName": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4650",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4670",
      "UnitName": "Economic development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4690",
      "UnitName": "International trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX4810",
      "UnitName": "Public economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5000",
      "UnitName": "Quantitative business research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5001",
      "UnitName": "Industry and community project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5002",
      "UnitName": "Commercialisation project A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5003",
      "UnitName": "Commercialisation project B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5010",
      "UnitName": "Qualitative business research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5012",
      "UnitName": "Industry based learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5020",
      "UnitName": "Research thesis proposal",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5110",
      "UnitName": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5200",
      "UnitName": "Climate change and carbon management strategies",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5300",
      "UnitName": "Applied financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5411",
      "UnitName": "Creativity and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5460",
      "UnitName": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5463",
      "UnitName": "Advanced buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5479",
      "UnitName": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5650",
      "UnitName": "Microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5660",
      "UnitName": "Macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5832",
      "UnitName": "European business and society",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5850",
      "UnitName": "Mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5870",
      "UnitName": "Advanced health economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5900",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5950",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5973",
      "UnitName": "Economic evaluation in health care",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX5975",
      "UnitName": "Principles of health economics for developing countries",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6010",
      "UnitName": "Empirical finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6011",
      "UnitName": "Issues in asset pricing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6012",
      "UnitName": "Corporate financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6013",
      "UnitName": "Issues in financial institutions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6100",
      "UnitName": "Advanced quantitative research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6200",
      "UnitName": "Advanced qualitative research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6300",
      "UnitName": "Philosophy of research",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6400",
      "UnitName": "Empirical methods for economic analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6500",
      "UnitName": "Statistical inference",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6510",
      "UnitName": "Foundations of econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6600",
      "UnitName": "Research topics in advanced microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6650",
      "UnitName": "Research topics in advanced microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6660",
      "UnitName": "Research topics in advanced macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6700",
      "UnitName": "Research paper",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6800",
      "UnitName": "Advanced mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6900",
      "UnitName": "Research topics in advanced macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BEX6990",
      "UnitName": "Research Strategies and Methods in Business Law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFB1001",
      "UnitName": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFB2140",
      "UnitName": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFB3121",
      "UnitName": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC1001",
      "UnitName": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC2140",
      "UnitName": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC2240",
      "UnitName": "Equities and investment analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC2340",
      "UnitName": "Debt markets and fixed income securities",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC2751",
      "UnitName": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3140",
      "UnitName": "Corporate finance 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3170",
      "UnitName": "Management of financial intermediaries",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3240",
      "UnitName": "International finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3340",
      "UnitName": "Derivatives 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3440",
      "UnitName": "Pension and financial planning",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3540",
      "UnitName": "Modelling in finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC3999",
      "UnitName": "Finance and society",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5130",
      "UnitName": "Case studies and research in banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5260",
      "UnitName": "Money market dealing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5280",
      "UnitName": "Institutional asset and liability management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5914",
      "UnitName": "Bank lending",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5915",
      "UnitName": "Options, futures and risk management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5916",
      "UnitName": "International banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5925",
      "UnitName": "Financial management theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5926",
      "UnitName": "Australian capital markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFC5935",
      "UnitName": "Portfolio management and theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF1001",
      "UnitName": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF2140",
      "UnitName": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF2341",
      "UnitName": "International financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF2401",
      "UnitName": "Commercial banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF2701",
      "UnitName": "Equity markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF2751",
      "UnitName": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3111",
      "UnitName": "Personal financial planning",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3121",
      "UnitName": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3301",
      "UnitName": "Money market operations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3331",
      "UnitName": "International banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3351",
      "UnitName": "Investment banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3651",
      "UnitName": "Treasury management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3841",
      "UnitName": "Credit analysis and lending management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF3999",
      "UnitName": "Financial institutions and society",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5021",
      "UnitName": "Case studies in risk management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5040",
      "UnitName": "Advanced security analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5050",
      "UnitName": "Global banking institutions and issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5130",
      "UnitName": "Case studies and research in banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5180",
      "UnitName": "Research dissertation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5230",
      "UnitName": "Global financial markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5250",
      "UnitName": "Corporate treasury management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5260",
      "UnitName": "Money market dealing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5270",
      "UnitName": "Funds management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5280",
      "UnitName": "Institutional asset and liability management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5290",
      "UnitName": "Advanced derivatives and quantitative finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5300",
      "UnitName": "Case studies in finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5333",
      "UnitName": "Project finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5380",
      "UnitName": "Credit risk modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5390",
      "UnitName": "Advanced financial planning",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5580",
      "UnitName": "Mergers and acquisitions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5902",
      "UnitName": "Introduction to risk principles",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5904",
      "UnitName": "New venture finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5913",
      "UnitName": "Financial planning",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5914",
      "UnitName": "Bank lending",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5915",
      "UnitName": "Options, futures and risk management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5916",
      "UnitName": "International banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5925",
      "UnitName": "Financial management theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5926",
      "UnitName": "Australian capital markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5935",
      "UnitName": "Portfolio management and theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5954",
      "UnitName": "Business finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5959",
      "UnitName": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5973",
      "UnitName": "International finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFF5977",
      "UnitName": "Risk financing and treasury management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFG2631",
      "UnitName": "Financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFG3121",
      "UnitName": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFM5959",
      "UnitName": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFP1001",
      "UnitName": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFP2140",
      "UnitName": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFP3400",
      "UnitName": "Sport finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFS2780",
      "UnitName": "Corporate finance A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFS3790",
      "UnitName": "Corporate finance B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFS5959",
      "UnitName": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW1001",
      "UnitName": "Foundations of finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW1310",
      "UnitName": "Introduction to Islamic banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW2140",
      "UnitName": "Corporate finance 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW2341",
      "UnitName": "International financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW2401",
      "UnitName": "Commercial banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW2751",
      "UnitName": "Derivatives 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3121",
      "UnitName": "Investments and portfolio management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3331",
      "UnitName": "International banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3540",
      "UnitName": "Modelling in finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3651",
      "UnitName": "Treasury management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3652",
      "UnitName": "Corporate treasury and credit management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3841",
      "UnitName": "Credit analysis and lending management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFW3851",
      "UnitName": "Behavioural finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX3355",
      "UnitName": "Property investment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX3871",
      "UnitName": "International study program in banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4000",
      "UnitName": "Research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4018",
      "UnitName": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4030",
      "UnitName": "Advanced modelling in finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4060",
      "UnitName": "Issues in corporate finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4080",
      "UnitName": "Issues in banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX4120",
      "UnitName": "Issues in investments",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX5000",
      "UnitName": "Research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX5018",
      "UnitName": "Research dissertation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFX5860",
      "UnitName": "International study program in banking and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BFZ5959",
      "UnitName": "Accounting and finance for international managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BIO1011",
      "UnitName": "Biology I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO1022",
      "UnitName": "Biology II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO1042",
      "UnitName": "Environmental biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO1711",
      "UnitName": "Vertebrate biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO1722",
      "UnitName": "Cell biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2011",
      "UnitName": "Ecology and biodiversity",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2022",
      "UnitName": "Evolutionary ecology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2040",
      "UnitName": "Conservation biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2060",
      "UnitName": "Analytical methods in biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2181",
      "UnitName": "Evolution of plant diversity",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2231",
      "UnitName": "Animal diversity",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2242",
      "UnitName": "Animal structure and function",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2800",
      "UnitName": "Tropical field biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO2810",
      "UnitName": "Tropical ecology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3011",
      "UnitName": "Research methods in biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3021",
      "UnitName": "Marine biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3052",
      "UnitName": "Animal behaviour",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3070",
      "UnitName": "Trends in ecology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3082",
      "UnitName": "Global change biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3091",
      "UnitName": "Biology of Australian vegetation",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3111",
      "UnitName": "Ecological applications",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3132",
      "UnitName": "Biology of Australian vertebrates",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3800",
      "UnitName": "Tropical environmental management",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3810",
      "UnitName": "Tropical aquatic biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3820",
      "UnitName": "Tropical terrestrial biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO3990",
      "UnitName": "Biology in action research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO4100",
      "UnitName": "Biology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO4180",
      "UnitName": "Tropical environmental biology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO4200",
      "UnitName": "Advanced coursework in biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BIO4280",
      "UnitName": "Honours coursework in tropical environmental biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMA1011",
      "UnitName": "Foundations of anatomy and physiology for health practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA1012",
      "UnitName": "Foundations of anatomy and physiology for health practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA1901",
      "UnitName": "Human structure and function 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA1902",
      "UnitName": "Human structure and function 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA1912",
      "UnitName": "Human bioscience in nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA2901",
      "UnitName": "Processes of disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA2902",
      "UnitName": "Communicable diseases",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMA5011",
      "UnitName": "Introduction to Anatomy and Physiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BME3032",
      "UnitName": "Introduction to the health system",
      "Faculty": "med"
    },
    {
      "UnitCode": "BME3082",
      "UnitName": "Fetal and neonatal development",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMH4100",
      "UnitName": "Biomedicine research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMH4110",
      "UnitName": "Biomedicine research project part time A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMH4120",
      "UnitName": "Biomedicine research project part time B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMH4200",
      "UnitName": "Advanced studies in biomedicine",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMH4210",
      "UnitName": "Advanced studies in biomedicine part time A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMH4220",
      "UnitName": "Advanced studies in biomedicine part time B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BMS1011",
      "UnitName": "Biomedical chemistry",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS1021",
      "UnitName": "Cells, tissues and organisms",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS1031",
      "UnitName": "Medical biophysics",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS1042",
      "UnitName": "Public health and preventive medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS1052",
      "UnitName": "Human neurobiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS1062",
      "UnitName": "Molecular biology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2011",
      "UnitName": "Structure of the human body: An evolutionary and functional perspective",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2021",
      "UnitName": "Human molecular cell biology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2031",
      "UnitName": "Body systems",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2042",
      "UnitName": "Human genetics",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2052",
      "UnitName": "Microbes in health and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS2062",
      "UnitName": "Introduction to bioinformatics",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS3021",
      "UnitName": "Molecular medicine and biotechnology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS3031",
      "UnitName": "Molecular mechanisms of disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS3052",
      "UnitName": "Biomedical basis and epidemiology of human disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS3930",
      "UnitName": "Action in biomedical science major research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS3990",
      "UnitName": "Action in biomedical science minor research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS4100",
      "UnitName": "Biomedical science research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS4200",
      "UnitName": "Advanced studies in biomedical science",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS4301",
      "UnitName": "Advanced studies in biomedical science",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS4302",
      "UnitName": "Biomedical science research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5001",
      "UnitName": "Introduction to research and research methodology",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5002",
      "UnitName": "Research skills and techniques",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5003",
      "UnitName": "Infectious diseases and population health",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5004",
      "UnitName": "Advanced neuroscience",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5005",
      "UnitName": "Regenerative medicine and stem cells",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5006",
      "UnitName": "Cardiovascular biology and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5007",
      "UnitName": "Biotechnology: Commercialising biomedical science",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5008",
      "UnitName": "Research project and thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5100",
      "UnitName": "Research Project in Biomedical Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5101",
      "UnitName": "Research Project in Biomedical Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5200",
      "UnitName": "Advanced Studies in Biomedical Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "BMS5201",
      "UnitName": "Advanced Studies in Biomedical Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND3101",
      "UnitName": "Evidence based management",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND3102",
      "UnitName": "Introduction to dietetic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND3202",
      "UnitName": "Food for dietetic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND3302",
      "UnitName": "Dietetic practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND4082",
      "UnitName": "Improving the populations nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND4092",
      "UnitName": "Practice and research in public health nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND4102",
      "UnitName": "Practice and research in dietetics",
      "Faculty": "med"
    },
    {
      "UnitCode": "BND4402",
      "UnitName": "Dietetic practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "BNS3021",
      "UnitName": "Neurochemistry and behaviour",
      "Faculty": "med"
    },
    {
      "UnitCode": "BNS3052",
      "UnitName": "Drugs, brain and altered awareness",
      "Faculty": "med"
    },
    {
      "UnitCode": "BNS3062",
      "UnitName": "Imaging and brain disorders",
      "Faculty": "med"
    },
    {
      "UnitCode": "BNS4100",
      "UnitName": "Behavioural neuroscience honours: Research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "BNS4200",
      "UnitName": "Behavioural neuroscience honours: Research design and analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "BTB1010",
      "UnitName": "Commercial Law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTB2220",
      "UnitName": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTB3221",
      "UnitName": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTB3281",
      "UnitName": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTB3350",
      "UnitName": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC1110",
      "UnitName": "Commercial law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC3150",
      "UnitName": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC3200",
      "UnitName": "Finance law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC3300",
      "UnitName": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC3350",
      "UnitName": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTC5904",
      "UnitName": "Law and commercial decisions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF1010",
      "UnitName": "Business law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF2223",
      "UnitName": "Corporate crime",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF2601",
      "UnitName": "Banking law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF3181",
      "UnitName": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF3888",
      "UnitName": "Chinese taxation law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF3931",
      "UnitName": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5000",
      "UnitName": "Corporate governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5001",
      "UnitName": "Business regulation and compliance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5050",
      "UnitName": "Comparative business law in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5060",
      "UnitName": "The law of employment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5130",
      "UnitName": "International law and policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5150",
      "UnitName": "Intellectual property and marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5160",
      "UnitName": "The globalisation of law and development in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5170",
      "UnitName": "Chinese business law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5180",
      "UnitName": "Financial services regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5235",
      "UnitName": "Workplace and investment taxation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5340",
      "UnitName": "Regional trade governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5501",
      "UnitName": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5801",
      "UnitName": "Masters research paper",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5841",
      "UnitName": "Human resources management law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5888",
      "UnitName": "Chinese taxation law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5900",
      "UnitName": "Major research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5903",
      "UnitName": "Law and business decisions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5904",
      "UnitName": "Law and commercial decisions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5910",
      "UnitName": "Sustainability regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5919",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTF5965",
      "UnitName": "Taxation law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTG2220",
      "UnitName": "Corporations law and trusts",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTG2223",
      "UnitName": "Corporate crime",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTG3221",
      "UnitName": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTH1802",
      "UnitName": "Fundamentals of biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH2732",
      "UnitName": "Recombinant DNA technology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH2741",
      "UnitName": "Biochemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH2752",
      "UnitName": "Cellular metabolism",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH2820",
      "UnitName": "Crop science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH2830",
      "UnitName": "Fundamentals of microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3012",
      "UnitName": "Biotechnology science, industry and commercialisation",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3711",
      "UnitName": "Food and industrial microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3722",
      "UnitName": "Medical microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3732",
      "UnitName": "Environmental microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3741",
      "UnitName": "Medical cell biology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3752",
      "UnitName": "Molecular biology and biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3800",
      "UnitName": "Bioinformatics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3820",
      "UnitName": "Plant biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH3960",
      "UnitName": "Interdisciplinary advanced practical in pharmacology and chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH4100",
      "UnitName": "Biotechnology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH4200",
      "UnitName": "The practice of biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTH4280",
      "UnitName": "Honours coursework in biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "BTM5903",
      "UnitName": "Law and business decisions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTM5919",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTP1010",
      "UnitName": "Business Law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS1201",
      "UnitName": "South Africa business law A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS2201",
      "UnitName": "South African business law B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS2301",
      "UnitName": "South African taxation A",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS3201",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS3301",
      "UnitName": "South African business law C",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS3302",
      "UnitName": "South African taxation B",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS3303",
      "UnitName": "South African taxation law C",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTS5919",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW1042",
      "UnitName": "Malaysian business law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2122",
      "UnitName": "South African taxation of businesses",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2213",
      "UnitName": "Malaysian company law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2220",
      "UnitName": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2241",
      "UnitName": "Comparative workplace relations law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2313",
      "UnitName": "Malaysian corporate governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW2320",
      "UnitName": "Current issues in corporate governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3153",
      "UnitName": "Malaysian income tax law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3201",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3221",
      "UnitName": "Taxation law and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3233",
      "UnitName": "Conventional and Islamic finance law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3241",
      "UnitName": "Employment law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3243",
      "UnitName": "Finance law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3281",
      "UnitName": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTW3300",
      "UnitName": "South African administration of deceased and insolvent estates",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX2000",
      "UnitName": "Corporations law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3100",
      "UnitName": "Sustainability regulation for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3110",
      "UnitName": "International trade law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3130",
      "UnitName": "Stock exchange and derivatives law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3350",
      "UnitName": "Business taxation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3650",
      "UnitName": "Sports law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3699",
      "UnitName": "Insolvency",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3900",
      "UnitName": "Research project in business law or taxation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX3991",
      "UnitName": "Employment law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX4110",
      "UnitName": "Directed studies",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX4130",
      "UnitName": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX4900",
      "UnitName": "Research methods and proposal",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5060",
      "UnitName": "The law of employment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5150",
      "UnitName": "Law of marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5160",
      "UnitName": "The globalisation of law and development in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5170",
      "UnitName": "Chinese business law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5220",
      "UnitName": "International issues in employment law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5801",
      "UnitName": "Final research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "BTX5841",
      "UnitName": "Human resources management law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "CCS5100",
      "UnitName": "Research Project in Medical Science",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5101",
      "UnitName": "Research Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5200",
      "UnitName": "Advanced Studies in Medical Science",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5201",
      "UnitName": "Advanced Studies in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5300",
      "UnitName": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5301",
      "UnitName": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5400",
      "UnitName": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "CCS5401",
      "UnitName": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "CDS1001",
      "UnitName": "Communication Design Studio 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS1002",
      "UnitName": "Communication Design Studio 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS1511",
      "UnitName": "Photographic art direction",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS1531",
      "UnitName": "Illustration for narrative",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2001",
      "UnitName": "Communication Design Studio 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2002",
      "UnitName": "Communication Design Studio 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2511",
      "UnitName": "Branding for designers",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2512",
      "UnitName": "Packaging design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2521",
      "UnitName": "Creative coding",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2522",
      "UnitName": "Creative expression through physical computing",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2523",
      "UnitName": "Creative visualisation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2524",
      "UnitName": "Unconventional publishing",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS2531",
      "UnitName": "Illustration for animation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS3001",
      "UnitName": "Communication Design Studio 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS3002",
      "UnitName": "Communication Design Studio 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS4001",
      "UnitName": "Major project communication design part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CDS4002",
      "UnitName": "Major project communication design part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CEM6881",
      "UnitName": "Scanning electron microscopy",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CEM6882",
      "UnitName": "Transmission electron microscopy",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CER1111",
      "UnitName": "Ceramic practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER1112",
      "UnitName": "Ceramic practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER2113",
      "UnitName": "Ceramic practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER2114",
      "UnitName": "Ceramic practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER2123",
      "UnitName": "Ceramic practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER2124",
      "UnitName": "Ceramic practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER3115",
      "UnitName": "Ceramic practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CER3116",
      "UnitName": "Ceramic practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "CHE2161",
      "UnitName": "Mechanics of fluids",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2162",
      "UnitName": "Material and energy balances",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2163",
      "UnitName": "Heat and mass transfer",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2164",
      "UnitName": "Thermodynamics I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2166",
      "UnitName": "Introduction to process simulation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2167",
      "UnitName": "Process material selection",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE2871",
      "UnitName": "Biochemistry for engineers",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3161",
      "UnitName": "Chemistry and chemical thermodynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3162",
      "UnitName": "Process control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3163",
      "UnitName": "Sustainable processing I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3164",
      "UnitName": "Reaction engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3165",
      "UnitName": "Separation processes",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3166",
      "UnitName": "Process design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3167",
      "UnitName": "Transport phenomena and numerical methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3171",
      "UnitName": "Bioprocess technology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE3172",
      "UnitName": "Nanotechnology and materials 1",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4161",
      "UnitName": "Engineer in society",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4162",
      "UnitName": "Particle technology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4164",
      "UnitName": "Integrated industrial project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4170",
      "UnitName": "Design project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4171",
      "UnitName": "Biochemical engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4172",
      "UnitName": "Nanotechnology and materials 2",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4173",
      "UnitName": "Sustainable processing 2",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE4180",
      "UnitName": "Chemical engineering project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5167",
      "UnitName": "Pulp and paper laboratory",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5290",
      "UnitName": "Biomass resource and its utilisation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5291",
      "UnitName": "Engineering aspects of biomass pulping",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5292",
      "UnitName": "Chemistry of biomass processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5293",
      "UnitName": "Processing fibres into paper",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5294",
      "UnitName": "Performance of paper products",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5295",
      "UnitName": "Control of processes and quality",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5296",
      "UnitName": "Minimising environmental impact",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5297",
      "UnitName": "Recycling and contaminant removal",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5298",
      "UnitName": "Biorefinery foundations",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5299",
      "UnitName": "Biorefinery processes",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5881",
      "UnitName": "Advanced reaction engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5882",
      "UnitName": "Biomass and biorefineries",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5883",
      "UnitName": "Nanostructured membranes for separation and energy production",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5884",
      "UnitName": "Process modeling and optimisation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE5885",
      "UnitName": "Principles and practices for sustainable development",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE6881",
      "UnitName": "Advanced reaction engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE6882",
      "UnitName": "Biomass and biorefineries",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE6883",
      "UnitName": "Nanostructured membranes for separation and energy production",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE6884",
      "UnitName": "Process modeling and optimisation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHE6885",
      "UnitName": "Principles and practices for sustainable development",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHM1011",
      "UnitName": "Chemistry I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM1022",
      "UnitName": "Chemistry II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM1051",
      "UnitName": "Chemistry I advanced",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM1052",
      "UnitName": "Chemistry II advanced",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM1752",
      "UnitName": "Chemistry for engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CHM2752",
      "UnitName": "Chemistry of the environment",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2911",
      "UnitName": "Inorganic and organic chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2922",
      "UnitName": "Spectroscopy and analytical chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2942",
      "UnitName": "Biological chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2951",
      "UnitName": "Environmental chemistry - water",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2962",
      "UnitName": "Food chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM2990",
      "UnitName": "Introductory chemical research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3180",
      "UnitName": "Materials chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3742",
      "UnitName": "Chemistry of the environment 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3911",
      "UnitName": "Advanced physical chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3922",
      "UnitName": "Advanced organic chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3930",
      "UnitName": "Medicinal chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3941",
      "UnitName": "Advanced inorganic chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3952",
      "UnitName": "Advanced analytical chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3960",
      "UnitName": "Environmental chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3972",
      "UnitName": "Sustainable chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3980",
      "UnitName": "Chemistry study abroad",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM3990",
      "UnitName": "Chemistry project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4100",
      "UnitName": "Chemistry research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4110",
      "UnitName": "Chemistry research project part time I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4120",
      "UnitName": "Chemistry research project part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4180",
      "UnitName": "Medicinal chemistry research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4201",
      "UnitName": "Chemistry honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4211",
      "UnitName": "Chemistry honours coursework part time I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4221",
      "UnitName": "Chemistry honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CHM4280",
      "UnitName": "Honours coursework in medicinal chemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "CIV2206",
      "UnitName": "Mechanics of solids",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2207",
      "UnitName": "Computing and water systems modelling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2225",
      "UnitName": "Design of steel and timber structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2226",
      "UnitName": "Design of concrete and masonry structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2242",
      "UnitName": "Geomechanics I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2263",
      "UnitName": "Water systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2282",
      "UnitName": "Transport and traffic engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV2283",
      "UnitName": "Civil engineering construction",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3203",
      "UnitName": "Civil engineering construction",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3204",
      "UnitName": "Engineering investigation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3205",
      "UnitName": "Project management for civil engineers",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3221",
      "UnitName": "Building structures and technology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3222",
      "UnitName": "Bridge design and assessment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3247",
      "UnitName": "Geomechanics II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3248",
      "UnitName": "Groundwater and environmental geomechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3264",
      "UnitName": "Urban water and wastewater systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV3283",
      "UnitName": "Road engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4210",
      "UnitName": "Project A",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4211",
      "UnitName": "Project B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4212",
      "UnitName": "Civil and environmental engineering practice",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4234",
      "UnitName": "Advanced structural analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4235",
      "UnitName": "Advanced structural design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4248",
      "UnitName": "Ground hazards engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4249",
      "UnitName": "Foundation engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4261",
      "UnitName": "Integrated urban water management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4268",
      "UnitName": "Water resources management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4283",
      "UnitName": "Transport planning",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV4284",
      "UnitName": "Traffic systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5301",
      "UnitName": "Advanced traffic engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5302",
      "UnitName": "Traffic engineering and management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5303",
      "UnitName": "Quantitative methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5304",
      "UnitName": "Intelligent transport systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5305",
      "UnitName": "Travel demand modelling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5306",
      "UnitName": "Road safety engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5308",
      "UnitName": "Transport and traffic systems project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5309",
      "UnitName": "Transport and traffic data",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5310",
      "UnitName": "Infrastructure project and policy evaluation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5311",
      "UnitName": "Infrastructure project management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5312",
      "UnitName": "Asset management I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5313",
      "UnitName": "Asset management II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5314",
      "UnitName": "Planning urban transport systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5315",
      "UnitName": "Transport economics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5316",
      "UnitName": "Fundamentals of urban public transport",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5318",
      "UnitName": "Intelligent transportation systems: engineering and management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5319",
      "UnitName": "Quantitative methods for transportation systems analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5320",
      "UnitName": "Case studies in transportation systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5321",
      "UnitName": "Sustainable transportation systems planning",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5322",
      "UnitName": "Urban public transportation systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5406",
      "UnitName": "Modelling transportation systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5881",
      "UnitName": "Ground water hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5882",
      "UnitName": "Flood hydraulics and hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5883",
      "UnitName": "Surface water hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5884",
      "UnitName": "Water sensitive stormwater design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5885",
      "UnitName": "Infrastructure dynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5886",
      "UnitName": "Infrastructure geomechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5887",
      "UnitName": "Infrastructure rehabilitation and monitoring",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV5888",
      "UnitName": "Advanced computational methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6301",
      "UnitName": "Advanced traffic engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6302",
      "UnitName": "Traffic engineering and management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6305",
      "UnitName": "Travel demand modelling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6314",
      "UnitName": "Transport planning and policy",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6881",
      "UnitName": "Ground water hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6882",
      "UnitName": "Flood hydraulics and hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6883",
      "UnitName": "Surface water hydrology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6884",
      "UnitName": "Water sensitive stormwater design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6885",
      "UnitName": "Infrastructure dynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6886",
      "UnitName": "Infrastructure geomechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6887",
      "UnitName": "Infrastructure rehabilitation and monitoring",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CIV6888",
      "UnitName": "Advanced computational methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "CMH5001",
      "UnitName": "Mental health practice essentials",
      "Faculty": "med"
    },
    {
      "UnitCode": "CMH5002",
      "UnitName": "The context for mental health practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "CMH5003",
      "UnitName": "Concepts in mental health illness",
      "Faculty": "med"
    },
    {
      "UnitCode": "CMH5004",
      "UnitName": "Recovery oriented mental health practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "CMH5005",
      "UnitName": "Mental health of the elderly",
      "Faculty": "med"
    },
    {
      "UnitCode": "CMH5006",
      "UnitName": "Transcultural mental health",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5001",
      "UnitName": "Psychoanalytic and developmental theories 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5002",
      "UnitName": "Normal developmental observation",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5003",
      "UnitName": "Psychoanalytic and developmental theories 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5004",
      "UnitName": "Psychodynamic assessment of children and adolescents",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5005",
      "UnitName": "Principles of child psychotherapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5006",
      "UnitName": "Principles of adolescent psychotherapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5007",
      "UnitName": "Principles of short term therapy and crisis work",
      "Faculty": "med"
    },
    {
      "UnitCode": "CPS5008",
      "UnitName": "Principles of working with parents",
      "Faculty": "med"
    },
    {
      "UnitCode": "DEV2011",
      "UnitName": "Early human development from cells to tissues",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DEV2022",
      "UnitName": "Human anatomy and development: Tissues and body systems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DEV3011",
      "UnitName": "Fundamentals of developmental processes",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DEV3022",
      "UnitName": "Developmental and anatomical basis of human health and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DEV3032",
      "UnitName": "Stem cells and the foundations of life",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DEV3990",
      "UnitName": "Action in developmental biology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "DGN1001",
      "UnitName": "Design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN1104",
      "UnitName": "Interdisciplinary design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN2000",
      "UnitName": "Interdisciplinary Design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN2003",
      "UnitName": "Interdisciplinary design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN2004",
      "UnitName": "Interdisciplinary design studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN3105",
      "UnitName": "Interdisciplinary design studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN3106",
      "UnitName": "Interdisciplinary design studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN4001",
      "UnitName": "Major project (design) part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DGN4002",
      "UnitName": "Major project (design) part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS1103",
      "UnitName": "Digital processes for art and design 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS1704",
      "UnitName": "Web design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS1911",
      "UnitName": "3D design and visualisation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS1912",
      "UnitName": "Virtual space A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2105",
      "UnitName": "Digital imaging",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2601",
      "UnitName": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2904",
      "UnitName": "3D modeling",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2906",
      "UnitName": "Design for multimedia",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2907",
      "UnitName": "3D animation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2909",
      "UnitName": "Electronic design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS2910",
      "UnitName": "Virtual space B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3010",
      "UnitName": "Digital Media Studio A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3020",
      "UnitName": "Digital Media Studio B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3901",
      "UnitName": "Interactive animation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3902",
      "UnitName": "3D imaging studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3903",
      "UnitName": "Digital imaging - the moving image",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3904",
      "UnitName": "Digital imaging studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3905",
      "UnitName": "Digital audio video - advanced production",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS3906",
      "UnitName": "Digital publication",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS4201",
      "UnitName": "3D animation and virtual space",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS4604",
      "UnitName": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS5201",
      "UnitName": "3D animation virtual space",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DIS5604",
      "UnitName": "Digital audio/video",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DPH6005",
      "UnitName": "Doctor of public health: Public health practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5101",
      "UnitName": "Psychopathology part 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5102",
      "UnitName": "Psychological assessment part 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5103",
      "UnitName": "Research methods in professional psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5104",
      "UnitName": "Ethics and Professional Practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5105",
      "UnitName": "Clinical developmental psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5161",
      "UnitName": "Ethics and Professional Practice in Neuropsychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5162",
      "UnitName": "Neuroanatomy for the clinical neuropsychologist",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5201",
      "UnitName": "Psychopathology part 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5203",
      "UnitName": "Theories and techniques of intervention part 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5261",
      "UnitName": "Neuropsychological models of cognition and behaviour part 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5262",
      "UnitName": "Case analysis and professional practice in neuropsychology 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5263",
      "UnitName": "Neuropsychological assessment",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5265",
      "UnitName": "Neuropsychological syndromes",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY5299",
      "UnitName": "Introductory practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6103",
      "UnitName": "Theories and techniques of intervention part 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6105",
      "UnitName": "Psychopharmacology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6107",
      "UnitName": "Health psychology and behavioural medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6162",
      "UnitName": "Case analysis and professional practice in neuropsychology 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6199",
      "UnitName": "Intermediate practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6204",
      "UnitName": "Clinical neuropsychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6261",
      "UnitName": "Developmental neuropsychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6262",
      "UnitName": "Case analysis and professional practice in neuropsychology 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6263",
      "UnitName": "Recovery of function and rehabilitation after brain injury",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6299",
      "UnitName": "Advanced practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY6399",
      "UnitName": "Specialised clinical practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY7131",
      "UnitName": "Advanced Clinical Psychology: General",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY7141",
      "UnitName": "Advanced Clinical Psychology: Child, adolescent and family",
      "Faculty": "med"
    },
    {
      "UnitCode": "DPSY7199",
      "UnitName": "Advanced specialised practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "DRW1201",
      "UnitName": "Drawing 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DRW1202",
      "UnitName": "Drawing 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG1103",
      "UnitName": "Visual thinking and communication",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG1201",
      "UnitName": "Drawing 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG1202",
      "UnitName": "Drawing 2B (fine art/visual arts)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG1301",
      "UnitName": "Drawing 1C",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2501",
      "UnitName": "Drawing: Landscape, space and environment",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2504",
      "UnitName": "Drawing: Advanced studies 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2506",
      "UnitName": "Drawing: Social based strategies",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2507",
      "UnitName": "Drawing Conceptual studies 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2508",
      "UnitName": "Drawing Conceptual studies 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2509",
      "UnitName": "Drawing: The body 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2510",
      "UnitName": "Perceptual drawing A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2511",
      "UnitName": "Drawing: Anatomy 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG2784",
      "UnitName": "Visual investigation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3508",
      "UnitName": "Drawing (concept and research) C",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3511",
      "UnitName": "Drawing: Contemporary practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3516",
      "UnitName": "Drawing: Anatomy 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3518",
      "UnitName": "Drawing: Advanced studies 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3519",
      "UnitName": "Drawing: The Body 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3520",
      "UnitName": "Perceptual drawing B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "DWG3529",
      "UnitName": "Drawing: The body 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "EAE1011",
      "UnitName": "Earth, atmosphere and environment 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE1022",
      "UnitName": "Earth, atmosphere and environment 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2011",
      "UnitName": "Environmental problem solving and visualisation",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2111",
      "UnitName": "Introduction to climate science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2122",
      "UnitName": "Introduction to atmospheric physics and dynamics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2322",
      "UnitName": "Environmental earth science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2511",
      "UnitName": "Deep earth processes",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE2522",
      "UnitName": "Sediments and basins",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE3000",
      "UnitName": "Earth, atmosphere and environment research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE3900",
      "UnitName": "Landscape, environment and sustainability in Italy",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4100",
      "UnitName": "Earth, atmosphere and environment honours research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4110",
      "UnitName": "Earth, atmosphere and environment honours research project part time 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4120",
      "UnitName": "Earth, atmosphere and environment honours research project part time 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4200",
      "UnitName": "Earth, atmosphere and environment honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4210",
      "UnitName": "Earth, atmosphere and environment honours coursework part time 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE4220",
      "UnitName": "Earth, atmosphere and environment honours coursework part time 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EAE5258",
      "UnitName": "Geographical information systems (GIS) for environmental science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ECB1101",
      "UnitName": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB1102",
      "UnitName": "Introductory Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2141",
      "UnitName": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2330",
      "UnitName": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2331",
      "UnitName": "Macroeconomic and monetary policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2721",
      "UnitName": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2730",
      "UnitName": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB2731",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB3121",
      "UnitName": "Economics of international trade and finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB3143",
      "UnitName": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECB3830",
      "UnitName": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC1000",
      "UnitName": "Principles of microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC1100",
      "UnitName": "Principles of macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2000",
      "UnitName": "Intermediate microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2010",
      "UnitName": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2300",
      "UnitName": "Current issues in macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2360",
      "UnitName": "Environmental economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2400",
      "UnitName": "Current issues in applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2450",
      "UnitName": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2510",
      "UnitName": "Economic growth: causes and consequences",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2600",
      "UnitName": "Behavioural economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2610",
      "UnitName": "Game theory and strategic thinking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2800",
      "UnitName": "Prosperity, poverty and sustainability in a globalised world",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC2840",
      "UnitName": "Australian economic institutions and policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3640",
      "UnitName": "Economics of climate change",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3650",
      "UnitName": "Applied general equilibrium economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3660",
      "UnitName": "Monetary economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3670",
      "UnitName": "Economics of developing countries",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3690",
      "UnitName": "International economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3710",
      "UnitName": "Labour economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3800",
      "UnitName": "History of economic thought",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3810",
      "UnitName": "Public finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3830",
      "UnitName": "Industrial organisation and regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3840",
      "UnitName": "Mathematical economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC3860",
      "UnitName": "Integrated economic modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4500",
      "UnitName": "Long-run economic change",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4650",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4660",
      "UnitName": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4670",
      "UnitName": "Economic development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4690",
      "UnitName": "International trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4700",
      "UnitName": "Competition, regulation and policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4710",
      "UnitName": "Post-Keynesian economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4720",
      "UnitName": "Law and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4750",
      "UnitName": "Financial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4790",
      "UnitName": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4810",
      "UnitName": "Public economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4830",
      "UnitName": "Welfare economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4840",
      "UnitName": "Industrial organisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4860",
      "UnitName": "Honours research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4870",
      "UnitName": "Health economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC4990",
      "UnitName": "Economic evaluation of health services",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5470",
      "UnitName": "Competition, regulation and policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5475",
      "UnitName": "Financial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5479",
      "UnitName": "Project evaluation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5484",
      "UnitName": "Industrial organisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5650",
      "UnitName": "Microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5651",
      "UnitName": "Advanced microeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5660",
      "UnitName": "Macroeconomic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5690",
      "UnitName": "Theories in international and development economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5730",
      "UnitName": "Advanced applied general equilibrium analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5800",
      "UnitName": "Economics seminar",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5810",
      "UnitName": "Public economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5840",
      "UnitName": "Information, incentives and games",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5850",
      "UnitName": "Mathematical economic theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5861",
      "UnitName": "Economics research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5870",
      "UnitName": "Advanced health economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5900",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5901",
      "UnitName": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5940",
      "UnitName": "Current issues in applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5953",
      "UnitName": "Economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5970",
      "UnitName": "Introduction to health economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5971",
      "UnitName": "Pharmaceutical economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5973",
      "UnitName": "Economic evaluation in health care",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5974",
      "UnitName": "Applied health economics and health policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5975",
      "UnitName": "Principles of health economics for developing countries",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC5979",
      "UnitName": "Health economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC6660",
      "UnitName": "Research topics in advanced macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECC6690",
      "UnitName": "Research topics in open economy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECE2011",
      "UnitName": "Signal processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2021",
      "UnitName": "Electromagnetism",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2031",
      "UnitName": "Circuits and control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2041",
      "UnitName": "Telecommunications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2061",
      "UnitName": "Analogue electronics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2071",
      "UnitName": "Computer organisation and programming",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2072",
      "UnitName": "Digital systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2111",
      "UnitName": "Signals and systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2131",
      "UnitName": "Electrical circuits",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE2191",
      "UnitName": "Probability models in engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3022",
      "UnitName": "Wireless and guided EM",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3031",
      "UnitName": "Control systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3051",
      "UnitName": "Electrical energy systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3062",
      "UnitName": "Electronic systems and control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3073",
      "UnitName": "Computer systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3091",
      "UnitName": "Engineering design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3093",
      "UnitName": "Optimisation estimation and numerical methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3121",
      "UnitName": "Engineering electromagnetics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE3141",
      "UnitName": "Information and networks",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4012",
      "UnitName": "Applied digital signal processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4023",
      "UnitName": "Radio frequency electronics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4024",
      "UnitName": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4032",
      "UnitName": "Advanced control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4033",
      "UnitName": "Industrial instrumentation and measurement technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4042",
      "UnitName": "Communications theory",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4043",
      "UnitName": "Optical communications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4044",
      "UnitName": "Telecommunications protocols",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4045",
      "UnitName": "Network performance",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4053",
      "UnitName": "Electrical energy - generation and supply",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4054",
      "UnitName": "Electrical energy - power converters and motor control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4055",
      "UnitName": "Electrical energy - power electronic applications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4058",
      "UnitName": "Electrical energy - high voltage engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4063",
      "UnitName": "Large scale digital design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4064",
      "UnitName": "Electronic test technology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4074",
      "UnitName": "Advanced computer architecture",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4075",
      "UnitName": "Real time embedded systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4076",
      "UnitName": "Computer vision",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4077",
      "UnitName": "Advanced computing techniques",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4078",
      "UnitName": "Intelligent robotics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4081",
      "UnitName": "Medical instrumentation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4084",
      "UnitName": "Biomechanics of human musculoskeletal systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4086",
      "UnitName": "Medical imaging technology",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4087",
      "UnitName": "Medical technology innovation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4094",
      "UnitName": "Project A",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4095",
      "UnitName": "Project B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4099",
      "UnitName": "Professional practice",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4122",
      "UnitName": "Advanced electromagnetics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4808",
      "UnitName": "Organic electronics and micro devices",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE4809",
      "UnitName": "Solid state lighting",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5881",
      "UnitName": "Real-time system design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5882",
      "UnitName": "Advanced electronics design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5883",
      "UnitName": "Advanced signal processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5884",
      "UnitName": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5885",
      "UnitName": "Energy efficient lighting",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE5886",
      "UnitName": "Smart grids",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6881",
      "UnitName": "Real-time system design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6882",
      "UnitName": "Advanced electronics design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6883",
      "UnitName": "Advanced signal processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6884",
      "UnitName": "Wireless communications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6885",
      "UnitName": "Energy efficient lighting",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECE6886",
      "UnitName": "Smart grids",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ECF1100",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF1200",
      "UnitName": "Macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2331",
      "UnitName": "Macroeconomic and monetary policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2450",
      "UnitName": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2550",
      "UnitName": "Business in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2721",
      "UnitName": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2731",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF2931",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF3120",
      "UnitName": "Consumer economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF3121",
      "UnitName": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF3143",
      "UnitName": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF3900",
      "UnitName": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5010",
      "UnitName": "Research issues paper",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5040",
      "UnitName": "Industry economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5060",
      "UnitName": "Applied economics research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5200",
      "UnitName": "Game theory and business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5300",
      "UnitName": "Special research topics in applied economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5410",
      "UnitName": "Applied microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5421",
      "UnitName": "Applied macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5921",
      "UnitName": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5922",
      "UnitName": "Trade, finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5923",
      "UnitName": "Macroeconomics and monetary policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5927",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECF5953",
      "UnitName": "Economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG1102",
      "UnitName": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG2141",
      "UnitName": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG2721",
      "UnitName": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG2730",
      "UnitName": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG2731",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG3143",
      "UnitName": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECG3145",
      "UnitName": "Energy, environment and sustainable development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECM2360",
      "UnitName": "Environmental and natural resource economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECM3670",
      "UnitName": "Development economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECM3810",
      "UnitName": "Public sector economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECM5921",
      "UnitName": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECM5953",
      "UnitName": "Economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECP1100",
      "UnitName": "Microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECP2450",
      "UnitName": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS1101",
      "UnitName": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS1102",
      "UnitName": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS2141",
      "UnitName": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS2730",
      "UnitName": "Intermediate macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS2731",
      "UnitName": "Intermediate microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS3121",
      "UnitName": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS3143",
      "UnitName": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS3567",
      "UnitName": "Development economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS3830",
      "UnitName": "Competition and regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECS5921",
      "UnitName": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW1101",
      "UnitName": "Introductory microeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW1102",
      "UnitName": "Introductory macroeconomics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2141",
      "UnitName": "Economics of labour markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2450",
      "UnitName": "Sports economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2451",
      "UnitName": "The business of sport",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2721",
      "UnitName": "Trade finance and foreign exchange",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2730",
      "UnitName": "Macroeconomic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW2731",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3121",
      "UnitName": "Economics of international trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3143",
      "UnitName": "Economics of money and banking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3150",
      "UnitName": "Natural resources and environment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3291",
      "UnitName": "Multinational trade and investment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3301",
      "UnitName": "Case studies in international trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3567",
      "UnitName": "Development economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECW3830",
      "UnitName": "Business, competition and regulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECX2650",
      "UnitName": "Contemporary economic policy and general equilibrium",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECX3550",
      "UnitName": "Business in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECX5472",
      "UnitName": "Law and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECX5486",
      "UnitName": "Applied economics research paper",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ECX5921",
      "UnitName": "Introduction to international economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "EDF1010",
      "UnitName": "Learning in a university context",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1011",
      "UnitName": "Knowledge and context",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1012",
      "UnitName": "Mathematics for tertiary study",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1013",
      "UnitName": "Academic writing",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1028",
      "UnitName": "Information and communication technologies across the curriculum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1029",
      "UnitName": "Learners with special needs in the primary classroom",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1030",
      "UnitName": "English and literacy learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1031",
      "UnitName": "Creative learning in childhood through music and the arts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1032",
      "UnitName": "Thinking mathematically from an early age",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1033",
      "UnitName": "Education for environment and sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1038",
      "UnitName": "Introduction to the early childhood education field",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1039",
      "UnitName": "Inclusivity and partnerships in early childhood education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1051",
      "UnitName": "Early years professional experience 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1052",
      "UnitName": "Early years professional experience 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1053",
      "UnitName": "Primary professional experience 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1054",
      "UnitName": "Primary professional experience 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1055",
      "UnitName": "Secondary professional experience 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1056",
      "UnitName": "Secondary professional experience 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1071",
      "UnitName": "Introduction to health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1072",
      "UnitName": "Contemporary issues in health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1101",
      "UnitName": "Fieldwork experience 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1102",
      "UnitName": "Fieldwork experience 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1103",
      "UnitName": "Fieldwork experience in outdoor education and environmental studies 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1104",
      "UnitName": "Fieldwork experience in outdoor education and environmental studies 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1151",
      "UnitName": "Fundamentals of the English language",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1152",
      "UnitName": "Reading and writing the world",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1161",
      "UnitName": "Doing and learning mathematics",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1162",
      "UnitName": "Subject knowledge for teaching: Number and algebra",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1171",
      "UnitName": "Sociocultural foundations of health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1172",
      "UnitName": "Biophysical and behavioural foundations of health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1174",
      "UnitName": "Foundations of outdoor education and environmental studies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1175",
      "UnitName": "Ways of knowing outdoor environments",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1205",
      "UnitName": "English education 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1206",
      "UnitName": "Mathematics education 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1303",
      "UnitName": "Understanding learning and learners",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1304",
      "UnitName": "Understanding teaching for learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1551",
      "UnitName": "Foundation to inclusive education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF1552",
      "UnitName": "Using assessment to respond to diversity across the school years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2005",
      "UnitName": "Professional responsibilities, practice and relationships",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2006",
      "UnitName": "Education priorities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2007",
      "UnitName": "Adolescent development and learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2008",
      "UnitName": "Becoming a specialist teacher",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2020",
      "UnitName": "English and literacies 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2021",
      "UnitName": "Mathematics and numeracy 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2028",
      "UnitName": "Health, wellbeing and social learning in primary contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2029",
      "UnitName": "Active citizenship and community connections: Local and global",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2030",
      "UnitName": "Contemporary child development theories and practices",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2031",
      "UnitName": "Indigenous perspectives on teaching and learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2032",
      "UnitName": "Learning through play pedagogies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2033",
      "UnitName": "Learning with children, their families and communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2034",
      "UnitName": "Learning about patterns, shapes and numbers through play",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2035",
      "UnitName": "Health and physical wellbeing in the young child",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2038",
      "UnitName": "Curriculum, assessment and documentation in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2039",
      "UnitName": "Children and childhood across time: Policies and practices",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2051",
      "UnitName": "Early years professional experience 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2052",
      "UnitName": "Early years professional experience 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2053",
      "UnitName": "Primary professional experience 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2054",
      "UnitName": "Primary professional experience 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2055",
      "UnitName": "Secondary professional experience 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2056",
      "UnitName": "Secondary professional experience 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2057",
      "UnitName": "Primary professional experience 2C",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2071",
      "UnitName": "Interdisciplinary approaches to health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2072",
      "UnitName": "Social and environmental influences on health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2101",
      "UnitName": "Professional experience 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2102",
      "UnitName": "Professional experience 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2103",
      "UnitName": "Fieldwork experience in outdoor education and environmental studies 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2151",
      "UnitName": "New literacies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2152",
      "UnitName": "Diverse literacies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2161",
      "UnitName": "Numeracy and mathematics for learning and life",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2162",
      "UnitName": "Subject knowledge for teaching: Measurement and geometry",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2171",
      "UnitName": "Motor control and skill acquisition",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2172",
      "UnitName": "Applied movement contexts in health and physical education 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2173",
      "UnitName": "Perspectives on health",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2174",
      "UnitName": "Outdoor education, learners and contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2175",
      "UnitName": "Human interactions and relationships in outdoor education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2182",
      "UnitName": "Innovation in pedagogy through film and new media",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2210",
      "UnitName": "Fostering positive child and adolescent behaviour and development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2211",
      "UnitName": "Classroom practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2213",
      "UnitName": "English education 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2214",
      "UnitName": "Science education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2215",
      "UnitName": "Mathematics education 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2303",
      "UnitName": "Movement, environment and community",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2551",
      "UnitName": "Understanding behaviour in classrooms and schools",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF2552",
      "UnitName": "Learning and teaching for students with diverse needs in various education settings",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3007",
      "UnitName": "Developing multiple literacies in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3009",
      "UnitName": "Schooling, education and equity: Local and global perspectives",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3010",
      "UnitName": "Curriculum development and innovative practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3021",
      "UnitName": "Mathematics and numeracy 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3022",
      "UnitName": "Arts education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3023",
      "UnitName": "Advanced pedagogy in the primary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3024",
      "UnitName": "Advanced pedagogy in the primary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3030",
      "UnitName": "Diversity in child development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3031",
      "UnitName": "Local and global perspectives in education policy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3032",
      "UnitName": "Children's literature, storytelling and the arts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3033",
      "UnitName": "Change and transition in children's education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3034",
      "UnitName": "Children's literacy development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3035",
      "UnitName": "Investigating our world: Science, technology and the environment",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3036",
      "UnitName": "Professional studies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3038",
      "UnitName": "Professionalism, ethics and interdisciplinary work in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3039",
      "UnitName": "Leadership and management in education contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3050",
      "UnitName": "Early years professional experience 3A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3051",
      "UnitName": "Early years professional experience 3A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3052",
      "UnitName": "Early years professional experience 3B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3053",
      "UnitName": "Primary professional experience 3A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3054",
      "UnitName": "Primary professional experience 3B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3055",
      "UnitName": "Secondary professional experience 3A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3056",
      "UnitName": "Secondary professional experience 3B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3057",
      "UnitName": "Secondary professional experience 3C",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3071",
      "UnitName": "Community development and partnerships",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3072",
      "UnitName": "Leadership, policy and pedagogies in health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3073",
      "UnitName": "Health, sustainability and wellbeing",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3101",
      "UnitName": "Professional experience 3A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3102",
      "UnitName": "Professional experience 3B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3103",
      "UnitName": "Fieldwork experience in outdoor education and environmental studies 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3151",
      "UnitName": "Literacy theory, policy and practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3152",
      "UnitName": "Leading English and literacy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3161",
      "UnitName": "Subject knowledge for teaching: Statistics and probability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3162",
      "UnitName": "Leading mathematics and numeracy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3171",
      "UnitName": "Applied movement contexts in health and physical education 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3172",
      "UnitName": "Inclusion and diversity in movement contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3173",
      "UnitName": "Food, health and wellbeing",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3174",
      "UnitName": "Experiencing outdoor environments",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3175",
      "UnitName": "Outdoor environments, education and sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3181",
      "UnitName": "Art, environment and community",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3210",
      "UnitName": "Education policy and practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3211",
      "UnitName": "Inclusive education: Teaching diverse learners",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3212",
      "UnitName": "Mathematics education 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3213",
      "UnitName": "Creative arts education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3216",
      "UnitName": "Humanities and social sciences education in the primary and secondary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3217",
      "UnitName": "Digital technologies: Teaching, learning and the curriculum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3218",
      "UnitName": "Curriculum, assessment and evaluation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3219",
      "UnitName": "English education 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3220",
      "UnitName": "Health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3269",
      "UnitName": "Secondary pedagogy A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3303",
      "UnitName": "Integrating the curriculum 1: Creative exchange",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3304",
      "UnitName": "Integrating the curriculum 2: Different places",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3306",
      "UnitName": "Literacy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3551",
      "UnitName": "Curriculum in inclusive education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3552",
      "UnitName": "Teaching and learning of students needing increased support",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3618",
      "UnitName": "Research planning in sport and outdoor recreation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF3622",
      "UnitName": "Advanced sports coaching and development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4004",
      "UnitName": "Curriculum, assessment and education policy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4006",
      "UnitName": "Transition and professional engagement",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4020",
      "UnitName": "English and literacies 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4022",
      "UnitName": "Humanities and social education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4023",
      "UnitName": "Science and technology education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4024",
      "UnitName": "Health and physical education for wellbeing in the primary curriculum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4025",
      "UnitName": "Studies of science, environment and sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4026",
      "UnitName": "Arts education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4028",
      "UnitName": "Understanding place, space and education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4029",
      "UnitName": "Play in lifelong learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4031",
      "UnitName": "Sociology of early childhood",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4032",
      "UnitName": "Contemporary theories of learning development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4033",
      "UnitName": "Innovation in curriculum and pedagogy in schools",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4034",
      "UnitName": "Educating the young mathematician",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4035",
      "UnitName": "Early childhood learning through new media and technologies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4037",
      "UnitName": "Thinking mathematically in primary education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4041",
      "UnitName": "Professional experience 4A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4042",
      "UnitName": "Professional experience 4B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4050",
      "UnitName": "Early years professional experience 4C",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4051",
      "UnitName": "Early years professional experience 4A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4052",
      "UnitName": "Early years professional experience 4B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4053",
      "UnitName": "Primary professional experience 4A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4054",
      "UnitName": "Primary professional experience 4B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4055",
      "UnitName": "Secondary professional experience 4A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4056",
      "UnitName": "Secondary professional experience 4B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4059",
      "UnitName": "Primary professional experience 4C",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4100",
      "UnitName": "Researching teaching and learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4101",
      "UnitName": "Research project in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4120",
      "UnitName": "Learning at the heart of teaching",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4121",
      "UnitName": "Teaching: The power to change",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4122",
      "UnitName": "Teaching partnerships: Working with families and communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4123",
      "UnitName": "Literacy across the years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4171",
      "UnitName": "Advanced sport and exercise science",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4205",
      "UnitName": "Initiatives in health education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4251",
      "UnitName": "Creative arts education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4252",
      "UnitName": "Integrated approaches to science learning and teaching",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4253",
      "UnitName": "Humanities and social sciences education in the primary and secondary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4254",
      "UnitName": "Developing literacy and numeracy across the curriculum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4260",
      "UnitName": "Curriculum, assessment and evaluation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4262",
      "UnitName": "History education (P-10)",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4264",
      "UnitName": "Practical education and learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4266",
      "UnitName": "English education 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4267",
      "UnitName": "Mathematics education 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4268",
      "UnitName": "Health and physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4269",
      "UnitName": "Secondary pedagogy B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4311",
      "UnitName": "Professional contexts 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4312",
      "UnitName": "Professional contexts 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4314",
      "UnitName": "Entering the profession 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4326",
      "UnitName": "Early childhood field studies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4511",
      "UnitName": "English as an additional language (EAL) in content areas",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4512",
      "UnitName": "Gifted education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4530",
      "UnitName": "Lifespan development and counsellor identity",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4531",
      "UnitName": "Professional practice in counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4532",
      "UnitName": "Introduction to mental health issues",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4533",
      "UnitName": "Counselling children and adolescents",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4536",
      "UnitName": "Counselling practice and theory",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4537",
      "UnitName": "Human growth and lifespan development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4538",
      "UnitName": "Mental health issues: Grief, trauma and substance abuse",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4539",
      "UnitName": "Counselling in a multicultural context",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4551",
      "UnitName": "Collaborative principles, partnerships and procedures",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4552",
      "UnitName": "Advanced pedagogy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4600",
      "UnitName": "Developmental psychology and wellbeing",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4601",
      "UnitName": "Ethics and professional issues",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4602",
      "UnitName": "Psychological assessment",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4603",
      "UnitName": "Behaviour change interventions for practitioners",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4604",
      "UnitName": "Research project",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4605",
      "UnitName": "Introduction to counselling psychology",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4610",
      "UnitName": "Interacting with research in education contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4611",
      "UnitName": "Investigating education issues in global contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4730",
      "UnitName": "Professional experience 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4731",
      "UnitName": "Professional experience 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4733",
      "UnitName": "Professional experience 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4734",
      "UnitName": "Professional experience 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4803",
      "UnitName": "Senior secondary physical education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF4804",
      "UnitName": "Senior secondary health education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5015",
      "UnitName": "Professional experience 3B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5016",
      "UnitName": "Inclusive teaching",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5017",
      "UnitName": "Numeracy for learners and teachers",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5018",
      "UnitName": "Curriculum, assessment and reporting",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5019",
      "UnitName": "Teacher as professional leader",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5020",
      "UnitName": "Early years numeracy and critical thinking",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5021",
      "UnitName": "Lenses on child development",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5022",
      "UnitName": "Science, technology and sustainability in early years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5023",
      "UnitName": "Creative development for children",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5024",
      "UnitName": "Play and pedagogy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5025",
      "UnitName": "Early childhood policy transformations",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5026",
      "UnitName": "Early years wellbeing and workplace safety",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5030",
      "UnitName": "Science education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5031",
      "UnitName": "Literacy and English education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5032",
      "UnitName": "Numeracy and mathematics education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5033",
      "UnitName": "Humanities and social sciences education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5034",
      "UnitName": "Arts and design education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5035",
      "UnitName": "Health and physical education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5036",
      "UnitName": "Arts, design and health education in the primary years",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5040",
      "UnitName": "Lifelong and workplace learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5041",
      "UnitName": "Engaging adolescent learners",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5099",
      "UnitName": "Education research project",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5121",
      "UnitName": "Accounting education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5122",
      "UnitName": "Accounting education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5123",
      "UnitName": "Biology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5124",
      "UnitName": "Biology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5125",
      "UnitName": "Business management education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5126",
      "UnitName": "Business management education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5127",
      "UnitName": "Chemistry education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5128",
      "UnitName": "Chemistry education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5129",
      "UnitName": "Drama education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5130",
      "UnitName": "Drama education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5131",
      "UnitName": "Economics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5132",
      "UnitName": "Economics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5133",
      "UnitName": "English as an additional language (EAL) education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5134",
      "UnitName": "English as an additional language (EAL) education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5135",
      "UnitName": "English education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5136",
      "UnitName": "English education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5137",
      "UnitName": "General science education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5138",
      "UnitName": "General science education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5139",
      "UnitName": "Geography education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5140",
      "UnitName": "Geography education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5141",
      "UnitName": "Health education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5142",
      "UnitName": "Health education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5143",
      "UnitName": "History education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5144",
      "UnitName": "History education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5145",
      "UnitName": "Information and communication technology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5146",
      "UnitName": "Information and communication technology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5151",
      "UnitName": "Honours thesis part 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5152",
      "UnitName": "Honours thesis part 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5153",
      "UnitName": "Honours thesis extension 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5154",
      "UnitName": "Honours thesis extension 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5155",
      "UnitName": "Languages education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5156",
      "UnitName": "Languages education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5157",
      "UnitName": "Languages education A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5158",
      "UnitName": "Languages education B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5159",
      "UnitName": "Legal studies education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5160",
      "UnitName": "Legal studies education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5161",
      "UnitName": "Mathematics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5162",
      "UnitName": "Mathematics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5163",
      "UnitName": "Media education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5164",
      "UnitName": "Media education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5165",
      "UnitName": "Music education in the secondary years 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5166",
      "UnitName": "Music education in the secondary years 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5167",
      "UnitName": "Music education in the secondary years 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5168",
      "UnitName": "Music education in the secondary years 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5169",
      "UnitName": "Outdoor education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5170",
      "UnitName": "Outdoor education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5171",
      "UnitName": "Physical education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5172",
      "UnitName": "Physical education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5173",
      "UnitName": "Physics education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5174",
      "UnitName": "Physics education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5175",
      "UnitName": "Psychology education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5176",
      "UnitName": "Psychology education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5177",
      "UnitName": "Social education in the secondary years A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5178",
      "UnitName": "Social education in the secondary years B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5179",
      "UnitName": "Visual art and design education in the secondary years 1A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5180",
      "UnitName": "Visual art and design education in the secondary years 1B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5181",
      "UnitName": "Visual art and design education in the secondary years 2A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5182",
      "UnitName": "Visual art and design education in the secondary years 2B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5183",
      "UnitName": "Teaching specialism in secondary education A",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5184",
      "UnitName": "Teaching specialism in secondary education B",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5301",
      "UnitName": "Introduction to STEM education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5302",
      "UnitName": "Content, pedagogy and pedagogical content knowledge in STEM education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5303",
      "UnitName": "Digital foundations of STEM education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5304",
      "UnitName": "Contemporary practices of STEM education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5513",
      "UnitName": "Evidence-based counselling in practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5514",
      "UnitName": "Applied psychological assessment and psychopathology",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5515",
      "UnitName": "Applied ethics and research practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5516",
      "UnitName": "Clinical and therapeutic interventions",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5517",
      "UnitName": "Professional experience in psychology",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5530",
      "UnitName": "Counselling skills for individuals, couples and groups",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5531",
      "UnitName": "Cognitive behaviour therapies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5532",
      "UnitName": "Ethics for counsellors",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5533",
      "UnitName": "Advanced counselling practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5534",
      "UnitName": "Supervised professional counselling practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5540",
      "UnitName": "Children and adolescents counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5541",
      "UnitName": "Personnel and career development counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5542",
      "UnitName": "Counselling skills: Individuals and couples",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5543",
      "UnitName": "Ethics and professional issues in counselling and psychology",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5544",
      "UnitName": "Group counselling skills and psychotherapy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5545",
      "UnitName": "Cognitive behaviour therapy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5546",
      "UnitName": "Advanced personnel and career development counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5547",
      "UnitName": "Counselling research design, statistics and program evaluation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5551",
      "UnitName": "Psychological assessment and measurement",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5552",
      "UnitName": "Counselling practicum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5553",
      "UnitName": "Research project in counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5554",
      "UnitName": "Counselling internship",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5613",
      "UnitName": "Research approaches in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5614",
      "UnitName": "Research project in education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5620",
      "UnitName": "Leading education and work",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5621",
      "UnitName": "Challenging curriculum, pedagogy and assessment",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5622",
      "UnitName": "Developing learners and learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5623",
      "UnitName": "Deepening education and sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5632",
      "UnitName": "Understanding inclusion in learning communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5635",
      "UnitName": "Leading capable organisations",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5636",
      "UnitName": "Leading organisational decision making",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5637",
      "UnitName": "Inner leadership: Understanding self and others",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5640",
      "UnitName": "Language, culture and curriculum",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5641",
      "UnitName": "Pedagogy and assessment in TESOL",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5642",
      "UnitName": "Bilingualism and content-based programs",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5645",
      "UnitName": "Educating the gifted",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5646",
      "UnitName": "Talent development and diversity",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5647",
      "UnitName": "Technology and education key issues and debates",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5648",
      "UnitName": "Instructional design: Harnessing digital technologies for learning",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5649",
      "UnitName": "Language and literacies across educational contexts",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5650",
      "UnitName": "Literacy leadership in schools, workplaces and communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5651",
      "UnitName": "Developing expertise in mathematics education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5652",
      "UnitName": "Understanding research and leadership in science education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5653",
      "UnitName": "Research perspectives in music education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5654",
      "UnitName": "Teaching music: Theory and practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5655",
      "UnitName": "Expertise in teaching",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5656",
      "UnitName": "Practising inclusion",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5657",
      "UnitName": "Indigenous perspectives in professional practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5658",
      "UnitName": "Young people: Culture, communities and education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5659",
      "UnitName": "Building partnerships with families and communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5661",
      "UnitName": "Designing learning for adults",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5662",
      "UnitName": "Leading local, rural and regional learning and participation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5663",
      "UnitName": "Education and globalisation in the Asian century",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5664",
      "UnitName": "Learning through participation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5665",
      "UnitName": "Environmental education, design and learning for sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5666",
      "UnitName": "Education, development and ecological sustainability",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5667",
      "UnitName": "Positive behaviour support",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5670",
      "UnitName": "Leadership studies",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5671",
      "UnitName": "Leadership challenge project",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5672",
      "UnitName": "Leadership in educational technology practices",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5673",
      "UnitName": "Leading mathematics and numeracy education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5674",
      "UnitName": "Engaging with practices of contemporary science",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5678",
      "UnitName": "Leading learning communities",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5691",
      "UnitName": "Professional project",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5692",
      "UnitName": "Professional practice in special and inclusive education",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5693",
      "UnitName": "Using and evaluating research evidence",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5694",
      "UnitName": "Taking a stand in education debates",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5695",
      "UnitName": "Self-study as professional inquiry",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5696",
      "UnitName": "Professional practice for teachers of TESOL",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5699",
      "UnitName": "Extended teaching practice",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5720",
      "UnitName": "Developmental psychology and counselling and research",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5721",
      "UnitName": "Clinical interventions in educational and developmental psychology",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5722",
      "UnitName": "Cognitive, personality and educational assessment",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5723",
      "UnitName": "Exceptionality: Assessment and intervention",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5731",
      "UnitName": "Clinical placement in psychology 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5732",
      "UnitName": "Clinical placement in psychology 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5733",
      "UnitName": "Clinical placement in psychology 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5741",
      "UnitName": "Psychology thesis part 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5742",
      "UnitName": "Psychology thesis part 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5810",
      "UnitName": "VCAL and VET at school",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5814",
      "UnitName": "Creative research approaches",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5905",
      "UnitName": "Early years literacy and numeracy",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5925",
      "UnitName": "Early years professional experience 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5926",
      "UnitName": "Early years professional experience 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5927",
      "UnitName": "Early years professional experience 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5928",
      "UnitName": "Early years professional experience 4",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5931",
      "UnitName": "Primary professional experience 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5932",
      "UnitName": "Primary professional experience 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5933",
      "UnitName": "Primary professional experience 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5934",
      "UnitName": "Primary professional experience 4",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5935",
      "UnitName": "Primary professional experience 5",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5936",
      "UnitName": "Primary professional experience 6",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5941",
      "UnitName": "Secondary professional experience 1",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5942",
      "UnitName": "Secondary professional experience 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5943",
      "UnitName": "Secondary professional experience 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF5944",
      "UnitName": "Secondary professional experience 4",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF6509",
      "UnitName": "Clinical placement in psychology 3",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF6536",
      "UnitName": "Psychology thesis part 2",
      "Faculty": "edu"
    },
    {
      "UnitCode": "EDF6541",
      "UnitName": "Field experience in counselling",
      "Faculty": "edu"
    },
    {
      "UnitCode": "ENE1621",
      "UnitName": "Environmental engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENE2503",
      "UnitName": "Materials properties and recycling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENE3048",
      "UnitName": "Energy and the environment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENE3606",
      "UnitName": "The air environment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENE3608",
      "UnitName": "Environmental impact assessment and management systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENE4607",
      "UnitName": "Environmental risk assessment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1001",
      "UnitName": "Engineering design: lighter, faster, stronger",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1002",
      "UnitName": "Engineering design: cleaner, safer, smarter",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1003",
      "UnitName": "Engineering mobile apps",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1005",
      "UnitName": "Engineering mathematics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1021",
      "UnitName": "Spatial communication in engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1051",
      "UnitName": "Materials for energy and sustainability",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1060",
      "UnitName": "Computing for engineers",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1081",
      "UnitName": "Physics for engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1090",
      "UnitName": "Foundation mathematics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1210",
      "UnitName": "Introduction to structural engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG1211",
      "UnitName": "Introduction to engineering systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2000",
      "UnitName": "Engineering load - branch selection pending",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2001",
      "UnitName": "E3007 - Branch Selection",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2005",
      "UnitName": "Advanced engineering mathematics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2121",
      "UnitName": "Diagnostics for cultural heritage",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2202",
      "UnitName": "Steel structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2203",
      "UnitName": "Concrete structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2204",
      "UnitName": "Water systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2206",
      "UnitName": "Introduction to geoengineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2207",
      "UnitName": "Waterway engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG2801",
      "UnitName": "Leadership and innovation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3201",
      "UnitName": "Project management for engineers",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3202",
      "UnitName": "Geoengineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3203",
      "UnitName": "Environmental geoengineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3204",
      "UnitName": "Water and wastewater",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3205",
      "UnitName": "Traffic and transport",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG3206",
      "UnitName": "Civil and environmental engineering design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4001",
      "UnitName": "Special studies in engineering 1",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4002",
      "UnitName": "Special studies in engineering 2",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4201",
      "UnitName": "Project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4203",
      "UnitName": "Management of water resources",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4204",
      "UnitName": "Road engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4205",
      "UnitName": "Project B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG4700",
      "UnitName": "Engineering technology for biomedical imaging and sensing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5001",
      "UnitName": "Advanced engineering data analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5002",
      "UnitName": "Engineering entrepreneurship",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5003",
      "UnitName": "Advanced design project A",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5004",
      "UnitName": "Advanced design project B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5005",
      "UnitName": "Engineering project A",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5006",
      "UnitName": "Engineering project B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5007",
      "UnitName": "Translation and commercialisation of medical technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG5881",
      "UnitName": "Minor project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG6001",
      "UnitName": "Advanced engineering data analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG6002",
      "UnitName": "Engineering entrepreneurship",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENG6007",
      "UnitName": "Translation and commercialisation of medical technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENS5010",
      "UnitName": "Global challenges and sustainability",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5020",
      "UnitName": "Perspectives on sustainability",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5310",
      "UnitName": "Securing biodiversity and ecosystems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5320",
      "UnitName": "Climate change, energy and human security",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5330",
      "UnitName": "Water security and environmental pollution",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5510",
      "UnitName": "Processes to influence change",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5520",
      "UnitName": "Understanding human behaviour to influence change",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5530",
      "UnitName": "Leading change for sustainable development",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5900",
      "UnitName": "Research project in environment and sustainability",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5901",
      "UnitName": "Research project in environment and sustainability part A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5902",
      "UnitName": "Research project in environment and sustainability B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5910",
      "UnitName": "Interdisciplinary project for sustainable development solutions",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5920",
      "UnitName": "Environment and sustainability project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENS5930",
      "UnitName": "Sustainability internship",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV1800",
      "UnitName": "Environmental science: A Southeast Asian perspective",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV2022",
      "UnitName": "Environmental sampling and monitoring",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV2726",
      "UnitName": "Ecosystems and bioresources",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV2757",
      "UnitName": "Environmental health",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV2792",
      "UnitName": "Mathematical models of the environment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "ENV3022",
      "UnitName": "Environmental technology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ENV3639",
      "UnitName": "Minerals and energy",
      "Faculty": "sci"
    },
    {
      "UnitCode": "EPM5001",
      "UnitName": "Health indicators and health surveys",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5002",
      "UnitName": "Mathematical background for biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5003",
      "UnitName": "Principles of statistical inference",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5004",
      "UnitName": "Linear models",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5005",
      "UnitName": "Data management and statistical computing",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5006",
      "UnitName": "Clinical biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5007",
      "UnitName": "Design of randomised controlled trials",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5008",
      "UnitName": "Longitudinal and correlated data analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5009",
      "UnitName": "Categorical data and generalised linear models",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5010",
      "UnitName": "Survival analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5011",
      "UnitName": "Biostatistics practical project - double unit",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5012",
      "UnitName": "Bioinformatics",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5013",
      "UnitName": "Bayesian statistical methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5014",
      "UnitName": "Probability and distribution theory",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5015",
      "UnitName": "Biostatistics practical project - single unit",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPM5023",
      "UnitName": "Foundations of international health",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPP1011",
      "UnitName": "The contemporary paramedic",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPP1012",
      "UnitName": "Clinical concepts of paramedic practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPP2011",
      "UnitName": "Clinical concepts of paramedic practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPP2032",
      "UnitName": "Paramedic clinical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "EPP2042",
      "UnitName": "Paramedic management of trauma conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "ESC3162",
      "UnitName": "Ore deposit geology and global metallogeny",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3180",
      "UnitName": "Field mapping",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3190",
      "UnitName": "Hydrogeology and environmental geoscience",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3201",
      "UnitName": "Deformation of the crust",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3232",
      "UnitName": "The dynamic biosphere: Changing fauna and flora through geological time",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3259",
      "UnitName": "Geographical information systems (GIS) for environmental management",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3311",
      "UnitName": "Applied Geophysics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3332",
      "UnitName": "Global dynamics and crustal evolution",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3340",
      "UnitName": "Geophysics: Special topics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3421",
      "UnitName": "Igneous and metamorphic processes and geochemistry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3545",
      "UnitName": "Environmental hydrology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3552",
      "UnitName": "Remote sensing of the environment",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3788",
      "UnitName": "Soils, landscapes and their management",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3791",
      "UnitName": "Environmental change: Past to future",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3887",
      "UnitName": "Designing urban futures: Urban climate, water and adaptation",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC3900",
      "UnitName": "Dynamic earth",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC4120",
      "UnitName": "Earth sciences research project part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ESC4220",
      "UnitName": "Earth science honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "ETB1100",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETB2111",
      "UnitName": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC1000",
      "UnitName": "Business and economic statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC1010",
      "UnitName": "Data modelling and computing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2410",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2420",
      "UnitName": "Statistical thinking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2430",
      "UnitName": "Actuarial statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2440",
      "UnitName": "Mathematics for economics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2450",
      "UnitName": "Applied forecasting for business and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2470",
      "UnitName": "Applied business modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2480",
      "UnitName": "Business modelling methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2500",
      "UnitName": "Marketing research analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC2520",
      "UnitName": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3250",
      "UnitName": "Business analytics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3400",
      "UnitName": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3410",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3420",
      "UnitName": "Applied insurance methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3430",
      "UnitName": "Financial mathematics under uncertainty",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3440",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3450",
      "UnitName": "Time series analysis for business and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3460",
      "UnitName": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3490",
      "UnitName": "Risk and business modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3500",
      "UnitName": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3510",
      "UnitName": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3530",
      "UnitName": "Contingencies in insurance and pensions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3550",
      "UnitName": "Applied forecasting for business and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3580",
      "UnitName": "Advanced statistical modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC3860",
      "UnitName": "Integrated economic modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4010",
      "UnitName": "Special reading unit in econometrics honours",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4110",
      "UnitName": "Actuarial practice I",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4120",
      "UnitName": "Actuarial practice II",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4130",
      "UnitName": "Asset liability management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4400",
      "UnitName": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4410",
      "UnitName": "Applied econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4420",
      "UnitName": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4430",
      "UnitName": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4460",
      "UnitName": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4541",
      "UnitName": "Bayesian Time Series Econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC4860",
      "UnitName": "Honours research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5010",
      "UnitName": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5020",
      "UnitName": "Special reading unit 3",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5242",
      "UnitName": "Statistical thinking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5252",
      "UnitName": "Probability and statistical inference for economics and business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5340",
      "UnitName": "Principles of econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5341",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5342",
      "UnitName": "Applied insurance methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5343",
      "UnitName": "Financial mathematics under uncertainty",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5345",
      "UnitName": "Time series analysis for business and economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5346",
      "UnitName": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5351",
      "UnitName": "Modelling in finance and insurance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5353",
      "UnitName": "Insurance and pensions",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5400",
      "UnitName": "Research topics in econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5410",
      "UnitName": "Bayesian Time Series Econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5420",
      "UnitName": "Microeconometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5440",
      "UnitName": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5441",
      "UnitName": "Applied econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5443",
      "UnitName": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5460",
      "UnitName": "Financial econometrics 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5470",
      "UnitName": "Econometrics graduate seminar",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5860",
      "UnitName": "Research paper",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETC5900",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF1100",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF2011",
      "UnitName": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF2100",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF2121",
      "UnitName": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF2480",
      "UnitName": "Business modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF2700",
      "UnitName": "Mathematics for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3200",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3231",
      "UnitName": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3300",
      "UnitName": "Quantitative methods for financial markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3480",
      "UnitName": "Optimisation for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3500",
      "UnitName": "High dimensional data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF3600",
      "UnitName": "Quantitative models for business research",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5010",
      "UnitName": "Special reading unit 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5020",
      "UnitName": "Special reading unit 3",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5200",
      "UnitName": "Applied time series econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5231",
      "UnitName": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5300",
      "UnitName": "Applied financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5320",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5330",
      "UnitName": "Quantitative methods for financial markets",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5400",
      "UnitName": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5410",
      "UnitName": "Special topics in econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5470",
      "UnitName": "Econometrics graduate seminar",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5500",
      "UnitName": "High dimensional data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5550",
      "UnitName": "Research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5555",
      "UnitName": "Minor thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5600",
      "UnitName": "Quantitative models for business research",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5650",
      "UnitName": "Business optimisation skills",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5900",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5910",
      "UnitName": "Introductory applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5912",
      "UnitName": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5922",
      "UnitName": "Data Visualisation and Analytics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5930",
      "UnitName": "Financial econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5952",
      "UnitName": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETF5970",
      "UnitName": "Mathematics for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETM5900",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETP1100",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS1102",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS1200",
      "UnitName": "Quantitative methods for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS2000",
      "UnitName": "Advanced quantitative methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS2010",
      "UnitName": "Introductory probability theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS2111",
      "UnitName": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS2410",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETS3410",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW1000",
      "UnitName": "Business and economic statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW1010",
      "UnitName": "Data modelling and computing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW1102",
      "UnitName": "Business statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW2111",
      "UnitName": "Business data modelling",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW2410",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW2420",
      "UnitName": "Survey methods and managerial statistics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW2480",
      "UnitName": "Business modelling methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3200",
      "UnitName": "Quantitative business analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3410",
      "UnitName": "Applied econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3420",
      "UnitName": "Principles of forecasting and applications",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3481",
      "UnitName": "Econometric methods for finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3482",
      "UnitName": "Data mining for business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETW3483",
      "UnitName": "Enterprise resource planning",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX2011",
      "UnitName": "Quantitative methods for risk analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX2121",
      "UnitName": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX2250",
      "UnitName": "Data visualisation and analytics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX3231",
      "UnitName": "Business forecasting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX5440",
      "UnitName": "Econometric theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX5443",
      "UnitName": "Quantitative economic policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX5934",
      "UnitName": "Introductory econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX6500",
      "UnitName": "Statistical Inference",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "ETX6510",
      "UnitName": "Foundations of econometrics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "FBS5001",
      "UnitName": "Fundamentals of forensic behavioural science",
      "Faculty": "med"
    },
    {
      "UnitCode": "FBS5002",
      "UnitName": "The role of mental health in criminal offending",
      "Faculty": "med"
    },
    {
      "UnitCode": "FBS5004",
      "UnitName": "Developmental aspects of forensic behavioural science",
      "Faculty": "med"
    },
    {
      "UnitCode": "FBS5005",
      "UnitName": "The assessment and management of problem behaviours",
      "Faculty": "med"
    },
    {
      "UnitCode": "FIT1002",
      "UnitName": "Computer programming",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1003",
      "UnitName": "IT in organisations",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1006",
      "UnitName": "Business information analysis",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1008",
      "UnitName": "Introduction to computer science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1013",
      "UnitName": "Digital futures: IT for business",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1031",
      "UnitName": "Computers and networks",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1033",
      "UnitName": "Foundations of 3D",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1040",
      "UnitName": "Digital futures: adventures in programming",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1041",
      "UnitName": "Research project 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1043",
      "UnitName": "Introduction to data science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1044",
      "UnitName": "Mobile communications 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1045",
      "UnitName": "Algorithms and programming fundamentals in python",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1046",
      "UnitName": "Creative computing foundations",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1047",
      "UnitName": "Introduction to computer systems, networks and security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1048",
      "UnitName": "Fundamentals of C++",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1049",
      "UnitName": "IT professional practice",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1050",
      "UnitName": "Web fundamentals",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1051",
      "UnitName": "Programming fundamentals in java",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT1052",
      "UnitName": "Digital futures: IT shaping society",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2001",
      "UnitName": "Systems development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2002",
      "UnitName": "IT project management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2004",
      "UnitName": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2005",
      "UnitName": "Software analysis, design and architecture",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2009",
      "UnitName": "Data structures and algorithms",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2014",
      "UnitName": "Theory of computation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2017",
      "UnitName": "Computer models for business decision making",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2020",
      "UnitName": "Network architecture",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2032",
      "UnitName": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2033",
      "UnitName": "Computer models for business decisions",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2034",
      "UnitName": "Computer programming 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2043",
      "UnitName": "Technical documentation for software engineers",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2065",
      "UnitName": "Operating systems and the Unix environment",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2069",
      "UnitName": "Computer architecture",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2072",
      "UnitName": "Educational multimedia",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2073",
      "UnitName": "Game design studio 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2074",
      "UnitName": "Technology, information and organisations",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2077",
      "UnitName": "Advanced data management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2079",
      "UnitName": "Data visualisation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2081",
      "UnitName": "Mobile application development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2082",
      "UnitName": "Research project 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2083",
      "UnitName": "Research methods in computer science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2085",
      "UnitName": "Introduction to computer science for engineers",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2086",
      "UnitName": "Modelling for data analysis",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2087",
      "UnitName": "Advanced 3D",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2089",
      "UnitName": "Mobile networks",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2090",
      "UnitName": "Business information systems and processes",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2091",
      "UnitName": "Creative computing studio 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2092",
      "UnitName": "Creative computing studio 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2093",
      "UnitName": "Introduction to cyber security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2094",
      "UnitName": "Databases",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2095",
      "UnitName": "e-Business software technologies",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2096",
      "UnitName": "Games programming 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2097",
      "UnitName": "Games programming 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2098",
      "UnitName": "Interactive media",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2099",
      "UnitName": "Object oriented design and implementation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2100",
      "UnitName": "Operating systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2101",
      "UnitName": "Software engineering process and management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2102",
      "UnitName": "Programming paradigms",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2104",
      "UnitName": "Web database interface",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2105",
      "UnitName": "Creative computing: understanding art, science and technology",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2107",
      "UnitName": "Software quality and testing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT2108",
      "UnitName": "Industry based learning seminar",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3002",
      "UnitName": "Applications of data mining",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3003",
      "UnitName": "Business intelligence and data warehousing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3008",
      "UnitName": "Advanced digital video",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3013",
      "UnitName": "Formal specification for software engineering",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3019",
      "UnitName": "Information systems management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3020",
      "UnitName": "Information visualisation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3021",
      "UnitName": "Infrastructure for e-commerce",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3027",
      "UnitName": "Android and iOS development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3031",
      "UnitName": "Information and network security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3036",
      "UnitName": "Computer science project",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3037",
      "UnitName": "Software engineering",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3039",
      "UnitName": "Studio project 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3040",
      "UnitName": "Studio project 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3042",
      "UnitName": "System tools and programming languages",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3045",
      "UnitName": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3046",
      "UnitName": "Operating environments",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3047",
      "UnitName": "Industry experience studio project 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3048",
      "UnitName": "Industry experience studio project 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3063",
      "UnitName": "Human-computer interaction",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3077",
      "UnitName": "Software engineering: architecture and design",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3080",
      "UnitName": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3081",
      "UnitName": "Image processing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3083",
      "UnitName": "e-Business software technologies",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3088",
      "UnitName": "Computer graphics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3094",
      "UnitName": "Artificial life, artificial intelligence and virtual environments",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3098",
      "UnitName": "Social informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3130",
      "UnitName": "Computer network design and deployment",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3134",
      "UnitName": "IT-based entrepreneurship",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3136",
      "UnitName": "IT governance and strategy for business",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3138",
      "UnitName": "Real time enterprise systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3139",
      "UnitName": "Computational science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3140",
      "UnitName": "Advanced programming",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3142",
      "UnitName": "Distributed computing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3143",
      "UnitName": "Parallel computing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3144",
      "UnitName": "Advanced computer science project",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3145",
      "UnitName": "Game design studio 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3146",
      "UnitName": "Emergent technologies and interfaces",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3152",
      "UnitName": "Data analytics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3153",
      "UnitName": "Research-based learning",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3154",
      "UnitName": "Advanced data analysis",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3155",
      "UnitName": "Advanced data structures and algorithms",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3156",
      "UnitName": "Advanced visual effects",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3157",
      "UnitName": "Advanced web design",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3158",
      "UnitName": "Business decision modelling",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3159",
      "UnitName": "Computer architecture",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3161",
      "UnitName": "Computer science project 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3162",
      "UnitName": "Computer science project 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3163",
      "UnitName": "Data science project 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3164",
      "UnitName": "Data science project 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3165",
      "UnitName": "Computer networks",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3168",
      "UnitName": "IT forensics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3169",
      "UnitName": "Immersive environments",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3170",
      "UnitName": "Software engineering practice",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3171",
      "UnitName": "Databases",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3172",
      "UnitName": "Sonics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3173",
      "UnitName": "Software security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3174",
      "UnitName": "IT strategy and governance",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3175",
      "UnitName": "Usability",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3176",
      "UnitName": "Advanced database design",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3178",
      "UnitName": "Advanced mobile applications",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT3179",
      "UnitName": "Data visualisation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4000",
      "UnitName": "Honours thesis extension",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4002",
      "UnitName": "Software engineering industry experience studio project",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4003",
      "UnitName": "Software engineering research project",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4004",
      "UnitName": "System validation and verification, quality and standards",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4005",
      "UnitName": "Research methods in information technology",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4007",
      "UnitName": "Advanced topics in information systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4008",
      "UnitName": "Reading unit",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4009",
      "UnitName": "Advanced topics in intelligent systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4010",
      "UnitName": "Advanced topics in algorithms and discrete structures",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4012",
      "UnitName": "Advanced topics in computational science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4039",
      "UnitName": "Android and iOS development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4042",
      "UnitName": "Industry-based learning",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4165",
      "UnitName": "Computer networks",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4441",
      "UnitName": "Honours thesis part 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4442",
      "UnitName": "Honours thesis part 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4443",
      "UnitName": "Honours thesis part 3",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4444",
      "UnitName": "Honours thesis final",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT4448",
      "UnitName": "Honours thesis final",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5000",
      "UnitName": "Minor thesis extension",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5003",
      "UnitName": "Software security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5010",
      "UnitName": "Network protocols standards",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5011",
      "UnitName": "Network design and performance",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5032",
      "UnitName": "Internet applications development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5034",
      "UnitName": "Quality of service and network management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5037",
      "UnitName": "Network security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5042",
      "UnitName": "Enterprise application development for the web",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5046",
      "UnitName": "Mobile and distributed computing systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5047",
      "UnitName": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5057",
      "UnitName": "Project management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5083",
      "UnitName": "Network infrastructure",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5086",
      "UnitName": "Organisational informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5088",
      "UnitName": "Information and knowledge management systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5090",
      "UnitName": "Social informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5094",
      "UnitName": "IT for management decision making",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5097",
      "UnitName": "Business intelligence modelling",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5101",
      "UnitName": "Enterprise systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5102",
      "UnitName": "IT strategy and governance",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5104",
      "UnitName": "Information and knowledge management professional practice",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5105",
      "UnitName": "Information access and use",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5106",
      "UnitName": "Information organisation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5107",
      "UnitName": "Managing business records",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5108",
      "UnitName": "Reading unit",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5109",
      "UnitName": "Research topic",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5111",
      "UnitName": "Information systems development practices",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5120",
      "UnitName": "Industry experience studio project",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5122",
      "UnitName": "Professional practice",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5124",
      "UnitName": "Advanced topics in security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5125",
      "UnitName": "IT research methods",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5126",
      "UnitName": "Masters thesis part 1",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5127",
      "UnitName": "Masters thesis part 2",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5128",
      "UnitName": "Masters thesis final",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5129",
      "UnitName": "Enterprise IT security - planning, operations and management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5133",
      "UnitName": "Enterprise architecture and management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5136",
      "UnitName": "Software engineering",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5137",
      "UnitName": "Database analysis and processing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5138",
      "UnitName": "Advanced software engineering",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5139",
      "UnitName": "Advanced distributed and parallel systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5140",
      "UnitName": "Advanced mobile systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5141",
      "UnitName": "Advanced topics in information technology",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5142",
      "UnitName": "Advanced data mining",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5143",
      "UnitName": "IT research methods",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5144",
      "UnitName": "Research strategies and skills",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5145",
      "UnitName": "Introduction to data science",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5146",
      "UnitName": "Data curation and management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5147",
      "UnitName": "Data exploration and visualisation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5148",
      "UnitName": "Distributed databases and big data",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5149",
      "UnitName": "Applied data analysis",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5152",
      "UnitName": "User interface design and usability",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5159",
      "UnitName": "IT for financial decisions",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5160",
      "UnitName": "Business process modelling, design and simulation",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5163",
      "UnitName": "Information and computer security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5166",
      "UnitName": "Information retrieval systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5168",
      "UnitName": "Semi-structured data management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5170",
      "UnitName": "Programming for distributed, parallel and mobile systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5171",
      "UnitName": "System validation and verification, quality and standards",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5178",
      "UnitName": "Applied project management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5180",
      "UnitName": "Business and legal issues in project management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5183",
      "UnitName": "Mobile and distributed computing systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5186",
      "UnitName": "Intelligent systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5187",
      "UnitName": "Wireless networks",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5190",
      "UnitName": "Introduction to IT research methods",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5191",
      "UnitName": "Network protocols and network security",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5192",
      "UnitName": "Enterprise and internet applications development",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5194",
      "UnitName": "Computer based global project management",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5195",
      "UnitName": "Business intelligence and data warehousing",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5196",
      "UnitName": "Data wrangling",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5197",
      "UnitName": "Modelling for data analysis",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5201",
      "UnitName": "Data analysis algorithms",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5202",
      "UnitName": "Data processing for big data",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5203",
      "UnitName": "Community informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5204",
      "UnitName": "Heritage informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5205",
      "UnitName": "Data in society",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5206",
      "UnitName": "Digital continuity",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5207",
      "UnitName": "Data for sustainability",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT5211",
      "UnitName": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT6021",
      "UnitName": "Advanced research methods",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9027",
      "UnitName": "Website authoring",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9059",
      "UnitName": "Algorithms and data structures",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9123",
      "UnitName": "Introduction to business information systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9130",
      "UnitName": "Systems analysis and design",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9131",
      "UnitName": "Programming foundations in Java",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9132",
      "UnitName": "Introduction to databases",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9133",
      "UnitName": "Programming foundations for python",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9134",
      "UnitName": "Computer architecture and operating systems",
      "Faculty": "it"
    },
    {
      "UnitCode": "FIT9135",
      "UnitName": "Data communications",
      "Faculty": "it"
    },
    {
      "UnitCode": "FNA1111",
      "UnitName": "Introduction to Contemporary Practices 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA1112",
      "UnitName": "Introduction to Contemporary Practices 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA2003",
      "UnitName": "3D digital modelling for artists",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA2111",
      "UnitName": "Contemporary Practices 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA2112",
      "UnitName": "Contemporary Practices 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA2903",
      "UnitName": "Art and Design in film",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA3111",
      "UnitName": "Contemporary Practices 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA3112",
      "UnitName": "Contemporary Practices 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA3903",
      "UnitName": "Film practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA4001",
      "UnitName": "Project studies (fine art honours)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA4002",
      "UnitName": "Major project (fine art honours)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FNA4011",
      "UnitName": "Studio methodology",
      "Faculty": "ada"
    },
    {
      "UnitCode": "FOR4001",
      "UnitName": "Medical evidence",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR4002",
      "UnitName": "Injury interpretation",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR4003",
      "UnitName": "Ethics, medicine and the law",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR4004",
      "UnitName": "Elements of the forensic sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5005",
      "UnitName": "Adult sexual assault",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5006",
      "UnitName": "Traffic medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5007",
      "UnitName": "Elements of forensic toxicology",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5008",
      "UnitName": "Custodial medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5009",
      "UnitName": "Advanced issues in sexual violence",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5010",
      "UnitName": "Project in forensic medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5011",
      "UnitName": "Advanced issues in non-accidental injury of children",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5012",
      "UnitName": "Child and adolescent sexual abuse",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5013",
      "UnitName": "Non accidental injury in childhood",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5014",
      "UnitName": "Elements of forensic odontology",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5015",
      "UnitName": "Post mortem dental identification: Principles and methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5016",
      "UnitName": "Clinical forensic odontology",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5017",
      "UnitName": "Disaster victim identification (DVI): Principles and methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5018",
      "UnitName": "Elements of forensic anthropology",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5020",
      "UnitName": "Forensic cross sectional imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "FOR5021",
      "UnitName": "Mortuary technical science",
      "Faculty": "med"
    },
    {
      "UnitCode": "FPA5004",
      "UnitName": "Autopsy practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "FPA5007",
      "UnitName": "Death investigation",
      "Faculty": "med"
    },
    {
      "UnitCode": "FST1800",
      "UnitName": "Fundamentals of food science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST2810",
      "UnitName": "Food bioprocess technology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3800",
      "UnitName": "Food science internship",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3810",
      "UnitName": "Human nutrition",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3820",
      "UnitName": "Food preservation",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3830",
      "UnitName": "Functional foods",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3840",
      "UnitName": "Food processing",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST3850",
      "UnitName": "Food product development",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST4100",
      "UnitName": "Food science and technology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "FST4280",
      "UnitName": "Honours coursework in food science and technology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN2041",
      "UnitName": "Foundations of genetics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN2052",
      "UnitName": "Genomics and population genetics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN3030",
      "UnitName": "Molecular, cellular and developmental genetics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN3040",
      "UnitName": "Genomics and its applications",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN3051",
      "UnitName": "Medical and forensic genetics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN3062",
      "UnitName": "Evolutionary and ecological genetics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GEN3990",
      "UnitName": "Genetics in action research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GHS5841",
      "UnitName": "Research and evidence for practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "GHS5850",
      "UnitName": "Nursing leadership and management",
      "Faculty": "med"
    },
    {
      "UnitCode": "GLS1211",
      "UnitName": "Contemporary glass practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS1212",
      "UnitName": "Glass practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS1231",
      "UnitName": "Contemporary glass blowing practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS1242",
      "UnitName": "Glass practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS2213",
      "UnitName": "Contemporary glass sculpture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS2214",
      "UnitName": "Glass practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS2223",
      "UnitName": "Contemporary blown and sculpted glass",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS2224",
      "UnitName": "Glass practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS3215",
      "UnitName": "Glass practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GLS3216",
      "UnitName": "Glass practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GMA1010",
      "UnitName": "Foundations of medical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "GMA2000",
      "UnitName": "Year A final grade",
      "Faculty": "med"
    },
    {
      "UnitCode": "GPS4120",
      "UnitName": "Geophysics research project part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GPS4220",
      "UnitName": "Geophysics honours coursework part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "GRS4101",
      "UnitName": "Introduction to reproductive endocrinology",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4102",
      "UnitName": "Gonadal development and function",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4103",
      "UnitName": "Pregnancy and parturition",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4104",
      "UnitName": "Reproductive health",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4105",
      "UnitName": "Fertility regulation",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4201",
      "UnitName": "Comparative reproduction and conservation",
      "Faculty": "med"
    },
    {
      "UnitCode": "GRS4202",
      "UnitName": "Assisted reproductive and genetic technologies",
      "Faculty": "med"
    },
    {
      "UnitCode": "GVA1203",
      "UnitName": "Photography 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA1611",
      "UnitName": "Sculpture practice 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA1612",
      "UnitName": "Sculpture practice 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA2207",
      "UnitName": "Photography and Photomedia processes",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA2208",
      "UnitName": "Photography and Photomedia fabrication",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA2223",
      "UnitName": "Minor printmaking 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA2423",
      "UnitName": "Minor sculpture/woodcraft 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA2723",
      "UnitName": "Minor photography 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA3202",
      "UnitName": "Professional practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA3207",
      "UnitName": "Photography and Photomedia project 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA3224",
      "UnitName": "Minor printmaking 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA3424",
      "UnitName": "Minor sculpture/woodcraft 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "GVA3724",
      "UnitName": "Minor photography 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "HED5031",
      "UnitName": "Higher education project: Design and literature review",
      "Faculty": "edu"
    },
    {
      "UnitCode": "HED5041",
      "UnitName": "Research project development and implementation",
      "Faculty": "edu"
    },
    {
      "UnitCode": "HED5043",
      "UnitName": "Contemporary issues in business education",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "HED5044",
      "UnitName": "Reflection and practice in business education",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "HED5052",
      "UnitName": "Contemporary issues in higher education in South East Asia",
      "Faculty": "edu"
    },
    {
      "UnitCode": "HPE5001",
      "UnitName": "Teaching and learning in health professional education",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5002",
      "UnitName": "Clinical teaching",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5003",
      "UnitName": "Assessment in health professional education",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5004",
      "UnitName": "Course design and educational change management",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5011",
      "UnitName": "Educational research methods for the health professions",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5012",
      "UnitName": "Foundations of simulation in health professional education",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5013",
      "UnitName": "Independent project in health professional education",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5014",
      "UnitName": "Applied simulation",
      "Faculty": "med"
    },
    {
      "UnitCode": "HPE5015",
      "UnitName": "Contemporary research and innovations in health professional education",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC1100",
      "UnitName": "Introduction to research and evidence",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC1200",
      "UnitName": "Introduction to public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC1300",
      "UnitName": "Human health and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC1400",
      "UnitName": "The Australian healthcare system",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2062",
      "UnitName": "Communicating health",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2092",
      "UnitName": "Community development and partnership",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2100",
      "UnitName": "Emerging challenges in health",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2102",
      "UnitName": "Introduction to clinical research",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2141",
      "UnitName": "Analysing patterns of health and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2200",
      "UnitName": "Health and the human lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC2300",
      "UnitName": "Health promotion and disease prevention",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3001",
      "UnitName": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3002",
      "UnitName": "Health for all in a global world",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3011",
      "UnitName": "Contemporary health challenges",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3041",
      "UnitName": "Disease prevention and control",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3052",
      "UnitName": "Health promotion in community and organisational settings",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3061",
      "UnitName": "Health program evaluation",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3072",
      "UnitName": "Health policy and politics",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3082",
      "UnitName": "Health promotion practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3102",
      "UnitName": "Environmental determinants of health and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3131",
      "UnitName": "Quantitative research design and methodology",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC3132",
      "UnitName": "Action in public health research",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC4001",
      "UnitName": "Health science research project 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC4002",
      "UnitName": "Health science research project 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "HSC4011",
      "UnitName": "Advanced studies in contemporary and global health research",
      "Faculty": "med"
    },
    {
      "UnitCode": "HUP3011",
      "UnitName": "Human pathology 1: Understanding disease processes",
      "Faculty": "sci"
    },
    {
      "UnitCode": "HUP3022",
      "UnitName": "Human pathology 2: Pathology of human diseases",
      "Faculty": "sci"
    },
    {
      "UnitCode": "HUP3810",
      "UnitName": "Principles of pathology 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "HUP3820",
      "UnitName": "Principles of pathology 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "HUP3990",
      "UnitName": "Human pathology in action research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IAR1112",
      "UnitName": "Interior architecture studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1113",
      "UnitName": "Interior architecture studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1114",
      "UnitName": "Interior architecture studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1211",
      "UnitName": "Building construction and materials A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1401",
      "UnitName": "Communication methods for interior architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1411",
      "UnitName": "Communication and media",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR1602",
      "UnitName": "Constructions and environments 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2113",
      "UnitName": "Interior architecture studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2114",
      "UnitName": "Interior architecture studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2115",
      "UnitName": "Interior architecture studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2116",
      "UnitName": "Interior architecture studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2204",
      "UnitName": "Building materials and construction B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2205",
      "UnitName": "The production of space and place",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2303",
      "UnitName": "Structures and services A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2401",
      "UnitName": "Interior architecture modelling",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2411",
      "UnitName": "Contemporary interior architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2501",
      "UnitName": "Retail design 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2601",
      "UnitName": "Constructions and environments 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR2602",
      "UnitName": "Constructions and environments 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3115",
      "UnitName": "Interior architecture studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3116",
      "UnitName": "Interior architecture studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3117",
      "UnitName": "Interior architecture studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3118",
      "UnitName": "Interior architecture studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3205",
      "UnitName": "Building construction and materials C",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3303",
      "UnitName": "Folio and reflection",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3308",
      "UnitName": "Structure and services B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3401",
      "UnitName": "Interior architecture history and theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR3501",
      "UnitName": "Studies in interior architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4117",
      "UnitName": "Interior architecture studio 7",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4118",
      "UnitName": "Interior architecture studio 8",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4119",
      "UnitName": "Interior architecture studio 7",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4120",
      "UnitName": "Interior architecture design research project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4406",
      "UnitName": "Industrial experience",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4500",
      "UnitName": "Research: questions and processes",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IAR4501",
      "UnitName": "Interior architecture design research documentation",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IBL2030",
      "UnitName": "Industry based learning: Science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IDE1112",
      "UnitName": "Industrial design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE1502",
      "UnitName": "Modelmaking and workshop practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE1602",
      "UnitName": "Product drawing",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE1802",
      "UnitName": "Materials and manufacturing 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2113",
      "UnitName": "Industrial design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2114",
      "UnitName": "Industrial design studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2120",
      "UnitName": "Designing for sustainability",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2211",
      "UnitName": "Engineering drawing",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2303",
      "UnitName": "Ergonomics",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2701",
      "UnitName": "Product interface design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2810",
      "UnitName": "Furniture 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE2811",
      "UnitName": "Mechanics and electronics for industrial design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3105",
      "UnitName": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3106",
      "UnitName": "Industrial design studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3115",
      "UnitName": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3116",
      "UnitName": "Industrial design studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3302",
      "UnitName": "Ergonomics 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3812",
      "UnitName": "Mobility design 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3813",
      "UnitName": "Mobility design 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3814",
      "UnitName": "Materials and manufacturing 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE3815",
      "UnitName": "Furniture design 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE4117",
      "UnitName": "Industrial design studio 7 (major project 1)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE4118",
      "UnitName": "Industrial design studio 8 (major project 2)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDE4809",
      "UnitName": "Mobility design 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN1001",
      "UnitName": "Industrial design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN1002",
      "UnitName": "Industrial design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN2001",
      "UnitName": "Industrial design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN2101",
      "UnitName": "Concept art for design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN2102",
      "UnitName": "Service design studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN3001",
      "UnitName": "Industrial design studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN3002",
      "UnitName": "Industrial design studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IDN4406",
      "UnitName": "Industry placement for design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "IMM2011",
      "UnitName": "Basic immunology: The body's defence system",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM2022",
      "UnitName": "Immunology in health and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3031",
      "UnitName": "Molecular and cellular immunology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3042",
      "UnitName": "Clinical immunopathology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3051",
      "UnitName": "Principles of applied immunology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3062",
      "UnitName": "Clinical and research laboratory immunology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3802",
      "UnitName": "Essentials of applied immunology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IMM3990",
      "UnitName": "Immunology in action research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "IPE1011",
      "UnitName": "Foundations of health in primary clinical care",
      "Faculty": "med"
    },
    {
      "UnitCode": "IRD5000",
      "UnitName": "Master of biomedical science (Part 1): Monash Institute of Medical Research",
      "Faculty": "med"
    },
    {
      "UnitCode": "JWL1311",
      "UnitName": "Contemporary jewellery practice 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL1312",
      "UnitName": "Contemporary jewellery practice 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL1331",
      "UnitName": "Metals and jewellery practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL1342",
      "UnitName": "Metals and jewellery practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL2313",
      "UnitName": "Contemporary jewellery practice 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL2314",
      "UnitName": "Contemporary jewellery practice 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL2323",
      "UnitName": "Metals and jewellery practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL2324",
      "UnitName": "Metals and jewellery practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL3315",
      "UnitName": "Metals and jewellery practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "JWL3316",
      "UnitName": "Metals and jewellery practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "LAW1101",
      "UnitName": "Introduction to legal reasoning",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW1104",
      "UnitName": "Research and writing",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW1111",
      "UnitName": "Foundations of Law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW1112",
      "UnitName": "Public law and statutory interpretation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW1113",
      "UnitName": "Torts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW1114",
      "UnitName": "Criminal law 1",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2001",
      "UnitName": "Law in professional contexts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2101",
      "UnitName": "Contract A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2102",
      "UnitName": "Contract B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2111",
      "UnitName": "Constitutional law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2112",
      "UnitName": "Property A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2201",
      "UnitName": "Torts A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW2202",
      "UnitName": "Torts B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW3111",
      "UnitName": "Equity",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW3112",
      "UnitName": "Corporations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW3301",
      "UnitName": "Criminal law and procedure A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW3302",
      "UnitName": "Criminal law B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW3402",
      "UnitName": "Property B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4101",
      "UnitName": "Administration of criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4104",
      "UnitName": "Australian banking law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4108",
      "UnitName": "Constitutional law of Malaysia",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4111",
      "UnitName": "Crime and gender",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4112",
      "UnitName": "Advanced constitutional law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4113",
      "UnitName": "Current problems in criminal law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4115",
      "UnitName": "Environmental law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4119",
      "UnitName": "Contemporary workplace relations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4121",
      "UnitName": "Insurance law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4122",
      "UnitName": "International law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4123",
      "UnitName": "International organisations",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4125",
      "UnitName": "Comparative antitrust law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4126",
      "UnitName": "Asian legal systems",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4127",
      "UnitName": "Collective labour rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4129",
      "UnitName": "Law and discrimination",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4130",
      "UnitName": "Law and social theory",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4132",
      "UnitName": "Law of employment",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4133",
      "UnitName": "International law seminar: International public order",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4137",
      "UnitName": "Legal philosophy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4140",
      "UnitName": "Media law 2",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4151",
      "UnitName": "Theoretical perspectives on law, gender and feminism",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4153",
      "UnitName": "Comparative European legal systems",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4155",
      "UnitName": "International human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4156",
      "UnitName": "Conflict of laws - private international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4158",
      "UnitName": "Indigenous peoples and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4159",
      "UnitName": "International business transactions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4160",
      "UnitName": "Negotiation and conflict resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4161",
      "UnitName": "Introduction to European Union law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4162",
      "UnitName": "Family property and financial disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4163",
      "UnitName": "Parents, children and the state",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4164",
      "UnitName": "International refugee law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4165",
      "UnitName": "Comparative constitutions and rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4166",
      "UnitName": "Citizenship and migration law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4170",
      "UnitName": "Trusts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4172",
      "UnitName": "Human rights in Australian law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4173",
      "UnitName": "Research unit A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4174",
      "UnitName": "Research unit B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4176",
      "UnitName": "Applied legal research",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4177",
      "UnitName": "Introduction to family law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4178",
      "UnitName": "Comparative civil procedure",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4179",
      "UnitName": "International commercial arbitration",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4180",
      "UnitName": "International law of the sea I: Marine resource management",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4184",
      "UnitName": "International criminal law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4188",
      "UnitName": "International banking law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4189",
      "UnitName": "Comparative criminal law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4190",
      "UnitName": "Construction law: Principles and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4193",
      "UnitName": "Biotechnology and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4196",
      "UnitName": "Consumer law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4197",
      "UnitName": "Current issues in Indigenous rights: International, comparative and regional perspectives",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4198",
      "UnitName": "Australian commercial law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4199",
      "UnitName": "International laws of armed conflict",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4214",
      "UnitName": "Supervised research paper",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4219",
      "UnitName": "The law of financial transactions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4225",
      "UnitName": "Non-adversarial justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4227",
      "UnitName": "Criminal investigation law and procedure",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4228",
      "UnitName": "Problem based learning seminar",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4229",
      "UnitName": "Comparative tax policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4230",
      "UnitName": "Animal law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4242",
      "UnitName": "Introduction to transitional justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4243",
      "UnitName": "Tax policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4244",
      "UnitName": "Construction law (dispute resolution)",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4247",
      "UnitName": "Current issues in statutory interpretation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4249",
      "UnitName": "Environmental activism, ecoterrorism and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4250",
      "UnitName": "The global lawyer",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4251",
      "UnitName": "Advanced copyright: Global law and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4252",
      "UnitName": "Chinese legal institutions and laws",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4301",
      "UnitName": "Advanced torts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4302",
      "UnitName": "The law of public listed companies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4303",
      "UnitName": "Litigation and dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4304",
      "UnitName": "Forensic evidence: Law, science, medicine and technology",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4305",
      "UnitName": "Federal criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4306",
      "UnitName": "Sentencing and sanctions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4307",
      "UnitName": "International law of the sea II",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4308",
      "UnitName": "Restitution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4309",
      "UnitName": "Lawyers ethics in practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4310",
      "UnitName": "Trial practice and advocacy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4311",
      "UnitName": "Succession law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4312",
      "UnitName": "Legal issues in medicine",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4313",
      "UnitName": "International environmental law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4314",
      "UnitName": "International space law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4316",
      "UnitName": "Media law 1",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4318",
      "UnitName": "Competition law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4319",
      "UnitName": "Superannuation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4322",
      "UnitName": "Advanced taxation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4323",
      "UnitName": "Evidence",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4324",
      "UnitName": "Corporate governance and shareholders remedies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4325",
      "UnitName": "Advanced evidence",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4326",
      "UnitName": "Cyberlaw",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4327",
      "UnitName": "Honours thesis",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4328",
      "UnitName": "Professional practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4329",
      "UnitName": "Comparative cyberlaw",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4330",
      "UnitName": "Family law assistance program: Professional practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4331",
      "UnitName": "Administrative law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4332",
      "UnitName": "Criminal law and procedure 2",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4333",
      "UnitName": "Corporate insolvency",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4339",
      "UnitName": "Personal insolvency",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4340",
      "UnitName": "Sport and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4341",
      "UnitName": "Copyright and designs",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4342",
      "UnitName": "Patents, trade marks and unfair competition",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4343",
      "UnitName": "Sovereignty and globalisation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4484",
      "UnitName": "Malaysian and Singaporean constitutional systems",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4513",
      "UnitName": "Capital markets regulation: A comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4515",
      "UnitName": "International criminology",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4516",
      "UnitName": "Comparative perspectives on crime and punishment",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4522",
      "UnitName": "Remedies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4523",
      "UnitName": "The judiciary in comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4526",
      "UnitName": "World trade organisation dispute settlement",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4528",
      "UnitName": "Comparative consumer bankruptcy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4531",
      "UnitName": "Product liability law from a comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4532",
      "UnitName": "Climate change and international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4533",
      "UnitName": "International and comparative taxation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4534",
      "UnitName": "Law and biology",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4535",
      "UnitName": "International and comparative trade mark law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4536",
      "UnitName": "International and comparative family law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4537",
      "UnitName": "Public policy, regulation and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4538",
      "UnitName": "Lawyers, literature and cinema",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4539",
      "UnitName": "Modern constitutionalism: A comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4641",
      "UnitName": "Intellectual property: Theory, copyright and design",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4642",
      "UnitName": "Issues in medical ethics and law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4643",
      "UnitName": "Corporate social responsibility",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4644",
      "UnitName": "Comparative remedies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4645",
      "UnitName": "International perspectives on torts law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4646",
      "UnitName": "Sexuality and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4647",
      "UnitName": "Great books of the common law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4648",
      "UnitName": "Ethics and criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4649",
      "UnitName": "Mediation and law: From problem solving to narrative building",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4651",
      "UnitName": "Comparative evidence law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4652",
      "UnitName": "Transnational litigation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4653",
      "UnitName": "Privacy and surveillance in an information age: Comparative law perspectives",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4654",
      "UnitName": "Law and liberty",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4655",
      "UnitName": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4656",
      "UnitName": "Varieties of the secular: Law, religion, and social change",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4658",
      "UnitName": "International litigation and arbitration",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4659",
      "UnitName": "Game theory and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4660",
      "UnitName": "Regulating relationships and families",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4662",
      "UnitName": "Air and space law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4663",
      "UnitName": "International environmental governance",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4664",
      "UnitName": "Comparative dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4665",
      "UnitName": "Comparative cybercrime",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4666",
      "UnitName": "European human rights law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4667",
      "UnitName": "Human dignity in comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4668",
      "UnitName": "International investment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4669",
      "UnitName": "Humans rights and the European Union",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4670",
      "UnitName": "Introduction to Islamic law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4671",
      "UnitName": "Private investment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4673",
      "UnitName": "European and international monetary law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4674",
      "UnitName": "Freedom of speech: Law, theory and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4675",
      "UnitName": "International and comparative insolvency law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4676",
      "UnitName": "Judgment and decision-making",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4677",
      "UnitName": "International information and media law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4678",
      "UnitName": "International criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4679",
      "UnitName": "The law of climate change",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4680",
      "UnitName": "Australian corporations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4681",
      "UnitName": "Global economic law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4701",
      "UnitName": "Commercial transactions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4702",
      "UnitName": "Competition and consumer law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4703",
      "UnitName": "Introduction to intellectual property",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4704",
      "UnitName": "Taxation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4801",
      "UnitName": "Research project",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4802",
      "UnitName": "Research practicum",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4803",
      "UnitName": "Clinical externship",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4804",
      "UnitName": "Law reform and community development",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4805",
      "UnitName": "Mooting and advocacy competition",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4806",
      "UnitName": "Jessup moot competition",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4807",
      "UnitName": "Vis arbitration moot",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4808",
      "UnitName": "Law Review editorship 1",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW4809",
      "UnitName": "Law Review editorship 2",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5000",
      "UnitName": "Australian legal reasoning and methods",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5001",
      "UnitName": "Principles of criminal law and procedure",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5002",
      "UnitName": "Principles of contract law A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5003",
      "UnitName": "Principles of torts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5004",
      "UnitName": "Principles of public law and statutory interpretation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5005",
      "UnitName": "Principles of contract law B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5006",
      "UnitName": "Principles of property law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5007",
      "UnitName": "Principles of constitutional law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5008",
      "UnitName": "Principles of equity",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5009",
      "UnitName": "Advanced property law B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5010",
      "UnitName": "Principles of trusts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5011",
      "UnitName": "Principles of company law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5012",
      "UnitName": "Principles of evidence",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5013",
      "UnitName": "Principles of litigation and dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5014",
      "UnitName": "Principles of administrative law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5015",
      "UnitName": "Ethics in legal practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5016",
      "UnitName": "Principles of corporations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5017",
      "UnitName": "Advanced corporations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5018",
      "UnitName": "Advanced property law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5050",
      "UnitName": "Professional practice (JD)",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5051",
      "UnitName": "Research practicum",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5052",
      "UnitName": "Professional project",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5053",
      "UnitName": "Law Review editorship 1",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5054",
      "UnitName": "Law Review editorship 2",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5055",
      "UnitName": "Vis arbitration moot",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5056",
      "UnitName": "Jessup moot competition",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5080",
      "UnitName": "Australian legal system",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5081",
      "UnitName": "Australian legal process and research",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5082",
      "UnitName": "Masters research",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5083",
      "UnitName": "Extended research",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5084",
      "UnitName": "Minor thesis",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5185",
      "UnitName": "Graduate research paper",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5300",
      "UnitName": "Commercial tenancy law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5301",
      "UnitName": "Copyright",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5302",
      "UnitName": "European Union law and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5303",
      "UnitName": "Forensic family law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5304",
      "UnitName": "Overview of international human rights law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5305",
      "UnitName": "International trade law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5306",
      "UnitName": "Corporate insolvency",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5307",
      "UnitName": "Occupational health and safety",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5308",
      "UnitName": "Current issues in evidence",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5309",
      "UnitName": "Public sector employment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5310",
      "UnitName": "Sentencing",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5311",
      "UnitName": "Takeovers",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5312",
      "UnitName": "Competition law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5313",
      "UnitName": "Planning law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5314",
      "UnitName": "International environmental law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5315",
      "UnitName": "Commercial alternative dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5316",
      "UnitName": "Trade marks and commercial designations",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5317",
      "UnitName": "Principles of privacy and freedom of information",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5318",
      "UnitName": "International aspects of intellectual property",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5319",
      "UnitName": "Law of employee relations",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5320",
      "UnitName": "Local government law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5321",
      "UnitName": "Protecting commercial innovation: Patents and trade secrets",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5322",
      "UnitName": "Superannuation law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5323",
      "UnitName": "Collective labour rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5324",
      "UnitName": "Discrimination law, theory and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5325",
      "UnitName": "Defamation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5326",
      "UnitName": "Comparative European legal systems",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5327",
      "UnitName": "International human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5328",
      "UnitName": "International business transactions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5329",
      "UnitName": "Introduction to European Union law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5330",
      "UnitName": "International refugee law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5331",
      "UnitName": "Comparative constitution and rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5332",
      "UnitName": "International commercial arbitration",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5333",
      "UnitName": "Comparative criminal law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5334",
      "UnitName": "Psychiatry, psychology and law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5335",
      "UnitName": "Contemporary problems in the administration of criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5336",
      "UnitName": "Law of the internet",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5337",
      "UnitName": "Labour law for corporate lawyers",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5338",
      "UnitName": "International humanitarian law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5339",
      "UnitName": "Technology contracts and licensing law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5340",
      "UnitName": "Intellectual property",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5341",
      "UnitName": "Trade mark practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5342",
      "UnitName": "Current issues in electronic commerce law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5343",
      "UnitName": "Privacy and surveillance: Law, policy and governance",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5344",
      "UnitName": "Negotiation: Essential skills for dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5345",
      "UnitName": "Human rights, business and the global economy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5346",
      "UnitName": "Design law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5347",
      "UnitName": "Consumer policy and regulation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5348",
      "UnitName": "Indigenous rights and international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5350",
      "UnitName": "Principles of taxation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5351",
      "UnitName": "Comparative competition law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5352",
      "UnitName": "Electronic workplace law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5353",
      "UnitName": "Cybercrime",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5354",
      "UnitName": "International criminal justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5355",
      "UnitName": "Advocacy: Theory and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5356",
      "UnitName": "Corporate and white collar crime",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5357",
      "UnitName": "Corporate governance and directors' duties",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5358",
      "UnitName": "Current issues in workplace law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5359",
      "UnitName": "International human rights law and women",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5360",
      "UnitName": "Advanced conflict resolution skills",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5361",
      "UnitName": "Foundations of regulation: Policy, principles and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5362",
      "UnitName": "Regulatory methods",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5363",
      "UnitName": "Regulatory performance: Evaluating what works",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5364",
      "UnitName": "Economic, social and cultural rights and international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5365",
      "UnitName": "Terrorism and human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5366",
      "UnitName": "International banking and finance: Law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5367",
      "UnitName": "Energy law, regulation and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5368",
      "UnitName": "Regulation of Australian water resources",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5369",
      "UnitName": "World Trade Organization (WTO) law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5370",
      "UnitName": "Discrimination law and human rights at work",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5371",
      "UnitName": "Protecting the rights of minorities, marginalised and vulnerable people",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5372",
      "UnitName": "Principles of construction law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5373",
      "UnitName": "Comparative bills of rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5374",
      "UnitName": "Federal labour law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5375",
      "UnitName": "Arbitration of international commercial disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5376",
      "UnitName": "International criminal law: Procedural and practical aspects",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5377",
      "UnitName": "The use of force in international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5378",
      "UnitName": "Comparative corporate governance",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5379",
      "UnitName": "Procurement law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5380",
      "UnitName": "International human rights law and development",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5381",
      "UnitName": "Human rights advocacy: Australian law and practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5382",
      "UnitName": "Principles of environmental law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5383",
      "UnitName": "International refugee law and human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5384",
      "UnitName": "International investment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5385",
      "UnitName": "Corporate finance law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5386",
      "UnitName": "Health law and human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5387",
      "UnitName": "Non-adversarial family and children's law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5388",
      "UnitName": "Patenting for commercialisation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5389",
      "UnitName": "The law of climate change",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5390",
      "UnitName": "Workplace bargaining and agreements law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5392",
      "UnitName": "Globalisation and international economic law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5393",
      "UnitName": "Law of workforce management",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5394",
      "UnitName": "Banking law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5395",
      "UnitName": "Arbitration of domestic commercial disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5396",
      "UnitName": "Economics of regulation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5397",
      "UnitName": "Issues in consumer policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5398",
      "UnitName": "International labour law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5399",
      "UnitName": "Personal property securities",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5400",
      "UnitName": "International trade mark law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5402",
      "UnitName": "Innovation: Labour, competition and intellectual property law perspectives",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5403",
      "UnitName": "International covenant on civil and political rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5404",
      "UnitName": "Genocide and international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5407",
      "UnitName": "Current issues in torts",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5408",
      "UnitName": "Remedies in commercial disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5409",
      "UnitName": "Principles of family law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5410",
      "UnitName": "Collaborative practice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5411",
      "UnitName": "Advanced mediation: Skills and theory A",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5412",
      "UnitName": "Advanced mediation: Skills and theory B",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5413",
      "UnitName": "Legal process and professional conduct",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5414",
      "UnitName": "Public international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5415",
      "UnitName": "Domestic and international debt capital markets",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5416",
      "UnitName": "Children's rights in Australian law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5417",
      "UnitName": "Children's rights in international law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5418",
      "UnitName": "Transitional justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5419",
      "UnitName": "The law of financial transactions",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5420",
      "UnitName": "Malaysian and Singaporean constitutional systems",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5421",
      "UnitName": "Managing high conflict personalities in legal disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5422",
      "UnitName": "Victorian charter of rights and responsibilities",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5423",
      "UnitName": "Private international law in commercial disputes",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5424",
      "UnitName": "Human trafficking and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5425",
      "UnitName": "Current issues in copyright",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5426",
      "UnitName": "Regulating business: Enforcement and compliance",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5427",
      "UnitName": "Freedom of speech: Law theory and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5428",
      "UnitName": "Health law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5429",
      "UnitName": "Advanced commercial negotiation skills",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5430",
      "UnitName": "Advanced evidence and proof in litigation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5431",
      "UnitName": "International entertainment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5432",
      "UnitName": "Workplace investigations and misconduct",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5433",
      "UnitName": "Victims, law and mass atrocity",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5434",
      "UnitName": "Principles of government law and administration",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5435",
      "UnitName": "Comparative perspectives on crime and punishment",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5436",
      "UnitName": "International and comparative family law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5437",
      "UnitName": "China's legal system",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5438",
      "UnitName": "Current issues in sports law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5439",
      "UnitName": "Sexual and gender minorities and human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5440",
      "UnitName": "International commercial dispute resolution advocacy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5441",
      "UnitName": "Australian tax policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5442",
      "UnitName": "Racial, ethnic and linguistic minorities and human rights",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5443",
      "UnitName": "Language, communication and legal process",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5444",
      "UnitName": "Advanced commercial contracts masterclass",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5445",
      "UnitName": "Commercial equity",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5446",
      "UnitName": "Comparative media law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5447",
      "UnitName": "Intellectual property and the internet",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5448",
      "UnitName": "Copyright X: Monash",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5449",
      "UnitName": "Advanced administrative law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5450",
      "UnitName": "Principles of succession law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5451",
      "UnitName": "Indigenous people and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5452",
      "UnitName": "Private investment law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5453",
      "UnitName": "Comparative international litigation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5454",
      "UnitName": "Climate governance and citizen justice",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5455",
      "UnitName": "Chinese law and innovation policies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5456",
      "UnitName": "Science, technology and law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5457",
      "UnitName": "Forensic evidence: Law, science, medicine and technology",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5458",
      "UnitName": "Animal law, regulation and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5600",
      "UnitName": "Issues in medical ethics and law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5601",
      "UnitName": "Comparative remedies",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5602",
      "UnitName": "International perspectives on torts law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5603",
      "UnitName": "Comparative cyberlaw",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5604",
      "UnitName": "International environmental governance",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5605",
      "UnitName": "Comparative dispute resolution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5606",
      "UnitName": "Restitution",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5607",
      "UnitName": "Comparative evidence law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5608",
      "UnitName": "Transnational litigation",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5609",
      "UnitName": "Law and liberty",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5610",
      "UnitName": "Varieties of the secular: Law, religion, and social change",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5611",
      "UnitName": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5612",
      "UnitName": "International litigation and arbitration",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5613",
      "UnitName": "Game theory and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5614",
      "UnitName": "Regulating relationships and families",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5615",
      "UnitName": "Environmental activism, ecoterrorism and the law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5616",
      "UnitName": "Air and space law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5617",
      "UnitName": "International and comparative taxation law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5618",
      "UnitName": "Comparative cybercrime",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5619",
      "UnitName": "European human rights law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5620",
      "UnitName": "Privacy and surveillance in an information age: Comparative law perspectives",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5621",
      "UnitName": "Mediation and law: From problem solving to narrative building",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5622",
      "UnitName": "Human dignity in comparative perspective",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5623",
      "UnitName": "Human rights and the European Union",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5624",
      "UnitName": "Introduction to Islamic law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5625",
      "UnitName": "Freedom of speech: Law, theory and policy",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5626",
      "UnitName": "International and comparative insolvency law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5627",
      "UnitName": "Judgment and decision-making",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5628",
      "UnitName": "International and comparative trademark law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5629",
      "UnitName": "Comparative issues in patent law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5630",
      "UnitName": "European and international monetary law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5631",
      "UnitName": "Lawyers, literature and cinema",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5632",
      "UnitName": "International information and media law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW5633",
      "UnitName": "Contemporary workplace relations law",
      "Faculty": "law"
    },
    {
      "UnitCode": "LAW6300",
      "UnitName": "Doctor of Juridical Science seminar",
      "Faculty": "law"
    },
    {
      "UnitCode": "MAE2401",
      "UnitName": "Aircraft structures 1",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE2402",
      "UnitName": "Thermodynamics and heat transfer",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE2403",
      "UnitName": "Aerospace computational mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE2404",
      "UnitName": "Aerodynamics I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE2405",
      "UnitName": "Aircraft performance",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3401",
      "UnitName": "Aerodynamics II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3402",
      "UnitName": "Aerospace design project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3404",
      "UnitName": "Flight vehicle dynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3405",
      "UnitName": "Flight vehicle propulsion",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3406",
      "UnitName": "Aerospace materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3407",
      "UnitName": "Aircraft structures II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE3408",
      "UnitName": "Aerospace control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4404",
      "UnitName": "Aerospace practices",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4407",
      "UnitName": "Instrumentation and avionics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4408",
      "UnitName": "Damage tolerance and airworthiness",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4409",
      "UnitName": "Wing design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4904",
      "UnitName": "Minor research project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4965",
      "UnitName": "Advanced aerodynamics and turbulence",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE4980",
      "UnitName": "Aircraft engines",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5401",
      "UnitName": "Aerodynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5402",
      "UnitName": "Aircraft structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5403",
      "UnitName": "Composite airframes",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5404",
      "UnitName": "Airworthiness",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5405",
      "UnitName": "Avionics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5406",
      "UnitName": "Computational fluid mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5407",
      "UnitName": "Computer aided design of aerospace structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5408",
      "UnitName": "Spaceflight dynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5409",
      "UnitName": "Master of aerospace engineering: project thesis A",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAE5410",
      "UnitName": "Master of aerospace engineering: project thesis B",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAP4200",
      "UnitName": "Improving indigenous equity in professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5000",
      "UnitName": "Research in advanced health professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5001",
      "UnitName": "Preparatory minor thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5002",
      "UnitName": "Minor thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5003",
      "UnitName": "Essentials of advanced health care practice and research",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5010",
      "UnitName": "Advanced health practice research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5101",
      "UnitName": "Advanced critical care skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5104",
      "UnitName": "Emergency medicine skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAP5105",
      "UnitName": "Trauma skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "MAT1830",
      "UnitName": "Discrete mathematics for computer science",
      "Faculty": "it"
    },
    {
      "UnitCode": "MAT1841",
      "UnitName": "Continuous mathematics for computer science",
      "Faculty": "it"
    },
    {
      "UnitCode": "MAT2731",
      "UnitName": "Multivariate analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAT2742",
      "UnitName": "Mathematical modeling of the environment",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MAT9004",
      "UnitName": "Mathematical foundations for data science",
      "Faculty": "it"
    },
    {
      "UnitCode": "MBA5005",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5008",
      "UnitName": "Managing people for competitive advantage",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5030",
      "UnitName": "Specialist elective 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5060",
      "UnitName": "Specialist elective 4",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5111",
      "UnitName": "Leadership 1: Critical thinking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5112",
      "UnitName": "MBA 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5113",
      "UnitName": "MBA Labs: Strategy project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5211",
      "UnitName": "MBA5211 Leadership 2: People and performance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5212",
      "UnitName": "MBA 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5213",
      "UnitName": "Technology, innovation and entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5311",
      "UnitName": "Leadership 3: Influence and negotiations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5312",
      "UnitName": "MBA 3",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5313",
      "UnitName": "MBA Labs: Technology and entrepreneurship project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5400",
      "UnitName": "MBA corporate project 1",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5410",
      "UnitName": "MBA corporate project 2",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5411",
      "UnitName": "Leadership 4: Personal and professional development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5412",
      "UnitName": "MBA Seminars",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5413",
      "UnitName": "MBA Labs: International business project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5415",
      "UnitName": "Strategy capstone",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5500",
      "UnitName": "Negotiation and managerial judgment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5510",
      "UnitName": "The strategic environment of business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5520",
      "UnitName": "Creating sustainable organisations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5530",
      "UnitName": "Critical thinking for problem solving",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5540",
      "UnitName": "Innovation and entrepreneurship in the digital economy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5603",
      "UnitName": "Economics for managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5604",
      "UnitName": "Financial and management accounting for decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5605",
      "UnitName": "Business finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5607",
      "UnitName": "Evidence-based decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5608",
      "UnitName": "Managing people for competitive advantage in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5615",
      "UnitName": "Entrepreneurial marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5620",
      "UnitName": "Sustainability strategy in contemporary organisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5640",
      "UnitName": "The entrepreneurial and innovative organisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5701",
      "UnitName": "Negotiation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5703",
      "UnitName": "Managerial economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5704",
      "UnitName": "Accounting",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5705",
      "UnitName": "Business finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5706",
      "UnitName": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5707",
      "UnitName": "Data analysis in business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5708",
      "UnitName": "Managing people",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5709",
      "UnitName": "The business environment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5715",
      "UnitName": "Strategic marketing management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5720",
      "UnitName": "Corporate sustainability",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5721",
      "UnitName": "Experiential learning project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5722",
      "UnitName": "MBA study tour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5730",
      "UnitName": "Critical thinking",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5740",
      "UnitName": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5903",
      "UnitName": "Business economics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5904",
      "UnitName": "Interpreting accounting information",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5905",
      "UnitName": "Corporate finance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBA5906",
      "UnitName": "Strategic marketing leadership",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MBS3800",
      "UnitName": "Medical bioscience internship",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MBS4100",
      "UnitName": "Medical bioscience research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MBS4280",
      "UnitName": "Honours coursework in medical bioscience",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MCB2011",
      "UnitName": "Molecular biology and the cell",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MCB2022",
      "UnitName": "The dynamic cell",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MCE5100",
      "UnitName": "Introduction to mammalian embryology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5101",
      "UnitName": "Infertility and treatment strategies",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5103",
      "UnitName": "IVF processes: Embryo production and cryopreservation techniques (theory)",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5112",
      "UnitName": "IVF processes: Embryo production and cryopreservation techniques (practical)",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5200",
      "UnitName": "Total quality management in assisted reproductive technologies",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5201",
      "UnitName": "ICSI and research methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5212",
      "UnitName": "Preimplantation genetic diagnosis",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCE5213",
      "UnitName": "Regulation and ethics in assisted reproductive technologies",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5501",
      "UnitName": "Depressive and anxiety disorders in general practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5504",
      "UnitName": "Dermatology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5507",
      "UnitName": "Child health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5601",
      "UnitName": "Women's sexual and reproductive health in general practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5602",
      "UnitName": "Mindfulness-based stress management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MCM5606",
      "UnitName": "Issues in general practice prescribing",
      "Faculty": "med"
    },
    {
      "UnitCode": "MDC4000",
      "UnitName": "Design project (Part 1)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4001",
      "UnitName": "Design project (part 1)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4002",
      "UnitName": "Design project (part 2)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4010",
      "UnitName": "Advanced design communication",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4100",
      "UnitName": "Design project (part 1)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4110",
      "UnitName": "Interaction design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4120",
      "UnitName": "Multimedia design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4130",
      "UnitName": "Collaborative design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4201",
      "UnitName": "Fundamental interaction design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4202",
      "UnitName": "Fundamental interaction design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4215",
      "UnitName": "Interaction design lab 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4216",
      "UnitName": "Interaction design lab 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4500",
      "UnitName": "Design fundamentals studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC4550",
      "UnitName": "Design technologies and processes",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5000",
      "UnitName": "Major design project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5001",
      "UnitName": "Design project (part three)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5100",
      "UnitName": "Major design project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5201",
      "UnitName": "Fundamental interaction design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5202",
      "UnitName": "Interaction design research project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5210",
      "UnitName": "Interaction design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5215",
      "UnitName": "Interaction design lab 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5220",
      "UnitName": "Multimedia design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5230",
      "UnitName": "Collaborative design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5310",
      "UnitName": "Interaction design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5320",
      "UnitName": "Multimedia design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5330",
      "UnitName": "Collaborative design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDC5340",
      "UnitName": "Advanced studies in design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDS5022",
      "UnitName": "Design theory workshop",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MDS5031",
      "UnitName": "Research methods in design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MEC2401",
      "UnitName": "Dynamics I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2402",
      "UnitName": "Engineering design I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2403",
      "UnitName": "Mechanics of materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2404",
      "UnitName": "Mechanics of fluids",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2405",
      "UnitName": "Thermodynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2407",
      "UnitName": "Electromechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC2456",
      "UnitName": "Engineering computational analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3416",
      "UnitName": "Engineering design II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3451",
      "UnitName": "Fluid mechanics II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3453",
      "UnitName": "Dynamics II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3454",
      "UnitName": "Thermodynamics and heat transfer",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3455",
      "UnitName": "Solid mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3456",
      "UnitName": "Engineering computational analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3457",
      "UnitName": "Systems and control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3458",
      "UnitName": "Experimental project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC3459",
      "UnitName": "Materials selection for engineering design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4401",
      "UnitName": "Final year project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4402",
      "UnitName": "Final year project - Thesis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4404",
      "UnitName": "Professional practice",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4407",
      "UnitName": "Engineering design III",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4416",
      "UnitName": "Momentum, energy & mass transport in engineering systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4417",
      "UnitName": "Refrigeration and air conditioning",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4418",
      "UnitName": "Control systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4425",
      "UnitName": "Micro/nano solid and fluid mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4426",
      "UnitName": "Computer-aided design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4428",
      "UnitName": "Advanced dynamics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4444",
      "UnitName": "Industrial noise and control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4446",
      "UnitName": "Composite structures",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4447",
      "UnitName": "Computers in fluids and energy",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4456",
      "UnitName": "Robotics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4459",
      "UnitName": "Wind engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4801",
      "UnitName": "Non-destructive testing and inspection",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4802",
      "UnitName": "Sustainable engineering and design with nanomaterials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC4803",
      "UnitName": "Internal combustion engines",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5415",
      "UnitName": "Research Seminar",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5881",
      "UnitName": "Engineering systems performance analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5882",
      "UnitName": "Instrumentation, sensing and monitoring",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5883",
      "UnitName": "Mechanical systems design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5884",
      "UnitName": "Sustainable engineering systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5885",
      "UnitName": "Energy efficiency and sustainability engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5886",
      "UnitName": "Sustainable energy technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5887",
      "UnitName": "Environmental and air pollution control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5888",
      "UnitName": "Renewable energy systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC5889",
      "UnitName": "Medical device technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6410",
      "UnitName": "Research practices",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6881",
      "UnitName": "Engineering systems performance analysis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6882",
      "UnitName": "Instrumentation, sensing and monitoring",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6883",
      "UnitName": "Mechanical systems design",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6884",
      "UnitName": "Sustainable engineering systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6885",
      "UnitName": "Energy efficiency and sustainability engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6886",
      "UnitName": "Sustainable energy technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6887",
      "UnitName": "Environmental and air pollution control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6888",
      "UnitName": "Renewable energy systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MEC6889",
      "UnitName": "Medical device technologies",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MED1011",
      "UnitName": "Medicine 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED1022",
      "UnitName": "Medicine 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED2000",
      "UnitName": "Year 1 and 2 final grade",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED2031",
      "UnitName": "Medicine 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED2042",
      "UnitName": "Medicine 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED3051",
      "UnitName": "Medicine and surgery 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED3062",
      "UnitName": "Medicine and surgery 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED3200",
      "UnitName": "Introductory clinical studies",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED4000",
      "UnitName": "Year 3B and 4C final grade",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED4190",
      "UnitName": "Specialty clinical practices",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED4200",
      "UnitName": "Integrated clinical studies",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED4301",
      "UnitName": "Medical science honours research skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED4302",
      "UnitName": "Medical science honours research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED5091",
      "UnitName": "Advanced clinical practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED5092",
      "UnitName": "Advanced clinical practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED5100",
      "UnitName": "Final MBBS grade",
      "Faculty": "med"
    },
    {
      "UnitCode": "MED5102",
      "UnitName": "Contemporary developments in clinical practice: Patient safety",
      "Faculty": "med"
    },
    {
      "UnitCode": "MEH5050",
      "UnitName": "Emergency health project",
      "Faculty": "med"
    },
    {
      "UnitCode": "MFM5000",
      "UnitName": "Principles of general practice and primary care",
      "Faculty": "med"
    },
    {
      "UnitCode": "MFM5001",
      "UnitName": "Masters thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "MFM5004",
      "UnitName": "Chronic disease management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MFM5008",
      "UnitName": "Applied research in general practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MFM5009",
      "UnitName": "Prevention in general practice and primary care",
      "Faculty": "med"
    },
    {
      "UnitCode": "MGB1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGB2230",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGB2430",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGB3684",
      "UnitName": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2021",
      "UnitName": "Organisations and society",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2120",
      "UnitName": "Managing international business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2130",
      "UnitName": "Asian management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2230",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2410",
      "UnitName": "International employment relations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2420",
      "UnitName": "Employee relations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC2430",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3110",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3120",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3130",
      "UnitName": "The management of change",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3250",
      "UnitName": "Management in small firms",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3450",
      "UnitName": "Managing conflict",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGC3950",
      "UnitName": "Managing for sustainability",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF1100",
      "UnitName": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2111",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2341",
      "UnitName": "Managing employee relations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2351",
      "UnitName": "International business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2511",
      "UnitName": "Managing quality, innovation and knowledge",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2656",
      "UnitName": "HRM and managing global workforces",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF2661",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3361",
      "UnitName": "Workplace learning and performance management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3381",
      "UnitName": "Managing information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3420",
      "UnitName": "Human resource development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3450",
      "UnitName": "Managing conflict",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3621",
      "UnitName": "Organisational change",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3681",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF3684",
      "UnitName": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5011",
      "UnitName": "Commercialisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5020",
      "UnitName": "Business ethics in a global environment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5030",
      "UnitName": "Corporate social responsibility",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5130",
      "UnitName": "Managing diversity and inclusion",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5171",
      "UnitName": "Managing the multinational enterprise: cases and issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5181",
      "UnitName": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5220",
      "UnitName": "Managing work, family and life",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5261",
      "UnitName": "Human resource management issues",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5300",
      "UnitName": "Governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5310",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5360",
      "UnitName": "Strategic management in the public sector",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5370",
      "UnitName": "Policy analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5440",
      "UnitName": "Public sector financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5470",
      "UnitName": "International manufacturing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5551",
      "UnitName": "Strategic human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5600",
      "UnitName": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5610",
      "UnitName": "People management and work in a global context",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5611",
      "UnitName": "Advanced supply chain management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5630",
      "UnitName": "Principles of negotiation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5631",
      "UnitName": "International human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5640",
      "UnitName": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5670",
      "UnitName": "Leadership",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5680",
      "UnitName": "Managerial problem solving and decision making",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5690",
      "UnitName": "Services and operations management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5691",
      "UnitName": "Sustainable operations and supply chain management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5701",
      "UnitName": "Designing business processes",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5702",
      "UnitName": "People management and strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5710",
      "UnitName": "Governance of market societies",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5722",
      "UnitName": "Emerging economies in a globalising world",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5730",
      "UnitName": "International trade policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5760",
      "UnitName": "International institutions and organisations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5911",
      "UnitName": "Diplomacy and statecraft",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5920",
      "UnitName": "Work and employment relations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5921",
      "UnitName": "Foundations in human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5923",
      "UnitName": "Public policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5927",
      "UnitName": "Public management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5928",
      "UnitName": "Leadership theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5960",
      "UnitName": "Managing people and organisations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5961",
      "UnitName": "Supply chain management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5962",
      "UnitName": "Principles of management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5963",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5966",
      "UnitName": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5972",
      "UnitName": "Managing organisational change",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5976",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5985",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5991",
      "UnitName": "Professional development - career dynamics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGF5992",
      "UnitName": "Professional development - Self and relationships",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2230",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2322",
      "UnitName": "Recruitment and selection",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2323",
      "UnitName": "Employment relations",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2351",
      "UnitName": "International business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2430",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG2700",
      "UnitName": "Project management for small to medium enterprises",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG3130",
      "UnitName": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG3352",
      "UnitName": "Service operations management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG3401",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG3430",
      "UnitName": "International human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGG3681",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGM5181",
      "UnitName": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGM5310",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGM5640",
      "UnitName": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGM5966",
      "UnitName": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP2200",
      "UnitName": "Festivals and events",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP2279",
      "UnitName": "Inclusive management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP2501",
      "UnitName": "Introduction to tourism",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP3113",
      "UnitName": "Organisation governance and ethics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP3249",
      "UnitName": "Project and innovation management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGP3684",
      "UnitName": "Business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS1100",
      "UnitName": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS2230",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS2351",
      "UnitName": "International business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS2430",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3130",
      "UnitName": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3210",
      "UnitName": "Organisational wellness",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3401",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3650",
      "UnitName": "Integrated business management simulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3651",
      "UnitName": "Entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS3991",
      "UnitName": "Leadership principles and practices",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5000",
      "UnitName": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5181",
      "UnitName": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5310",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5640",
      "UnitName": "Cross-cultural management communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5900",
      "UnitName": "Research report",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5901",
      "UnitName": "Research report: An introduction",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGS5966",
      "UnitName": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW1010",
      "UnitName": "Introduction to management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW1100",
      "UnitName": "Managerial communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW1232",
      "UnitName": "Introduction to Islamic business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW2230",
      "UnitName": "Organisational behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW2351",
      "UnitName": "International business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW2430",
      "UnitName": "Human resource management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW2991",
      "UnitName": "Leadership in Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3130",
      "UnitName": "Organisational change and development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3210",
      "UnitName": "Organisational wellness",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3234",
      "UnitName": "Social entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3381",
      "UnitName": "Management information systems",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3401",
      "UnitName": "Strategic management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGW3681",
      "UnitName": "International management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX2200",
      "UnitName": "Introduction to events",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX2501",
      "UnitName": "Introduction to tourism",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX2700",
      "UnitName": "Project management for small to medium enterprises",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3100",
      "UnitName": "Corporate social responsibility and business ethics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3121",
      "UnitName": "International business strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3441",
      "UnitName": "Human resource strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3650",
      "UnitName": "Integrated business management simulation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3651",
      "UnitName": "Entrepreneurship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3771",
      "UnitName": "Operations management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX3991",
      "UnitName": "Leadership principles and practices",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX4000",
      "UnitName": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX4100",
      "UnitName": "Perspectives and paradigms in management theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX4200",
      "UnitName": "Data analysis for organisational research",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX4300",
      "UnitName": "Contemporary issues in management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX4400",
      "UnitName": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5000",
      "UnitName": "Introductory management research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5020",
      "UnitName": "Business ethics in a global environment",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5030",
      "UnitName": "Corporate social responsibility",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5120",
      "UnitName": "Contemporary Asia",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5130",
      "UnitName": "Managing diversity and inclusion",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5300",
      "UnitName": "Governance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5340",
      "UnitName": "International public policy and management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5360",
      "UnitName": "Strategic management in the public sector",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5370",
      "UnitName": "Policy analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5440",
      "UnitName": "Public sector financial management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5461",
      "UnitName": "Contemporary issues in globalisation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5470",
      "UnitName": "International manufacturing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5600",
      "UnitName": "Managing innovation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5610",
      "UnitName": "Work and employment relations in a global context",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5630",
      "UnitName": "Principles of negotiation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5730",
      "UnitName": "International trade policy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5870",
      "UnitName": "Organisational and business dynamics",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5890",
      "UnitName": "International study program in international business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5900",
      "UnitName": "Research report",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGX5901",
      "UnitName": "Research report (introduction)",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGZ5181",
      "UnitName": "International business strategy and cases",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGZ5640",
      "UnitName": "Cross cultural management communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGZ5750",
      "UnitName": "The governance of international trade",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MGZ5966",
      "UnitName": "International business theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MIC2011",
      "UnitName": "Introduction to microbiology and microbial biotechnology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC2022",
      "UnitName": "Microbes in health and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC3011",
      "UnitName": "Molecular microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC3022",
      "UnitName": "Molecular virology and viral pathogenesis",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC3032",
      "UnitName": "Pathogenesis of bacterial infectious diseases",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC3041",
      "UnitName": "Medical microbiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIC3990",
      "UnitName": "Action in microbiology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MID1000",
      "UnitName": "Introduction to Midwifery",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID1002",
      "UnitName": "Making practice connections",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID1003",
      "UnitName": "The childbearing journey",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID2000",
      "UnitName": "Foundations for midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID2010",
      "UnitName": "Working with birthing women",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID2110",
      "UnitName": "Complementary therapies: An evidence based approach",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3000",
      "UnitName": "Theory and practice of complex midwifery",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3103",
      "UnitName": "Childbearing obstacles",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3104",
      "UnitName": "Navigating childbearing challenges",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3105",
      "UnitName": "Women's health: Women's business",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3110",
      "UnitName": "Professional midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3201",
      "UnitName": "Midwifery practice elective",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID3202",
      "UnitName": "Supporting the newborn infant",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID4001",
      "UnitName": "Preparation for practice (midwifery)",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5001",
      "UnitName": "Woman midwife partnerships and normal childbearing",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5002",
      "UnitName": "Woman midwife partnerships and complex childbearing",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5003",
      "UnitName": "Midwifery and maternity in context",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5004",
      "UnitName": "Becoming a midwife",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5005",
      "UnitName": "Advancing midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5006",
      "UnitName": "Public and primary health care in midwifery",
      "Faculty": "med"
    },
    {
      "UnitCode": "MID5007",
      "UnitName": "Contextual and professional issues in midwifery",
      "Faculty": "med"
    },
    {
      "UnitCode": "MIMR5001",
      "UnitName": "Master of biomedical science (Part 1): Monash Institute of Medical Research PT",
      "Faculty": "med"
    },
    {
      "UnitCode": "MIS4100",
      "UnitName": "Regenerative medicine research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MIS4200",
      "UnitName": "Advanced studies in regenerative medicine",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MKB1200",
      "UnitName": "Principles of marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB2402",
      "UnitName": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB2420",
      "UnitName": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB2500",
      "UnitName": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB2521",
      "UnitName": "Brand management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB2600",
      "UnitName": "Tourism marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB3301",
      "UnitName": "Services Marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB3461",
      "UnitName": "Marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB3531",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKB3881",
      "UnitName": "Digital marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC1200",
      "UnitName": "Principles of marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC2110",
      "UnitName": "Buyer behaviour in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC2130",
      "UnitName": "Marketing decision analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC2500",
      "UnitName": "Marketing research analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC2610",
      "UnitName": "Strategic retailing in the global market",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3110",
      "UnitName": "Market analysis and strategy development",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3130",
      "UnitName": "Strategic issues in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3140",
      "UnitName": "Marketing strategy implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3220",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3300",
      "UnitName": "Marketing law",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3460",
      "UnitName": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKC3500",
      "UnitName": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF1120",
      "UnitName": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2111",
      "UnitName": "Buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2121",
      "UnitName": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2131",
      "UnitName": "Marketing decision analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2401",
      "UnitName": "Marketing issues in packaging design",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2521",
      "UnitName": "Brand management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2540",
      "UnitName": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF2801",
      "UnitName": "Marketing insights",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3001",
      "UnitName": "Special studies unit",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3121",
      "UnitName": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3131",
      "UnitName": "Strategic marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3141",
      "UnitName": "Issues in competitive advantage",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3151",
      "UnitName": "Marketing planning and strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3301",
      "UnitName": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3461",
      "UnitName": "Marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3471",
      "UnitName": "Sales management and negotiation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3500",
      "UnitName": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3531",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3621",
      "UnitName": "Advertising management and campaigns",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3710",
      "UnitName": "Specialised applications in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF3881",
      "UnitName": "Digital marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5150",
      "UnitName": "Major project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5200",
      "UnitName": "Assessing marketing performance",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5231",
      "UnitName": "Strategic brand management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5241",
      "UnitName": "Sport marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5251",
      "UnitName": "Case studies in marketing strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5280",
      "UnitName": "Sustainable marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5301",
      "UnitName": "Minor thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5351",
      "UnitName": "Marketing strategy masterclass",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5371",
      "UnitName": "Business to business marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5391",
      "UnitName": "Sales management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5403",
      "UnitName": "Advanced business research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5461",
      "UnitName": "Contemporary issues in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5463",
      "UnitName": "Advanced buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5500",
      "UnitName": "Survey data analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5505",
      "UnitName": "Marketing for healthcare managers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5561",
      "UnitName": "E-marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5601",
      "UnitName": "Social media marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5630",
      "UnitName": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5641",
      "UnitName": "Advanced marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5660",
      "UnitName": "Relationship marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5741",
      "UnitName": "Marketing performance and decision analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5760",
      "UnitName": "Marketing leadership in society",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5761",
      "UnitName": "Managing supply networks",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5801",
      "UnitName": "Customer focused innovation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5911",
      "UnitName": "Theory and process of buyer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5912",
      "UnitName": "Marketing research",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5916",
      "UnitName": "Foundations of marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5917",
      "UnitName": "Understanding marketing and consumers",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5926",
      "UnitName": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5970",
      "UnitName": "Direct marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5979",
      "UnitName": "Marketing financial services",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKF5981",
      "UnitName": "Retailing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG2402",
      "UnitName": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG2420",
      "UnitName": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG2460",
      "UnitName": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG3121",
      "UnitName": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG3440",
      "UnitName": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG3442",
      "UnitName": "Sales management",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKG3444",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKM5211",
      "UnitName": "Applied business project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKM5955",
      "UnitName": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP1120",
      "UnitName": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP2600",
      "UnitName": "Tourism marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP2701",
      "UnitName": "Consumer psychology",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP2702",
      "UnitName": "Stakeholder marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP2720",
      "UnitName": "Research methods and analysis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP3200",
      "UnitName": "Sports marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKP3800",
      "UnitName": "Social marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS1120",
      "UnitName": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS2402",
      "UnitName": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS2420",
      "UnitName": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS2431",
      "UnitName": "Business marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS2460",
      "UnitName": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS3121",
      "UnitName": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS3440",
      "UnitName": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS3444",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS3631",
      "UnitName": "Marketing internship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS3881",
      "UnitName": "Electronic marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKS5955",
      "UnitName": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW1120",
      "UnitName": "Marketing theory and practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW1300",
      "UnitName": "Introduction to social commerce",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW1601",
      "UnitName": "Introduction to e-business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW2402",
      "UnitName": "Consumer behaviour",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW2420",
      "UnitName": "Marketing research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW2431",
      "UnitName": "Business marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW2460",
      "UnitName": "Integrated marketing communication",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3121",
      "UnitName": "Marketing planning and implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3301",
      "UnitName": "Services marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3440",
      "UnitName": "Marketing strategy",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3444",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3510",
      "UnitName": "Islamic marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3610",
      "UnitName": "Marketing strategy and implementation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3701",
      "UnitName": "Neuroscience of decision-making: An introduction",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3841",
      "UnitName": "E-business performance measurement",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKW3881",
      "UnitName": "Electronic marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX1500",
      "UnitName": "Retail management principles",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX2531",
      "UnitName": "Not for profit marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX3002",
      "UnitName": "Enhanced research skills",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX3200",
      "UnitName": "Sport marketing and sponsorship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX3481",
      "UnitName": "Marketing channels",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX3521",
      "UnitName": "Global study programs in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX3631",
      "UnitName": "Marketing internship",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4050",
      "UnitName": "Marketing theory",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4060",
      "UnitName": "Marketing research practice",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4070",
      "UnitName": "Qualitative research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4080",
      "UnitName": "Advanced business research methods",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4461",
      "UnitName": "Contemporary issues in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX4900",
      "UnitName": "Honours research thesis",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX5123",
      "UnitName": "Entrepreneurial innovation",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX5260",
      "UnitName": "International marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX5521",
      "UnitName": "Global study programs in marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX5931",
      "UnitName": "International dimensions of electronic business",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKX5955",
      "UnitName": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MKZ5955",
      "UnitName": "Marketing and the international consumer",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MMD1302",
      "UnitName": "Multimedia & digital arts studio A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD2303",
      "UnitName": "Multimedia and digital arts studio B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD2304",
      "UnitName": "Multimedia and digital arts studio C",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD2306",
      "UnitName": "Graphic user interface design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD3305",
      "UnitName": "Multimedia studio 5A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD3306",
      "UnitName": "Multimedia studio 6A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD3307",
      "UnitName": "Digital arts studio 5A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD3308",
      "UnitName": "Digital arts studio 6A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD3713",
      "UnitName": "Game design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD4001",
      "UnitName": "Multimedia design studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD4107",
      "UnitName": "Major Project (Multimedia & Digital Arts) Part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD4108",
      "UnitName": "Major Project (Multimedia & Digital Arts) Part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD5002",
      "UnitName": "Multimedia design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMD5003",
      "UnitName": "Multimedia Design Studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MMT5002",
      "UnitName": "Medicine minor thesis extension unit",
      "Faculty": "med"
    },
    {
      "UnitCode": "MMT5004",
      "UnitName": "Medicine minor thesis extension unit",
      "Faculty": "med"
    },
    {
      "UnitCode": "MNE1010",
      "UnitName": "Natural resources engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE2010",
      "UnitName": "Fixed plant engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE2030",
      "UnitName": "Project, risk and safety management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3010",
      "UnitName": "Rock mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3020",
      "UnitName": "Resource estimation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3030",
      "UnitName": "Ventilation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3040",
      "UnitName": "Surface mining systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3050",
      "UnitName": "Underground mining",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE3060",
      "UnitName": "Blasting and fragmentation",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4010",
      "UnitName": "Mine planning and scheduling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4020",
      "UnitName": "Design and feasibility project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4030",
      "UnitName": "Mine management and economics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4040",
      "UnitName": "Mineral processing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4070",
      "UnitName": "Research project 3",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MNE4120",
      "UnitName": "Instrumentation, automation and asset management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MON2005",
      "UnitName": "Law in professional contexts",
      "Faculty": "law"
    },
    {
      "UnitCode": "MON2222",
      "UnitName": "Sustainability: learning and living it",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MPA5001",
      "UnitName": "Work-based research project",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MPA5902",
      "UnitName": "Designing public policies and programs",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "MPH5020",
      "UnitName": "Introduction to epidemiology and biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5040",
      "UnitName": "Introductory epidemiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5041",
      "UnitName": "Introductory biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5042",
      "UnitName": "Climate change and public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5200",
      "UnitName": "Regression methods for epidemiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5202",
      "UnitName": "Clinical epidemiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5203",
      "UnitName": "Environmental influences on health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5207",
      "UnitName": "Chronic disease: Epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5213",
      "UnitName": "Research methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5218",
      "UnitName": "Infectious diseases: Epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5222",
      "UnitName": "Assessment and control of workplace hazards",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5231",
      "UnitName": "Research design and project proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5232",
      "UnitName": "Research conduct, analysis, write-up and submission",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5236",
      "UnitName": "Clinical trials",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5237",
      "UnitName": "Clinical measurement",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5239",
      "UnitName": "Systematic reviews and meta-analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5241",
      "UnitName": "Introduction to occupational health and safety",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5242",
      "UnitName": "Psychosocial work environment",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5243",
      "UnitName": "Chemical and biological hazards",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5244",
      "UnitName": "Ergonomic and physical hazards",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5248",
      "UnitName": "Primary health care and global health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5249",
      "UnitName": "Field methods for global health planning and evaluation",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5250",
      "UnitName": "Women's and children's health: A global perspective",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5251",
      "UnitName": "Infectious diseases and global health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5253",
      "UnitName": "Public health in refugee settings",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5254",
      "UnitName": "Nutrition in developing countries",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5255",
      "UnitName": "Health and human rights",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5256",
      "UnitName": "Injury epidemiology and prevention",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5260",
      "UnitName": "Health policy and prevention in a global world",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5265",
      "UnitName": "Law for health systems",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5266",
      "UnitName": "Clinical leadership and management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5267",
      "UnitName": "Principles of health care quality improvement",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5268",
      "UnitName": "Financial issues in health care management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5269",
      "UnitName": "Foundations of health policy",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5270",
      "UnitName": "Advanced statistical methods for clinical research",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5272",
      "UnitName": "Reform and development of health services",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5273",
      "UnitName": "Case study in health services management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5276",
      "UnitName": "Safety management systems",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5277",
      "UnitName": "Practical data management",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5282",
      "UnitName": "Health communications and training",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5283",
      "UnitName": "Ethics, good research practice and practical research methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5285",
      "UnitName": "Human factors for patient safety",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5286",
      "UnitName": "Applying and practicing the principles of patient safety and quality improvement",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5287",
      "UnitName": "Alcohol and other drugs in society: A national and global perspective",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5301",
      "UnitName": "Health systems and policy",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5302",
      "UnitName": "Biostatistics: Concepts and applications",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5303",
      "UnitName": "Epidemiology of infectious diseases",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5304",
      "UnitName": "Leading and managing in public health and health care",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5305",
      "UnitName": "Epidemiology: Concepts and applications",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5306",
      "UnitName": "Evaluation in public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5307",
      "UnitName": "Introduction to health law principles",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5308",
      "UnitName": "Developing health systems",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5309",
      "UnitName": "Occupational health and safety",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5310",
      "UnitName": "Introduction to environmental health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5311",
      "UnitName": "Safety and quality in health care",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5312",
      "UnitName": "Advances in managing patient care processes",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5313",
      "UnitName": "Challenges in public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH5314",
      "UnitName": "Epidemiology of chronic disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH6040",
      "UnitName": "Introductory epidemiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "MPH6041",
      "UnitName": "Introductory biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "MRE5001",
      "UnitName": "Terotechnology and life cycle costs",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5002",
      "UnitName": "Maintenance management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5003",
      "UnitName": "Industrial techniques in maintenance management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5004",
      "UnitName": "Asset management techniques",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5005",
      "UnitName": "Quantitative techniques for asset management",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5006",
      "UnitName": "Machine condition monitoring and fault diagnosis",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5007",
      "UnitName": "Risk engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5008",
      "UnitName": "Maintenance and reliability engineering project",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5101",
      "UnitName": "Basic quantitative skills for reliability engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5102",
      "UnitName": "Understanding reliability",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5103",
      "UnitName": "Advanced reliability",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRE5104",
      "UnitName": "Reliability applications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MRS0001",
      "UnitName": "Coursework core lectures",
      "Faculty": "med"
    },
    {
      "UnitCode": "MRS0002",
      "UnitName": "Coursework semester 1 stream 1 lectures",
      "Faculty": "med"
    },
    {
      "UnitCode": "MRS0003",
      "UnitName": "Coursework semester 1 stream 2 lectures",
      "Faculty": "med"
    },
    {
      "UnitCode": "MRS0004",
      "UnitName": "Coursework semester 2 stream 1 lectures",
      "Faculty": "med"
    },
    {
      "UnitCode": "MRS0005",
      "UnitName": "Coursework semester 2 stream 2 lectures",
      "Faculty": "med"
    },
    {
      "UnitCode": "MSC4100",
      "UnitName": "Materials science project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSC4110",
      "UnitName": "Materials science project part time I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSC4120",
      "UnitName": "Materials science project part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSC4200",
      "UnitName": "Advanced materials science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSC4210",
      "UnitName": "Materials applications part time I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSC4220",
      "UnitName": "Materials applications part time II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MSM5100",
      "UnitName": "Research Project - Master of Biomedical Science MUM",
      "Faculty": "med"
    },
    {
      "UnitCode": "MSM5101",
      "UnitName": "Research Project - Master of Biomedical Science MUM (PART-TIME)",
      "Faculty": "med"
    },
    {
      "UnitCode": "MSM5200",
      "UnitName": "Advanced Studies in Biomedical Sciences MUM",
      "Faculty": "med"
    },
    {
      "UnitCode": "MSM5201",
      "UnitName": "Advanced Studies in Biomedical Sciences MUM (PART-TIME)",
      "Faculty": "med"
    },
    {
      "UnitCode": "MTE2541",
      "UnitName": "Crystal structures, thermodynamics and phase equilibria",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2542",
      "UnitName": "Microstructural development",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2544",
      "UnitName": "Functional materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2545",
      "UnitName": "Polymers and ceramics I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2546",
      "UnitName": "Mechanics of materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2547",
      "UnitName": "Structure-property relationships in materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE2548",
      "UnitName": "Biomaterials I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3541",
      "UnitName": "Materials durability",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3542",
      "UnitName": "Microstructural design in structural materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3543",
      "UnitName": "Microstructure to applications: the mechanics of materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3544",
      "UnitName": "Management and practice in materials engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3545",
      "UnitName": "Functional materials and devices",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3546",
      "UnitName": "Polymers and ceramics II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE3547",
      "UnitName": "Materials characterisation and modelling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4525",
      "UnitName": "Project I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4526",
      "UnitName": "Project II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4571",
      "UnitName": "Materials engineering design and practice",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4572",
      "UnitName": "Polymer and composite processing and engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4573",
      "UnitName": "Processing and engineering of metals and ceramics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4590",
      "UnitName": "Modelling of materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4592",
      "UnitName": "Advanced ceramics and applications",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4593",
      "UnitName": "Materials and sustainability",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4594",
      "UnitName": "Engineering alloy design, processing and selection",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4595",
      "UnitName": "Corrosion mechanisms and protection methods",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4596",
      "UnitName": "Biomaterials II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4597",
      "UnitName": "Engineering with nanomaterials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE4598",
      "UnitName": "Electron microscopy",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5881",
      "UnitName": "Advanced materials characterisation and applied crystallography",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5882",
      "UnitName": "Advanced polymeric materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5883",
      "UnitName": "Environmental durability and protection of metals and engineering materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5884",
      "UnitName": "Advanced photovoltaics and energy storage",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5885",
      "UnitName": "Biomaterials and biomechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5886",
      "UnitName": "Additive manufacturing of metallic materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE5887",
      "UnitName": "Additive manufacturing of polymeric and functional materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6881",
      "UnitName": "Advanced materials characterisation and applied crystallography",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6882",
      "UnitName": "Advanced polymeric materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6883",
      "UnitName": "Environmental durability and protection of metals and engineering materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6884",
      "UnitName": "Advanced photovoltaics and energy storage",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6885",
      "UnitName": "Biomaterials and biomechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6886",
      "UnitName": "Additive manufacturing of metallic materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTE6887",
      "UnitName": "Additive manufacturing of polymeric and functional materials",
      "Faculty": "eng"
    },
    {
      "UnitCode": "MTH1000",
      "UnitName": "Special topics in mathematics level one",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH1010",
      "UnitName": "Functions and their applications",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH1020",
      "UnitName": "Analysis of change",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH1030",
      "UnitName": "Techniques for modelling",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH1035",
      "UnitName": "Techniques for modelling (advanced)",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2000",
      "UnitName": "Mathematics research project level 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2010",
      "UnitName": "Multivariable calculus",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2015",
      "UnitName": "Multivariable calculus (advanced)",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2021",
      "UnitName": "Linear algebra with applications",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2025",
      "UnitName": "Linear algebra (advanced)",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2032",
      "UnitName": "Differential equations with modelling",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2040",
      "UnitName": "Mathematical modelling",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2121",
      "UnitName": "Algebra and number theory",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2132",
      "UnitName": "The nature and beauty of mathematics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2140",
      "UnitName": "Real analysis",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2222",
      "UnitName": "Mathematics of uncertainty",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH2232",
      "UnitName": "Mathematical statistics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3000",
      "UnitName": "Mathematics research project level 3",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3011",
      "UnitName": "Partial differential equations",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3020",
      "UnitName": "Complex analysis and integral transforms",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3051",
      "UnitName": "Introduction to computational mathematics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3060",
      "UnitName": "Advanced ordinary differential equations",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3110",
      "UnitName": "Differential geometry",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3121",
      "UnitName": "Algebra and number theory",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3130",
      "UnitName": "Topology: The mathematics of shape",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3140",
      "UnitName": "Real analysis",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3150",
      "UnitName": "Algebra and number theory II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3160",
      "UnitName": "Functional analysis",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3170",
      "UnitName": "Network mathematics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3230",
      "UnitName": "Time series and random processes in linear systems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3241",
      "UnitName": "Random processes in the sciences and engineering",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3251",
      "UnitName": "Financial mathematics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3260",
      "UnitName": "Statistics of stochastic processes",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3310",
      "UnitName": "Applied mathematical modelling",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3320",
      "UnitName": "Computational linear algebra",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3360",
      "UnitName": "Fluid dynamics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3401",
      "UnitName": "Special topics in mathematics I",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH3402",
      "UnitName": "Special topics in mathematics II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4010",
      "UnitName": "Mathematics honours topic A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4020",
      "UnitName": "Mathematics honours topic B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4030",
      "UnitName": "Mathematics honours topic C",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4040",
      "UnitName": "Mathematics honours topic D",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4100",
      "UnitName": "Mathematics research studies",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH4200",
      "UnitName": "Advanced studies in mathematics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5112",
      "UnitName": "Partial differential equations in finance",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5210",
      "UnitName": "Stochastic calculus and mathematical finance",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5220",
      "UnitName": "The theory of martingales in discrete time",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5230",
      "UnitName": "Markov chains and random walks",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5510",
      "UnitName": "The mathematics of finance: From derivatives to risk",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5520",
      "UnitName": "Interest rate modelling",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5530",
      "UnitName": "Computational methods in finance",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5540",
      "UnitName": "Statistical learning in finance",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5550",
      "UnitName": "Market microstructure",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5810",
      "UnitName": "Industry research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5820",
      "UnitName": "Minor industry research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5830",
      "UnitName": "Industry placement",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MTH5840",
      "UnitName": "Minor industry placement",
      "Faculty": "sci"
    },
    {
      "UnitCode": "MVA4001",
      "UnitName": "Studio discipline A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MVA4002",
      "UnitName": "Studio discipline B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MVA4021",
      "UnitName": "Philosophies of the studio A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MVA4022",
      "UnitName": "Philosophies of the studio B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "MVA5001",
      "UnitName": "Studio project",
      "Faculty": "ada"
    },
    {
      "UnitCode": "NEH4001",
      "UnitName": "Preparing for interprofessional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NEH4012",
      "UnitName": "Interprofessional practice in community and hospital settings",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1001",
      "UnitName": "Professional and scholarly communication",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1010",
      "UnitName": "Foundations of nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1013",
      "UnitName": "Indigenous health for nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1102",
      "UnitName": "Health assessment in clinical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1105",
      "UnitName": "Foundations of leadership and professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1111",
      "UnitName": "Global health and cultural competence in nursing and midwifery practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1112",
      "UnitName": "Fundamental skills and knowledge for nursing and midwifery practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1113",
      "UnitName": "Law, ethics and leadership in nursing and midwifery",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1114",
      "UnitName": "Fundamental skills and knowledge for nursing and midwifery practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1202",
      "UnitName": "Legal issues and concepts",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR1205",
      "UnitName": "Population and socio-cultural health research",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2005",
      "UnitName": "Introduction to maternity and paediatric nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2007",
      "UnitName": "Introduction to palliative care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2106",
      "UnitName": "Integrated nursing practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2107",
      "UnitName": "Person centered mental health care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2203",
      "UnitName": "Health promotion",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2204",
      "UnitName": "Working with families across the lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2206",
      "UnitName": "Integrated nursing practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2207",
      "UnitName": "Mental health clinical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2445",
      "UnitName": "Clinical assessment in nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR2447",
      "UnitName": "Clinical concepts",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3001",
      "UnitName": "Evidence based health care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3002",
      "UnitName": "Integrated nursing practice 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3003",
      "UnitName": "Education for clinical practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3004",
      "UnitName": "Preparing for practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3005",
      "UnitName": "Chronic illness management in primary care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3006",
      "UnitName": "Diversity in healthcare practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3009",
      "UnitName": "Transition to professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3022",
      "UnitName": "Integrated nursing practice 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3106",
      "UnitName": "Introduction to high acuity nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR3204",
      "UnitName": "Integrated community care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR4401",
      "UnitName": "Clinical honours thesis 1: Applied research methods and skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR4402",
      "UnitName": "Clinical honours thesis 2: Framing a research proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR4403",
      "UnitName": "Clinical honours thesis 3: Conducting a research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR4404",
      "UnitName": "Clinical honours thesis 4: Analysing and reporting research",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5002",
      "UnitName": "Contemporary nursing practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5003",
      "UnitName": "Contemporary nursing practice 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5004",
      "UnitName": "Contemporary nursing practice 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5008",
      "UnitName": "Cognitive behavioural therapy for mental health professionals",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5011",
      "UnitName": "Contemporary nursing in context 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5022",
      "UnitName": "Contemporary nursing in context 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5033",
      "UnitName": "Contemporary nursing in context 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5100",
      "UnitName": "Research Project in Nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5101",
      "UnitName": "Research Project in Nursing (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5111",
      "UnitName": "Contemporary nursing practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5112",
      "UnitName": "Nursing practice in the Australian healthcare context",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5113",
      "UnitName": "Nursing in the Australian context",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5200",
      "UnitName": "Advanced Studies in Nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5201",
      "UnitName": "Advanced Studies in Nursing (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5202",
      "UnitName": "Nursing informatics",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5203",
      "UnitName": "Palliative care practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5204",
      "UnitName": "Education in health care practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5208",
      "UnitName": "Therapeutic medication management",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5209",
      "UnitName": "Education program development",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5210",
      "UnitName": "Disaster and emergency nursing management",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5214",
      "UnitName": "Advanced therapeutic interaction in nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5215",
      "UnitName": "Mental health nursing concepts and practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5217",
      "UnitName": "Advanced paediatric nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5218",
      "UnitName": "Advanced clinical decision making",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5219",
      "UnitName": "Advanced clinical practice for nurse practitioner",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5227",
      "UnitName": "Integrated mental health care",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5301",
      "UnitName": "Nursing practice for older persons",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5315",
      "UnitName": "Advanced practice in context",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5325",
      "UnitName": "Clinical leadership in nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5326",
      "UnitName": "Quality, safety and clinical governance in nursing and health care management",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5327",
      "UnitName": "Management and leadership of professional nursing practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5405",
      "UnitName": "Explorations in child and family nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5411",
      "UnitName": "Advanced clinical assessment and diagnostic reasoning",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5703",
      "UnitName": "Advanced pathophysiology and health assessment 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5704",
      "UnitName": "Advanced pathophysiology and health assessment 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5707",
      "UnitName": "Applications of Intensive Care Nursing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5833",
      "UnitName": "Refugee health and wellbeing",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5844",
      "UnitName": "Health promotion and education",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5923",
      "UnitName": "Critical care nursing 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5924",
      "UnitName": "Critical care nursing 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5925",
      "UnitName": "Emergency nursing 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5926",
      "UnitName": "Emergency nursing 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5927",
      "UnitName": "Advanced medical/surgical nursing practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUR5928",
      "UnitName": "Advanced medical/surgical nursing practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1001",
      "UnitName": "Personal and professional perspectives in nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1002",
      "UnitName": "Evaluating the evidence: Nutrition and population health",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1010",
      "UnitName": "Human nutrition: An introduction to nutrients",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1011",
      "UnitName": "Human nutrition: An introduction to nutrients",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1101",
      "UnitName": "Science foundations",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT1102",
      "UnitName": "Food science",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT2001",
      "UnitName": "Health across the lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT2002",
      "UnitName": "Applied research methods in nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT2102",
      "UnitName": "Food: Science, composition and skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT2103",
      "UnitName": "Integrated science systems",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3001",
      "UnitName": "Evidence based nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3002",
      "UnitName": "Nutrition, activity and health in chronic diseases",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3003",
      "UnitName": "Sport and exercise nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3004",
      "UnitName": "Nutrition controversies",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3005",
      "UnitName": "Nutrition assessment",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3006",
      "UnitName": "Food and the environment",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3007",
      "UnitName": "Work placement",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT3082",
      "UnitName": "Public health nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT4001",
      "UnitName": "Foundations of dietetic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT4111",
      "UnitName": "Research skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT4121",
      "UnitName": "Honours research project 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT4122",
      "UnitName": "Honours research project 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5001",
      "UnitName": "Introduction to dietetic skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5002",
      "UnitName": "Practice and research in public health nutrition",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5003",
      "UnitName": "Dietetic practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5004",
      "UnitName": "Food for dietetic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5005",
      "UnitName": "Dietetic practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "NUT5006",
      "UnitName": "Practice and research in dietetics",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC1011",
      "UnitName": "Professional issues",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC1012",
      "UnitName": "Occupational science",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC1021",
      "UnitName": "Psychology for occupational therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC1022",
      "UnitName": "Foundations of occupational therapy practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC1032",
      "UnitName": "Development across the lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC2011",
      "UnitName": "Occupational performance, capabilities and components",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC2020",
      "UnitName": "Enabling occupation: Performance challenges 1A",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC2022",
      "UnitName": "Skills for evidence-based practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3000",
      "UnitName": "Enabling occupation: Fieldwork experience 1B",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3031",
      "UnitName": "Enabling occupation: Performance challenges 1B",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3041",
      "UnitName": "Skills for evidence-based practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3052",
      "UnitName": "Enabling occupation 2: Performance challenges in population health",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3061",
      "UnitName": "Health promotion in occupational therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3062",
      "UnitName": "Participation community practice 1: Development",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC3072",
      "UnitName": "Occupational therapy honours research project 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4010",
      "UnitName": "Foundations of occupational therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4020",
      "UnitName": "Humans as occupational beings",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4030",
      "UnitName": "Occupational performance, capabilities and components",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4040",
      "UnitName": "Enabling occupation 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4071",
      "UnitName": "Participatory community practice 2: Implementation",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4081",
      "UnitName": "Transition to practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4082",
      "UnitName": "Advanced professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4091",
      "UnitName": "Occupational therapy honours research project 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4092",
      "UnitName": "Transition to practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4111",
      "UnitName": "Introduction to hand therapy theory, principles, and practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4121",
      "UnitName": "Adaptive and assistive technology",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4131",
      "UnitName": "Assessment of children: Methods, policy, ethics and issues",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC4141",
      "UnitName": "Occupational therapy for children with a disability and their families",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5050",
      "UnitName": "Enabling occupation 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5060",
      "UnitName": "Enabling occupation 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5070",
      "UnitName": "Transition to practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5080",
      "UnitName": "Advanced professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5111",
      "UnitName": "Advanced hand therapy theory, principles, and practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5121",
      "UnitName": "Advanced adaptive and assistive technology",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5131",
      "UnitName": "Advanced assessment of children: Methods, policy, ethics and issues",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5141",
      "UnitName": "Occupational therapy for children with a disability and their families",
      "Faculty": "med"
    },
    {
      "UnitCode": "OCC5161",
      "UnitName": "Human occupation and health",
      "Faculty": "med"
    },
    {
      "UnitCode": "OHS1000",
      "UnitName": "Introduction to art and design health and safety",
      "Faculty": "ada"
    },
    {
      "UnitCode": "OHS1001",
      "UnitName": "Gippsland Centre of art and design health and safety",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PAC1001",
      "UnitName": "Introduction to Pharmacy",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2151",
      "UnitName": "Biochemistry and molecular biology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2161",
      "UnitName": "Cell function, communication and pathology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2171",
      "UnitName": "Basis of drug action I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2182",
      "UnitName": "Basis of drug action II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2232",
      "UnitName": "Drug delivery and disposition",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2331",
      "UnitName": "Pharmacists as communicators",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2342",
      "UnitName": "Pharmacy in a public health context",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC2412",
      "UnitName": "Integrated therapeutics: Introduction and cardiovascular",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3191",
      "UnitName": "Microbiology and immunology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3241",
      "UnitName": "Drug delivery, disposition and dynamics",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3252",
      "UnitName": "Drug delivery II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3351",
      "UnitName": "Context for practice I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3362",
      "UnitName": "Context for practice II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3421",
      "UnitName": "Integrated therapeutics: Respiratory and gastrointestinal disease",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3432",
      "UnitName": "Integrated therapeutics: Infectious disease",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3512",
      "UnitName": "Current aspects of pharmaceutical research",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3522",
      "UnitName": "Applied research project",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3542",
      "UnitName": "Leadership",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC3552",
      "UnitName": "Community engagement",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4261",
      "UnitName": "Drug delivery and development",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4371",
      "UnitName": "Professional experience placement program",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4382",
      "UnitName": "Context for practice III",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4441",
      "UnitName": "Integrated therapeutics: Endocrinology and renal",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4451",
      "UnitName": "Integrated therapeutics: Dermatology and pain",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4462",
      "UnitName": "Integrated therapeutics: Neurology and oncology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4472",
      "UnitName": "Integrated therapeutics: Mental Health",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAC4482",
      "UnitName": "Preparation for practice",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PAR4450",
      "UnitName": "Intensive care management of paediatric and obstetric patients",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR4470",
      "UnitName": "Intensive care paramedicine clinical practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5200",
      "UnitName": "Introduction to aeromedical and retrieval concepts",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5210",
      "UnitName": "Aeromedical and retrieval professional practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5220",
      "UnitName": "Aeromedical and retrieval clinical 1: Advanced life support/critical care",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5230",
      "UnitName": "Aeromedical and retrieval coordination",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5240",
      "UnitName": "Aeromedical retrieval rescue",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5250",
      "UnitName": "Aeromedical and retrieval clinical 2: Intensive care",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5320",
      "UnitName": "Extended care paramedicine 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5330",
      "UnitName": "Extended care paramedicine 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5400",
      "UnitName": "Principles of advanced care paramedic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5410",
      "UnitName": "Pharmacotherapy and clinical toxicology in advanced care paramedic practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5420",
      "UnitName": "Intensive care management of cardiac conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5430",
      "UnitName": "Intensive care management of respiratory conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5440",
      "UnitName": "Intensive care management of trauma and environmental conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5450",
      "UnitName": "Advanced care paramedic management of paediatric and obstetric patients",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5460",
      "UnitName": "Transition to practice in the intensive care simulated environment",
      "Faculty": "med"
    },
    {
      "UnitCode": "PAR5480",
      "UnitName": "Intensive care management of medical conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH1101",
      "UnitName": "Introduction to qualitative research",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH1102",
      "UnitName": "Introduction to communicating health",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH1103",
      "UnitName": "Introduction to health policy and politics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH1104",
      "UnitName": "Global health: Opportunities and challenges",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2001",
      "UnitName": "Foundations of epidemiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2002",
      "UnitName": "Foundations of biostatistics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2003",
      "UnitName": "Culture, society and health",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2004",
      "UnitName": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2005",
      "UnitName": "Health program planning",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2006",
      "UnitName": "Treatment and technologies",
      "Faculty": "med"
    },
    {
      "UnitCode": "PBH2107",
      "UnitName": "Public health and ethics short international program",
      "Faculty": "med"
    },
    {
      "UnitCode": "PGC5005",
      "UnitName": "Journal club",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5006",
      "UnitName": "Speciality clinical placement",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5007",
      "UnitName": "Introduction to clinical research",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5009",
      "UnitName": "Clinical research 3",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5101",
      "UnitName": "Evidence based practice",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5102",
      "UnitName": "Patient data and pharmacotherapy 1",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5103",
      "UnitName": "Patient data and pharmacotherapy 2",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5104",
      "UnitName": "Patient data and pharmacotherapy 3",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5107",
      "UnitName": "Introduction to clinical research",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5108",
      "UnitName": "Clinical research 2",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5109",
      "UnitName": "Clinical research 3",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5110",
      "UnitName": "Infectious diseases pharmacotherapy",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5113",
      "UnitName": "Dermatology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5115",
      "UnitName": "Geriatric pharmacy practice",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5116",
      "UnitName": "Geriatric disease state management",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5117",
      "UnitName": "Mental health",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5118",
      "UnitName": "Palliative care",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGC5119",
      "UnitName": "Advanced practice portfolio",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGP5011",
      "UnitName": "Applied pharmacy practice 1",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGP5012",
      "UnitName": "Applied pharmacy practice 2",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGP5014",
      "UnitName": "Clinical educator preparation",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGP5021",
      "UnitName": "Foundation practice 1",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGP5022",
      "UnitName": "Foundation practice 2",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5101",
      "UnitName": "Biology of wound healing",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5103",
      "UnitName": "Wound dressings",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5104",
      "UnitName": "Management of acute wounds",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5105",
      "UnitName": "Management of chronic wounds",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5106",
      "UnitName": "Systemic medication and wound healing",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5108",
      "UnitName": "Nutrition in wound healing",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5109",
      "UnitName": "Dermatology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5111",
      "UnitName": "Alternative therapies",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5112",
      "UnitName": "Scar management",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5123",
      "UnitName": "Management of burns",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5127",
      "UnitName": "Practical wound care training and assessment",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5201",
      "UnitName": "Principles of wound healing",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5202",
      "UnitName": "Wound assessment",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5203",
      "UnitName": "Wound management principles",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5204",
      "UnitName": "Acute and chronic wounds",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5205",
      "UnitName": "Integrated wound care practice",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5206",
      "UnitName": "The diabetes foot",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5207",
      "UnitName": "Pressure injury management",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5208",
      "UnitName": "Advanced clinical practice in wound care",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5209",
      "UnitName": "Clinical risk management and wound care",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5210",
      "UnitName": "Burns and scar management",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PGW5211",
      "UnitName": "Non-healing wounds and pain management",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHA2022",
      "UnitName": "Drugs and society",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3011",
      "UnitName": "Principles of drug action",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3021",
      "UnitName": "Drugs in health and disease",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3032",
      "UnitName": "Neuro and endocrine pharmacology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3042",
      "UnitName": "Modern drug development",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3800",
      "UnitName": "Fundamentals of toxicology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3801",
      "UnitName": "Principles of pharmacology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHA3990",
      "UnitName": "Action in pharmacology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHC5012",
      "UnitName": "Community based palliative care for health practitioners",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5100",
      "UnitName": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5101",
      "UnitName": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5200",
      "UnitName": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5201",
      "UnitName": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5301",
      "UnitName": "Preventative health and management of chronic disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5302",
      "UnitName": "Common problems in primary care",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5303",
      "UnitName": "Challenging issues in primary care",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHC5304",
      "UnitName": "Primary care across the lifespan",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1052",
      "UnitName": "Health care systems: Global and local",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1061",
      "UnitName": "Data, evidence and critical thinking in health",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1081",
      "UnitName": "Foundations of public health",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1101",
      "UnitName": "Biological bases of health and disease 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1102",
      "UnitName": "Biological bases of health and disease 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH1112",
      "UnitName": "Global health: Opportunities and challenges",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2022",
      "UnitName": "Culture, society and health",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2051",
      "UnitName": "Health program planning",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2101",
      "UnitName": "Health promotion: Global and local",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2111",
      "UnitName": "Treatments and technologies",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2141",
      "UnitName": "Analysing patterns of health and disease",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH2142",
      "UnitName": "Research methods in the health sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3001",
      "UnitName": "Health, law and ethics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3002",
      "UnitName": "Health for all in a global world",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3011",
      "UnitName": "Contemporary health challenges",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3041",
      "UnitName": "Disease prevention and control",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3061",
      "UnitName": "Health program evaluation",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3072",
      "UnitName": "Health policy and politics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH3082",
      "UnitName": "Health promotion practicum",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH4101",
      "UnitName": "Public health research proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH4102",
      "UnitName": "Contemporary and global public health issues",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHH4201",
      "UnitName": "Public health research report",
      "Faculty": "med"
    },
    {
      "UnitCode": "PHO1203",
      "UnitName": "Photography 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO1204",
      "UnitName": "Digital Imaging for Contemporary Art",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO2202",
      "UnitName": "Advanced photography",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO2204",
      "UnitName": "Video art and the moving image 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO2207",
      "UnitName": "Photographic processes",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO2208",
      "UnitName": "Photographic lighting studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO3201",
      "UnitName": "Photography and video dialogues",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO3202",
      "UnitName": "Photomedia virtual studio",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO3207",
      "UnitName": "Photomedia project 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO3208",
      "UnitName": "Photomedia project 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHO3209",
      "UnitName": "Photomedia Project 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PHR1011",
      "UnitName": "Professional Practice I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHR1012",
      "UnitName": "Professional Practice II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHR1021",
      "UnitName": "How Medicines Work I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHR1022",
      "UnitName": "How Medicines Work II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHR1031",
      "UnitName": "How the Body Works",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PHS1011",
      "UnitName": "Classical physics and relativity",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS1022",
      "UnitName": "Fields and quantum physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS1031",
      "UnitName": "Physics for the living world",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS1080",
      "UnitName": "Foundation physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS1711",
      "UnitName": "Applied physics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "PHS2061",
      "UnitName": "Quantum and thermal physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS2062",
      "UnitName": "Electromagnetism and optics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS2081",
      "UnitName": "Atomic, nuclear and condensed matter physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS2350",
      "UnitName": "Physics and astronomy introductory research project 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS2360",
      "UnitName": "Physics and astronomy introductory research project 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3031",
      "UnitName": "Foundations of contemporary physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3042",
      "UnitName": "Fundamentals of condensed matter physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3051",
      "UnitName": "Photon physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3062",
      "UnitName": "Fundamental particle physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3131",
      "UnitName": "Theoretical physics",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3142",
      "UnitName": "Theoretical physics II",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3350",
      "UnitName": "Physics and astronomy research project 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS3360",
      "UnitName": "Physics and astronomy research project 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4100",
      "UnitName": "Physics honours research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4110",
      "UnitName": "Physics honours research project - Part 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4120",
      "UnitName": "Physics honours research project - Part 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4200",
      "UnitName": "Physics honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4210",
      "UnitName": "Physics honours coursework - Part 1",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHS4220",
      "UnitName": "Physics honours coursework - Part 2",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY2011",
      "UnitName": "Neuroscience of communication, sensory and control systems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY2032",
      "UnitName": "Endocrine control systems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY2042",
      "UnitName": "Body systems physiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY2810",
      "UnitName": "Physiology of human body systems",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY2820",
      "UnitName": "Physiology of human health",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3012",
      "UnitName": "Integrative neuroscience",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3072",
      "UnitName": "Exercise physiology and metabolism",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3102",
      "UnitName": "Nutrition, metabolism and body weight",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3111",
      "UnitName": "Sensory and cognitive neuroscience",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3171",
      "UnitName": "Clinical and experimental cardiovascular physiology",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3181",
      "UnitName": "Hormones and reproduction",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PHY3990",
      "UnitName": "Action in physiology research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "PMH1011",
      "UnitName": "Mental health in the community",
      "Faculty": "med"
    },
    {
      "UnitCode": "PMM3020",
      "UnitName": "Psychology, management and marketing",
      "Faculty": "buseco"
    },
    {
      "UnitCode": "POM5001",
      "UnitName": "Perioperative management of the cardiac patient",
      "Faculty": "med"
    },
    {
      "UnitCode": "POM5002",
      "UnitName": "Acute perioperative medicine",
      "Faculty": "med"
    },
    {
      "UnitCode": "POM5003",
      "UnitName": "Organ dysfunction 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "POM5004",
      "UnitName": "Organ dysfunction 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "PPR3102",
      "UnitName": "Professional practice for interior architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PPR3103",
      "UnitName": "Project planning and professional practice for design and multimedia",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PPR3202",
      "UnitName": "Professional practice B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PPR4002",
      "UnitName": "Professional practice and business planning for design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PPR4102",
      "UnitName": "Professional practice and business planning for design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PPR5500",
      "UnitName": "Design management and entrepreneurship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1001",
      "UnitName": "The contemporary print: Etching and relief printmaking",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1411",
      "UnitName": "Printmedia practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1412",
      "UnitName": "Printmedia practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1431",
      "UnitName": "Printmedia practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1442",
      "UnitName": "Printmedia practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM1511",
      "UnitName": "Artists' Books",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2401",
      "UnitName": "Screenprinting and the contemporary poster",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2413",
      "UnitName": "Printmedia practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2414",
      "UnitName": "Printmedia practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2423",
      "UnitName": "Printmedia practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2424",
      "UnitName": "Printmedia practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM2512",
      "UnitName": "Artists' books 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM3415",
      "UnitName": "Printmedia practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PRM3416",
      "UnitName": "Printmedia practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PSC1011",
      "UnitName": "Physiology I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1012",
      "UnitName": "Physiology II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1021",
      "UnitName": "Bioorganic and medicinal chemistry I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1022",
      "UnitName": "Bioorganic and medicinal chemistry II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1031",
      "UnitName": "Physical chemistry I",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1032",
      "UnitName": "Physical chemistry II",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1041",
      "UnitName": "Scientific Inquiry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC1042",
      "UnitName": "Multi-disciplinary Pharmaceutical Science",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2011",
      "UnitName": "Biochemical pharmacology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2012",
      "UnitName": "Molecular pharmacology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2021",
      "UnitName": "Structural organic chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2031",
      "UnitName": "Analytical methods",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2041",
      "UnitName": "Biopharmaceutics",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2122",
      "UnitName": "Synthetic organic chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2132",
      "UnitName": "Introduction to spectroscopy",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2142",
      "UnitName": "Computational chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2222",
      "UnitName": "Formulation chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2232",
      "UnitName": "Colloid chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2322",
      "UnitName": "Molecular cell biology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC2332",
      "UnitName": "Diseased-focused pharmacology - Peripheral",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3041",
      "UnitName": "Applied analytical methods",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3111",
      "UnitName": "Molecular basis of drug action",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3112",
      "UnitName": "Drug discovery and development",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3121",
      "UnitName": "Advanced Synthetic organic chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3122",
      "UnitName": "Applied Medicinal Chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3131",
      "UnitName": "Analysis of drug-receptor interactions",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3132",
      "UnitName": "Medicinal Chemistry Research Placement",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3142",
      "UnitName": "Computational drug design",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3211",
      "UnitName": "Industrial Formulation",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3212",
      "UnitName": "Product Commercialisation",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3221",
      "UnitName": "Biomolecule formulation & modified release technologies",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3222",
      "UnitName": "Advanced formulation and nanotechnology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3231",
      "UnitName": "Pharmaceutical Product Manufacture",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3232",
      "UnitName": "Formulation Science Placement",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3311",
      "UnitName": "Microbiology and immunology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3321",
      "UnitName": "Disease-Focused Pharmacology CNS",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3322",
      "UnitName": "Current aspects of cancer biology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3332",
      "UnitName": "Drug Discovery Biology research placement",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3432",
      "UnitName": "Medicinal Chemistry pre-honours research project",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3532",
      "UnitName": "Formulation Science pre-honours research project",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC3632",
      "UnitName": "Drug Discovery Biology pre-honours research project",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4111",
      "UnitName": "Advanced medicinal chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4112",
      "UnitName": "Research in medicinal chemistry",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4211",
      "UnitName": "Advanced formulation science",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4212",
      "UnitName": "Research in formulation science",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4311",
      "UnitName": "Advanced drug discovery biology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4312",
      "UnitName": "Research in drug discovery biology",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4411",
      "UnitName": "Advanced medicine use and safety",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSC4412",
      "UnitName": "Research in Medicine Use and Safety",
      "Faculty": "pha"
    },
    {
      "UnitCode": "PSY1011",
      "UnitName": "Psychology 1A",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY1022",
      "UnitName": "Psychology 1B",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2031",
      "UnitName": "Developmental and biological psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2042",
      "UnitName": "Personality and social psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2051",
      "UnitName": "Research design and analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2061",
      "UnitName": "Biological psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2071",
      "UnitName": "Developmental psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY2112",
      "UnitName": "Organisational psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3032",
      "UnitName": "Abnormal psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3041",
      "UnitName": "Psychological testing, theories of ability and ethics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3051",
      "UnitName": "Perception and cognitive psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3062",
      "UnitName": "Research methods and theory",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3120",
      "UnitName": "Introduction to counselling",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3130",
      "UnitName": "Health psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3150",
      "UnitName": "Contemporary social psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3180",
      "UnitName": "Human neuropsychology: Developmental and neurodegenerative disorders",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3190",
      "UnitName": "Addiction studies",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3250",
      "UnitName": "Positive psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3270",
      "UnitName": "Neuroscience of cognition and behaviour",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3280",
      "UnitName": "The neuronal basis of consciousness",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3310",
      "UnitName": "Introduction to computational neuroscience",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY3320",
      "UnitName": "Sleep and circadian rhythms",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4032",
      "UnitName": "Abnormal psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4041",
      "UnitName": "Psychological testing and ethics",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4051",
      "UnitName": "Research design and analysis",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4062",
      "UnitName": "Research methods and theory",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4081",
      "UnitName": "Perception and cognition",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4100",
      "UnitName": "Psychology honours: Research project",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4110",
      "UnitName": "Psychology in society",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4111",
      "UnitName": "Psychology 1A",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4120",
      "UnitName": "Mental health and illness",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4122",
      "UnitName": "Psychology 1B",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4130",
      "UnitName": "Developmental psychology and clinical neuroscience",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4131",
      "UnitName": "Developmental and biological psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4140",
      "UnitName": "Introduction to counselling",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4151",
      "UnitName": "Personality and social psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4170",
      "UnitName": "Neuroscience of cognition and behaviour",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4210",
      "UnitName": "Statistics and research design for professional psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4220",
      "UnitName": "Ethical and professional issues in psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4270",
      "UnitName": "Psychological assessment and intervention",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4401",
      "UnitName": "Psychology research project: Statistics and research design for professional psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4402",
      "UnitName": "Psychology research project: Literature review",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4403",
      "UnitName": "Psychology research project: Methodology and data collection",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4404",
      "UnitName": "Psychology research project: results and discussion",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4405",
      "UnitName": "Ethical and professional issues in psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4406",
      "UnitName": "Psychological assessment and intervention",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4407",
      "UnitName": "Psychology in industry: Pathways to employment",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4408",
      "UnitName": "Perspectives in clinical and developmental neuroscience",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY4409",
      "UnitName": "21st century applications of psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY5100",
      "UnitName": "Research Project in Psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY5101",
      "UnitName": "Research Project in Psychology (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY5200",
      "UnitName": "Advanced Studies in Psychology",
      "Faculty": "med"
    },
    {
      "UnitCode": "PSY5201",
      "UnitName": "Advanced Studies in Psychology (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTG1001",
      "UnitName": "Painting introduction: materials and methods",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1025",
      "UnitName": "Painting as an interdisciplinary practice A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1026",
      "UnitName": "Painting as an interdisciplinary practice B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1511",
      "UnitName": "Painting practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1512",
      "UnitName": "Painting practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1531",
      "UnitName": "Painting practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG1542",
      "UnitName": "Painting practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2030",
      "UnitName": "Painting as an interdisciplinary practice C",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2031",
      "UnitName": "Abstraction and non-objective painting",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2032",
      "UnitName": "Painting: Installation and the expanded field",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2033",
      "UnitName": "Representational painting: Narrative and figuration",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2034",
      "UnitName": "Sound and space: Dematerialised form",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2035",
      "UnitName": "Interventions: Feminist and conceptual practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2513",
      "UnitName": "Painting practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2514",
      "UnitName": "Painting practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2523",
      "UnitName": "Painting practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG2524",
      "UnitName": "Painting practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG3515",
      "UnitName": "Painting practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTG3516",
      "UnitName": "Painting practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "PTY1011",
      "UnitName": "Physiotherapy 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY1022",
      "UnitName": "Physiotherapy 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY2000",
      "UnitName": "Honours systematic review",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY2031",
      "UnitName": "Physiotherapy 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY2042",
      "UnitName": "Physiotherapy 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3000",
      "UnitName": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3051",
      "UnitName": "Physiotherapy 5",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3162",
      "UnitName": "Physiotherapy 6A: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3262",
      "UnitName": "Physiotherapy 6B: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3362",
      "UnitName": "Physiotherapy 6C: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY3462",
      "UnitName": "Clinical placement",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4000",
      "UnitName": "Honours thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4010",
      "UnitName": "Honours systematic review",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4020",
      "UnitName": "Honours research proposal",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4030",
      "UnitName": "Honours thesis",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4171",
      "UnitName": "Physiotherapy 7A: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4172",
      "UnitName": "Physiotherapy 7B: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4281",
      "UnitName": "Physiotherapy 8A: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4282",
      "UnitName": "Physiotherapy 8B: Clinical",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY4283",
      "UnitName": "Physiotherapy 8C: Campus",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5100",
      "UnitName": "Enhancing skills in paediatric physiotherapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5101",
      "UnitName": "Advancing skills in paediatric physiotherapy: Cerebral palsy",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5102",
      "UnitName": "Advancing skills in paediatric physiotherapy: Neonates and infants",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5103",
      "UnitName": "Principles of paediatric physiotherapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5104",
      "UnitName": "Advancing skills in paediatric physiotherapy: Complex and chronic conditions",
      "Faculty": "med"
    },
    {
      "UnitCode": "PTY5105",
      "UnitName": "Advanced physiotherapy clinical skills and project",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD1012",
      "UnitName": "Radiographic science and practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD1021",
      "UnitName": "Radiologic physics and radiation protection",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD1031",
      "UnitName": "Radiologic biology 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD1061",
      "UnitName": "Radiographic science and practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD1082",
      "UnitName": "Radiologic biology 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD2001",
      "UnitName": "Medical imaging science: Radiographic principles",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD2012",
      "UnitName": "Radiographic science and practice 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD2051",
      "UnitName": "Radiographic science and practice 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD2061",
      "UnitName": "Radiologic biology 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD2092",
      "UnitName": "Radiologic biology 4 and sectional anatomy",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3002",
      "UnitName": "Medical imaging science: Computed tomography",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3004",
      "UnitName": "Neuroimaging for neuroscience research",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3042",
      "UnitName": "Medical imaging science and practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3051",
      "UnitName": "Medical imaging science and practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3061",
      "UnitName": "Medical imaging science (ultrasound)",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD3092",
      "UnitName": "Magnetic resonance imaging (physics and technology)",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4000",
      "UnitName": "Radiography and medical imaging work experience",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4070",
      "UnitName": "Research in medical imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4080",
      "UnitName": "Selected topics in medical imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4160",
      "UnitName": "Advanced medical imaging and clinical skills",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4500",
      "UnitName": "Multislice CT and evidence based practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4501",
      "UnitName": "MRI imaging and evidence based practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4502",
      "UnitName": "Principles of general radiography image interpretation",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4503",
      "UnitName": "Magnetic resonance imaging: Physics, instrumentation and safety",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4504",
      "UnitName": "Magnetic resonance imaging: Musculo-skeletal system",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4505",
      "UnitName": "Magnetic resonance imaging: Head, spine abdomen and pelvis",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD4506",
      "UnitName": "Magnetic resonance imaging: Advanced imaging techniques",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5105",
      "UnitName": "Pathology for advanced medical imaging practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5106",
      "UnitName": "Medical imaging data management and health informatics",
      "Faculty": "it"
    },
    {
      "UnitCode": "RAD5107",
      "UnitName": "Hybrid and molecular imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5108",
      "UnitName": "Advanced general radiography image interpretation 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5109",
      "UnitName": "Advanced general radiography image interpretation 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5110",
      "UnitName": "Advanced CT and clinical decision making 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5111",
      "UnitName": "Advanced CT and clinical decision making 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5201",
      "UnitName": "Emergency image interpretation 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RAD5202",
      "UnitName": "Emergency image interpretation 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RSE4111",
      "UnitName": "Numerical modelling",
      "Faculty": "eng"
    },
    {
      "UnitCode": "RSE4112",
      "UnitName": "Advanced rock mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "RTP4101",
      "UnitName": "Professional issues in radiation therapy 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP4102",
      "UnitName": "Professional issues in radiation therapy 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP4103",
      "UnitName": "Specialised techniques in radiation therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP5101",
      "UnitName": "Patient care and assessment in radiation therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP5102",
      "UnitName": "Current issues in radiation therapy and oncology",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP5103",
      "UnitName": "Contemporary approaches to radiation therapy of the breast",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTP5104",
      "UnitName": "Advanced imaging for radiation therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS2001",
      "UnitName": "Professional practice in radiation therapy",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS4101",
      "UnitName": "Radiation therapy science 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS4102",
      "UnitName": "Radiation therapy science 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS4103",
      "UnitName": "Radiation therapy science 3",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5101",
      "UnitName": "Radiation therapy science 4",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5102",
      "UnitName": "Radiation therapy science 5",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5103",
      "UnitName": "Radiation therapy science 6",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5104",
      "UnitName": "Radiation therapy science 7",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5105",
      "UnitName": "Radiation therapy science 8",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5110",
      "UnitName": "Radiation therapy science and practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "RTS5120",
      "UnitName": "Radiation therapy science and practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "RUR5100",
      "UnitName": "Research Project in Rural Health",
      "Faculty": "med"
    },
    {
      "UnitCode": "RUR5101",
      "UnitName": "Research Project in Rural Health (Part time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "RUR5200",
      "UnitName": "Advanced Studies in Rural Health",
      "Faculty": "med"
    },
    {
      "UnitCode": "RUR5201",
      "UnitName": "Advanced Studies in Rural Health (Part time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCI1020",
      "UnitName": "Introduction to statistical reasoning",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI1200",
      "UnitName": "Humans, evolution and modern society",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI1300",
      "UnitName": "Climate change: From science to society",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI1501",
      "UnitName": "Impact through science 1A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI1502",
      "UnitName": "Impact through science 1B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI1800",
      "UnitName": "The sustainable planet",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI2010",
      "UnitName": "Scientific practice and communication",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI2015",
      "UnitName": "Scientific practice and communication (advanced)",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI2501",
      "UnitName": "Impact through science 2A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI2502",
      "UnitName": "Impact through science 2B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3501",
      "UnitName": "Impact through science 3A",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3502",
      "UnitName": "Impact through science 3B",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3716",
      "UnitName": "Laboratory and workplace management",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3790",
      "UnitName": "Science in action communication project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3800",
      "UnitName": "Science internship",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3910",
      "UnitName": "Schools science project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3920",
      "UnitName": "Science industry placement",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI3990",
      "UnitName": "Science in action research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4100",
      "UnitName": "Science honours project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4110",
      "UnitName": "Science honours project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4120",
      "UnitName": "Science honours project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4210",
      "UnitName": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4220",
      "UnitName": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4230",
      "UnitName": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4240",
      "UnitName": "Science honours coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4501",
      "UnitName": "Impact through science 4A: Research",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCI4502",
      "UnitName": "Impact through science 4B: Professional practice",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCM5100",
      "UnitName": "MSc Prelim research project",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCM5200",
      "UnitName": "MSc Prelim coursework",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SCS5100",
      "UnitName": "Research Project in Medical Science",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5101",
      "UnitName": "Research Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5200",
      "UnitName": "Advanced Studies in Medical Science",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5201",
      "UnitName": "Advanced Project in Medical Science (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5300",
      "UnitName": "Research Project in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5301",
      "UnitName": "Research Project in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5400",
      "UnitName": "Advanced Studies in Health Sciences",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCS5401",
      "UnitName": "Advanced Studies in Health Sciences (Part-time)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SCU1021",
      "UnitName": "Contemporary casting",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU1022",
      "UnitName": "Sculptural construction: Woodworking and welding",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU1611",
      "UnitName": "Sculpture practice and theory 1A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU1612",
      "UnitName": "Sculpture practice and theory 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU1631",
      "UnitName": "Sculpture practice and theory 1B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU1642",
      "UnitName": "Sculpture practice and theory 2B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2021",
      "UnitName": "Advanced moulding and casting",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2022",
      "UnitName": "Site specificity: Sculptural and installation interventions",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2613",
      "UnitName": "Sculpture practice and theory 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2614",
      "UnitName": "Sculpture practice and theory 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2623",
      "UnitName": "Sculpture practice and theory 3B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU2624",
      "UnitName": "Sculpture practice and theory 4B",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU3615",
      "UnitName": "Sculpture practice and theory 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SCU3616",
      "UnitName": "Sculpture practice and theory 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "SON4000",
      "UnitName": "Physics of medical ultrasound and instrumentation",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON4010",
      "UnitName": "Embryology, anatomy and pathophysiology",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5000",
      "UnitName": "Ultrasound research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5020",
      "UnitName": "Sonographic professional skills and sonography of the breast and thyroid",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5021",
      "UnitName": "Sonographic abdominal imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5022",
      "UnitName": "Sonographic imaging of the reproductive system",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5023",
      "UnitName": "Obstetric sonography",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5024",
      "UnitName": "Musculoskeletal, neonatal and paediatric sonography",
      "Faculty": "med"
    },
    {
      "UnitCode": "SON5025",
      "UnitName": "Sonographic vascular and postoperative imaging",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH3001",
      "UnitName": "Health and health care practices for communities",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH5000",
      "UnitName": "Health and health care practices for communities",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH5001",
      "UnitName": "Research methods for health",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH5003",
      "UnitName": "Designing and conducting health research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH5016",
      "UnitName": "Interprofessional practice in communities",
      "Faculty": "med"
    },
    {
      "UnitCode": "SRH5032",
      "UnitName": "Applied research for health practitioners",
      "Faculty": "med"
    },
    {
      "UnitCode": "STA1010",
      "UnitName": "Statistical methods for science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "STA2216",
      "UnitName": "Data analysis for science",
      "Faculty": "sci"
    },
    {
      "UnitCode": "SWK1011",
      "UnitName": "Introduction to human services practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK2001",
      "UnitName": "Introduction to the Australian welfare state",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK2110",
      "UnitName": "Social welfare and the law",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK2140",
      "UnitName": "Social welfare and practice with communities",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3080",
      "UnitName": "Planning for supervised professional practice placement 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3180",
      "UnitName": "Supervised professional practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3220",
      "UnitName": "Social work in a globalised world",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3230",
      "UnitName": "Social work research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3310",
      "UnitName": "Social welfare practice and research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3400",
      "UnitName": "Critical social work 1: Individuals and families (context and practice)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3410",
      "UnitName": "Critical social work 2: Community work, context and practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK3440",
      "UnitName": "Leadership in social work and human services",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4001",
      "UnitName": "Honours research methods",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4002",
      "UnitName": "Honours project seminar",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4003",
      "UnitName": "Social work honours dissertation",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4030",
      "UnitName": "Human rights, legal and ethics knowledge for social work practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4031",
      "UnitName": "Working with complexity",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4032",
      "UnitName": "Working with complexity: Honours",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4060",
      "UnitName": "Planning for supervised professional practice placement 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4400",
      "UnitName": "Critical social work 3: Group work and community engagement (context and practice)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4401",
      "UnitName": "Critical social work 4: Individual, health and society (context and practice)",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4450",
      "UnitName": "Social policy and social justice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4451",
      "UnitName": "Social policy and social justice: Honours",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWK4560",
      "UnitName": "Supervised professional practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5003",
      "UnitName": "Planning for supervised professional practice placement 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5008",
      "UnitName": "Planning for supervised professional practice placement 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5100",
      "UnitName": "Social work: Leading sustainable change",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5101",
      "UnitName": "Human rights, law and ethics contexts for social work practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5102",
      "UnitName": "Critical social work 1: Frameworks for practice with children and families",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5103",
      "UnitName": "Supervised professional practice 1",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5104",
      "UnitName": "Critical social work 2: Frameworks for practice in health and mental health",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5105",
      "UnitName": "Social work practice and research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5106",
      "UnitName": "Critical social work 3: Community engagement group project",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5108",
      "UnitName": "Supervised professional practice 2",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5109",
      "UnitName": "Critical social work 4: Social policy, social change and community practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5110",
      "UnitName": "Advances in direct social work practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5111",
      "UnitName": "Leadership in social work and human services",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5112",
      "UnitName": "Research for social work practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5120",
      "UnitName": "Criminology and social work",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5160",
      "UnitName": "The child in society: Promoting children's wellbeing and responding to child maltreatment",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5170",
      "UnitName": "Applied research study",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5180",
      "UnitName": "Management of human resources in the social services",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5190",
      "UnitName": "Social work research",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5200",
      "UnitName": "Health and social work",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5220",
      "UnitName": "Longevity and social work",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5241",
      "UnitName": "Mental health practice",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5250",
      "UnitName": "Clinical supervision: Becoming a professional developer",
      "Faculty": "med"
    },
    {
      "UnitCode": "SWM5260",
      "UnitName": "Gender, climate change and social sustainability",
      "Faculty": "med"
    },
    {
      "UnitCode": "TAD1101",
      "UnitName": "Introduction to visual culture in art design and architecture",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD1102",
      "UnitName": "Modernism and the avant-gardes",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2102",
      "UnitName": "Post-war practices 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2109",
      "UnitName": "Constructing art in Australia: colonialism to postcolonialism 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2138",
      "UnitName": "Space, Place and Society",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2203",
      "UnitName": "History and criticism of interiors and furniture 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2206",
      "UnitName": "Ornament, meaning and design 2A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2207",
      "UnitName": "Popular culture and contemporary communication 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD2214",
      "UnitName": "Critical issues in design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3102",
      "UnitName": "Post-war practices 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3105",
      "UnitName": "Contemporary International Art since 1989",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3109",
      "UnitName": "Constructing art in Australia: colonialism to postcolonialism 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3203",
      "UnitName": "History and criticism of interiors and furniture 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3206",
      "UnitName": "Ornament, meaning and design 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD3214",
      "UnitName": "Contemporary discourse in design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4503",
      "UnitName": "Advanced art theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4504",
      "UnitName": "Art theory research seminar",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4523",
      "UnitName": "Design research methods and seminar",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4542",
      "UnitName": "Research seminar in design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4793",
      "UnitName": "Issues for multimedia practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD4794",
      "UnitName": "Multimedia and society",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TAD5500",
      "UnitName": "Exegesis",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN1002",
      "UnitName": "Design and the avant-garde",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN2001",
      "UnitName": "Sociologies of design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN2002",
      "UnitName": "Communication design theory",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN3001",
      "UnitName": "Research for design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN3002",
      "UnitName": "Design strategy and professional practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN3003",
      "UnitName": "Design criticism",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN4001",
      "UnitName": "Research methods in industrial design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TDN4401",
      "UnitName": "Human factors for interaction design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "TRC2001",
      "UnitName": "Introduction to systems engineering",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC2200",
      "UnitName": "Thermo-fluids and power systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC2201",
      "UnitName": "Mechanics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC3000",
      "UnitName": "Mechatronics project II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC3200",
      "UnitName": "Dynamical systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC3500",
      "UnitName": "Sensors and artificial perception",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC3600",
      "UnitName": "Modelling and control",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC3801",
      "UnitName": "Mechatronics and manufacturing",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4000",
      "UnitName": "Mechatronics final year project I",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4001",
      "UnitName": "Mechatronics final year project II",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4002",
      "UnitName": "Professional practice",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4100",
      "UnitName": "Bio-interfacing devices",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4800",
      "UnitName": "Robotics",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4900",
      "UnitName": "Real time embedded systems",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRC4901",
      "UnitName": "Computation intelligence and AI",
      "Faculty": "eng"
    },
    {
      "UnitCode": "TRM4001",
      "UnitName": "Introduction to clinical trials",
      "Faculty": "med"
    },
    {
      "UnitCode": "TRM4002",
      "UnitName": "Translational research",
      "Faculty": "med"
    },
    {
      "UnitCode": "TRM6001",
      "UnitName": "Introduction to clinical trials",
      "Faculty": "med"
    },
    {
      "UnitCode": "TRM6002",
      "UnitName": "Translational research",
      "Faculty": "med"
    },
    {
      "UnitCode": "VAM4010",
      "UnitName": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VAM4021",
      "UnitName": "Beyond the museum: Institutions and insurrections",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VAM5010",
      "UnitName": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VAM5021",
      "UnitName": "Beyond the Museum: Institutions and Insurrections",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM1001",
      "UnitName": "Visual communication",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM1002",
      "UnitName": "Multimedia imaging (moving image studies)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM4029",
      "UnitName": "Designing multimedia systems",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM4101",
      "UnitName": "Introduction to multimedia imaging",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM4601",
      "UnitName": "Design principles for multimedia 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM4602",
      "UnitName": "Design principles for multimedia 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM4604",
      "UnitName": "Information design for multimedia",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCM5001",
      "UnitName": "Multimedia Product Development",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO1104",
      "UnitName": "Graphic design studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO1203",
      "UnitName": "Introduction to contemporary illustration",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO1302",
      "UnitName": "Typography 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO1303",
      "UnitName": "The language of graphic design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2003",
      "UnitName": "Graphic design studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2004",
      "UnitName": "Graphic design studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2204",
      "UnitName": "Illustration as design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2205",
      "UnitName": "Illustration for editorial",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2304",
      "UnitName": "Typography 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2402",
      "UnitName": "Advertising design 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2409",
      "UnitName": "Methods of production",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO2904",
      "UnitName": "Image, communication and location",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3005",
      "UnitName": "Graphic design studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3006",
      "UnitName": "Graphic design studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3206",
      "UnitName": "Conceptual illustration",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3207",
      "UnitName": "The business of illustration",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3305",
      "UnitName": "Digital font design",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3307",
      "UnitName": "Typography 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO3403",
      "UnitName": "Advertising design 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO4107",
      "UnitName": "Major project (visual communication) part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO4108",
      "UnitName": "Major project (visual communication) part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VCO4204",
      "UnitName": "Illustration",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS1111",
      "UnitName": "Visual arts studio 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS1112",
      "UnitName": "Visual arts studio 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS2103",
      "UnitName": "Visual arts studio 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS2104",
      "UnitName": "Visual arts studio 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS2113",
      "UnitName": "Visual arts studio 3A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS2114",
      "UnitName": "Visual arts studio 4A",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS3101",
      "UnitName": "Co-operative Work Experience",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS3105",
      "UnitName": "Visual arts studio 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS3106",
      "UnitName": "Visual arts studio 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS4001",
      "UnitName": "Project studies (visual arts honours)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VIS4002",
      "UnitName": "Major project (visual arts honours)",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR1001",
      "UnitName": "Visual Practices 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR1002",
      "UnitName": "Visual Practices 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR1011",
      "UnitName": "Visual practices 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR1012",
      "UnitName": "Visual practices 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR1113",
      "UnitName": "Research practices",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR2001",
      "UnitName": "Visual Practices 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR2002",
      "UnitName": "Visual Practices 4",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR2011",
      "UnitName": "Research practices advanced",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR2012",
      "UnitName": "Professional practice",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR3001",
      "UnitName": "Visual Practices 5",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR3002",
      "UnitName": "Visual Practices 6",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR3011",
      "UnitName": "Professional practice advanced",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VPR3012",
      "UnitName": "Visual practices 3",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4002(A)",
      "UnitName": "Minor thesis part 1",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4002(B)",
      "UnitName": "Minor thesis part 2",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4012",
      "UnitName": "Visual culture and its theories",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4022",
      "UnitName": "Beyond the museum",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4025",
      "UnitName": "Visual culture internship",
      "Faculty": "ada"
    },
    {
      "UnitCode": "VSA4076",
      "UnitName": "Australian postmodernism",
      "Faculty": "ada"
    }
  ];
  $('.ui.search')
    .search({
      source : content,
      searchFields   : [
        'UnitCode', 'UnitName'
      ],
      searchFullText: false,
      minCharacters: 3
    })  ;
});
