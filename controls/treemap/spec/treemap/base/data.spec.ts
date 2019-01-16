/**
 * Sports data
 */
/* tslint:disable */
export let Metals: Object[] = [
    { valuePath: "Swimming" ,legendVisibility: true, fill: "#DEB887", Sport: "Swimming", Gold: 16, GameImage: 'Swimming.svg', ItemHeight: "180px", ItemWidth: '180px' },
    { valuePath: "Swimming" ,legendVisibility: false, fill: "#5F9EA0", Sport: "Athletics", Gold: 13, GameImage: 'Athletics.svg', ItemHeight: "70px", ItemWidth: '70px' },
    { valuePath: "Gymnastics" ,legendVisibility: true, fill: "#DC143C", Sport: "Gymnastics", Gold: 4, GameImage: 'Gymnastics.svg', ItemHeight: "80px", ItemWidth: '80px' },
    { valuePath: "Gymnastics" ,legendVisibility: false, fill: "#FF8C00", Sport: "Cycling", Gold: 2, GameImage: 'Cycling.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { valuePath: "Wrestling" ,legendVisibility: true, fill: "#E9967A", Sport: "Wrestling", Gold: 2, GameImage: 'Wrestling.svg', ItemHeight: "60px", ItemWidth: '50px' },
    { valuePath: "Basketball" ,legendVisibility: true, fill: "#483D8B", Sport: "Basketball", Gold: 2, GameImage: 'Basketball.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { valuePath: "Boxing" ,legendVisibility: true, fill: "#DAA520", Sport: "Boxing", Gold: 1, GameImage: 'Boxing.svg', ItemHeight: "40px", ItemWidth: '30px' },
    { valuePath: "Tennis" ,legendVisibility: true, fill: "#CD5C5C", Sport: "Tennis", Gold: 1, GameImage: 'Tennis.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { valuePath: "Judo" ,legendVisibility: false, fill: "#556B2F", Sport: "Judo", Gold: 1, GameImage: 'Judo.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { valuePath: "Rowing" ,legendVisibility: false, fill: "#8FBC8F", Sport: "Rowing", Gold: 1, GameImage: 'Rowing.svg', ItemHeight: "40px", ItemWidth: '40px' },
];
export let sportsData: Object[] = [
    {
        Country: 'US', GameName: 'Swimming', GoldMedals: 16, SilverMedals: 9, BronzeMedals: 6,
        TotalMedals: 31, scale: 2, size: '106', GameImage: 'Swimming.png'
    },
    {
        Country: 'US', GameName: 'Track and Field', GoldMedals: 9, SilverMedals: 13, BronzeMedals: 7,
        TotalMedals: 29, scale: 1.5, size: '106', GameImage: 'TrackAndField.png'
    },
    {
        Country: 'US', GameName: 'Gymnastics', GoldMedals: 3, SilverMedals: 1, BronzeMedals: 2,
        TotalMedals: 6, size: '80', scale: 1.2, GameImage: 'Gymnastics.png'
    },
    {
        Country: 'US', GameName: 'Boxing', GoldMedals: 1, SilverMedals: 0, BronzeMedals: 1,
        TotalMedals: 2, size: '38', scale: 0.5, GameImage: 'Boxing.png'
    },
    {
        Country: 'US', GameName: 'Cycling', GoldMedals: 1, SilverMedals: 2, BronzeMedals: 1,
        TotalMedals: 4, size: '58', scale: 0.8, GameImage: 'Cycling.png'
    },
    {
        Country: 'US', GameName: 'Shooting', GoldMedals: 3, SilverMedals: 0, BronzeMedals: 1,
        TotalMedals: 4, size: '46', scale: 0.8, GameImage: 'Shooting.png'
    },
    {
        Country: 'US', GameName: 'Wrestling', GoldMedals: 2, SilverMedals: 0, BronzeMedals: 2,
        TotalMedals: 4, size: '64', scale: 1, GameImage: 'Wrestling.png'
    },
    {
        Country: 'US', GameName: 'Archery', GoldMedals: 0, SilverMedals: 1, BronzeMedals: 0,
        TotalMedals: 1, size: '38', scale: 0.6, GameImage: 'Archery.png'
    },
    {
        Country: 'US', GameName: 'Soccer', GoldMedals: 1, SilverMedals: 0, BronzeMedals: 0,
        TotalMedals: 1, size: '38', scale: 0.6, GameImage: 'Soccer.png'
    },
    {
        Country: 'US', GameName: 'Diving', GoldMedals: 1, SilverMedals: 1, BronzeMedals: 2,
        TotalMedals: 4, size: '46', scale: 0.7, GameImage: 'Diving.png'
    }
];

/**
 * tree map data
 */
/* tslint disable */
export let jobData: Object[] = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 55 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Windows', EmployeesCount: 175 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Web', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Accounts', EmployeesCount: 60 },

    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 43 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Windows', EmployeesCount: 125 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Web', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', EmployeesCount: 45 },

    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Windows', EmployeesCount: 65 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Web', EmployeesCount: 27 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', EmployeesCount: 33 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', EmployeesCount: 55 },

    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'TestersTestersTestersTesters TestersTestersTestersTes', EmployeesCount: 45 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Windows', EmployeesCount: 96 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Web', EmployeesCount: 55 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', EmployeesCount: 30 },

    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Windows', EmployeesCount: 65 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Developers', JobRole: 'Web', EmployeesCount: 27 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', EmployeesCount: 50 }

];

export let hierarchicalData: Object[] = [
    {
        'Continent': 'North America',
        'Country': [
            {
                'name': 'United States',
                'value': 90,
                'State': [
                    {
                        'name': 'california',
                        'value': 30
                    },
                    {
                        'name': 'florida',
                        'value': 40
                    }
                ]
            },
            {
                'name': 'Canada',
                'value': 113,
                'State': [
                    {
                        'name': 'Alberta',
                        'value': 20
                    },
                    {
                        'name': 'Manitoba',
                        'value': 50
                    }
                ]
            },
            {
                'name': 'Mexico',
                'value': 78
            }
        ]
    },
    {
        'Continent': 'Europe',
        'Country': [
            {
                'name': 'France',
                'value': 42,
                'State': [
                    {
                        'name': 'Burgundy',
                        'value': 60
                    },
                    {
                        'name': 'Alsace',
                        'value': 30
                    }
                ]
            },
            {
                'name': 'Spain',
                'value': 28,
                'State': [
                    {
                        'name': 'Cantabria',
                        'value': 50
                    },
                    {
                        'name': 'Biscay',
                        'value': 80
                    }
                ]
            }
        ]
    },
    {
        'Continent': 'Africa',
        'Country': [
            {
                'name': 'Egypt',
                'value': 22,
                'State': [
                    {
                        'name': 'Cairo',
                        'value': 40
                    },
                    {
                        'name': 'Giza',
                        'value': 70
                    }
                ]
            },
            {
                'name': 'Congo',
                'value': 38
            }
        ]
    },
    {
        'Continent': 'Asia',
        'Country': [
            {
                'name': 'India',
                'value': 92,
                'State': [
                    {
                        'name': 'Tamil nadu',
                        'value': 80
                    },
                    {
                        'name': 'Mumbai',
                        'value': 70
                    }
                ]
            },
            {
                'name': 'China',
                'value': 68
            }
        ]
    },
    {
        'Continent': 'South America',
        'Country': [
            {
                'name': 'Brazil',
                'value': 42,
                'State': [
                    {
                        'name': 'Bahia',
                        'value': 120
                    },
                    {
                        'name': 'Parana',
                        'value': 30
                    }
                ]
            },
            {
                'name': 'Argentina',
                'value': 28
            }
        ]
    },
    {
        'Continent': 'Australia',
        'Country': [
            {
                'name': 'Australia',
                'value': 121,
            },
            {
                'name': 'New Zealand',
                'value': 24,
                'State': [
                    {
                        'name': 'Wellington',
                        'value': 50
                    },
                    {
                        'name': 'Auckland',
                        'value': 80
                    }
                ]
            }
        ]
    }
];
/**
 * Metals Data 
 */
//tslint:disable
export let Country_Population = [
    { Country: "China", Population: 1388232693 },

    { Country: "India", Population: 1342512706 },

    { Country: "United States of America", Population: 326474013 },

    { Country: "Indonesia", Population: 263510146 },

    { Country: "Brazil", Population: 211243220 },

    { Country: "Pakistan", Population: 196744376 },

    { Country: "Nigeria", Population: 191835936 },

    { Country: "Bangladesh", Population: 164827718 },

    { Country: "Russian Federation", Population: 143375006 },

    { Country: "Mexico", Population: 130222815 },

    { Country: "Japan", Population: 126045211 },

    { Country: "Ethiopia", Population: 104344901 },

    { Country: "Philippines", Population: 103796832 },

    { Country: "Viet Nam", Population: 95414640 },

    { Country: "Egypt", Population: 95215102 },

    { Country: "D.R. Congo", Population: 82242685 },

    { Country: "Iran", Population: 80945718 },

    { Country: "Germany", Population: 80636124 },

    { Country: "Turkey", Population: 80417526 },

    { Country: "Thailand", Population: 68297547 },

    { Country: "United Kingdom", Population: 65511098 },

    { Country: "France", Population: 64938716 },

    { Country: "Italy", Population: 59797978 },

    { Country: "Tanzania", Population: 56877529 },

    { Country: "South Africa", Population: 55436360 },

    { Country: "Myanmar", Population: 54836483 },

    { Country: "Republic of Korea", Population: 50704971 },

    { Country: "Colombia", Population: 49067981 },

    { Country: "Kenya", Population: 48466928 },

    { Country: "Spain", Population: 46070146 },

    { Country: "Ukraine", Population: 44405055 },

    { Country: "Argentina", Population: 44272125 },

    { Country: "Sudan", Population: 42166323 },

    { Country: "Uganda", Population: 41652938 },

    { Country: "Algeria", Population: 41063753 },

    { Country: "Iraq", Population: 38654287 },

    { Country: "Poland", Population: 38563573 },

    { Country: "Canada", Population: 36626083 },

    { Country: "Morocco", Population: 35241418 },

    { Country: "Afghanistan", Population: 34169169 },

    { Country: "Saudi Arabia", Population: 32742664 },

    { Country: "Peru", Population: 32166473 },

    { Country: "Venezuela", Population: 31925705 },

    { Country: "Malaysia", Population: 31164177 },

    { Country: "Uzbekistan", Population: 30690914 },

    { Country: "Mozambique", Population: 29537914 },

    { Country: "Nepal", Population: 29187037 },

    { Country: "Ghana", Population: 28656723 },

    { Country: "Yemen", Population: 28119546 },

    { Country: "Angola", Population: 26655513 },

    { Country: "Madagascar", Population: 25612972 },

    { Country: "Dem Peoples Republic of Korea", Population: 25405296 },

    { Country: "Australia", Population: 24641662 },

    { Country: "Cameroon", Population: 24513689 },

    { Country: "Côte dIvoire", Population: 23815886 },

    { Country: "Taiwan", Population: 23405309 },

    { Country: "Niger", Population: 21563607 },

    { Country: "Sri Lanka", Population: 20905335 },

    { Country: "Romania", Population: 19237513 },

    { Country: "Burkina Faso", Population: 19173322 },

    { Country: "Syrian Arab Republic", Population: 18906907 },

    { Country: "Mali", Population: 18689966 },

    { Country: "Chile", Population: 18313495 },

    { Country: "Malawi", Population: 18298679 },

    { Country: "Kazakhstan", Population: 18064470 },

    { Country: "Zambia", Population: 17237931 },

    { Country: "Netherlands", Population: 17032845 },

    { Country: "Guatemala", Population: 17005497 },

    { Country: "Ecuador", Population: 16625776 },

    { Country: "Zimbabwe", Population: 16337760 },

    { Country: "Cambodia", Population: 16076370 },

    { Country: "Senegal", Population: 16054275 },

    { Country: "Chad", Population: 14965482 },

    { Country: "Guinea", Population: 13290659 },

    { Country: "South Sudan", Population: 13096190 },

    { Country: "Rwanda", Population: 12159586 },

    { Country: "Burundi", Population: 11936481 },

    { Country: "Tunisia", Population: 11494760 },

    { Country: "Benin", Population: 11458611 },

    { Country: "Belgium", Population: 11443830 },

    { Country: "Somalia", Population: 11391962 },

    { Country: "Cuba", Population: 11390184 },

    { Country: "Bolivia", Population: 11052864 },

    { Country: "Haiti", Population: 10983274 },

    { Country: "Greece", Population: 10892931 },

    { Country: "Dominican Republic", Population: 10766564 },

    { Country: "Czech Republic", Population: 10555130 },

    { Country: "Portugal", Population: 10264797 },

    { Country: "Azerbaijan", Population: 9973697 },

    { Country: "Sweden", Population: 9920624 },

    { Country: "Hungary", Population: 9787905 },

    { Country: "Belarus", Population: 9458535 },

    { Country: "United Arab Emirates", Population: 9397599 },

    { Country: "Tajikistan", Population: 8858115 },

    { Country: "Serbia", Population: 8776940 },

    { Country: "Austria", Population: 8592400 },

    { Country: "Switzerland", Population: 8454083 },

    { Country: "Israel", Population: 8323248 },

    { Country: "Honduras", Population: 8304677 },

    { Country: "Papua New Guinea", Population: 7933841 },

    { Country: "Jordan", Population: 7876703 },

    { Country: "Togo", Population: 7691915 },

    { Country: "China Hong Kong SAR", Population: 7401941 },

    { Country: "Bulgaria", Population: 7045259 },

    { Country: "Laos", Population: 7037521 },

    { Country: "Paraguay", Population: 6811583 },

    { Country: "Sierra Leone", Population: 6732899 },

    { Country: "Libya", Population: 6408742 },

    { Country: "Nicaragua", Population: 6217796 },

    { Country: "El Salvador", Population: 6167147 },

    { Country: "Kyrgyzstan", Population: 6124945 },

    { Country: "Lebanon", Population: 6039277 },

    { Country: "Singapore", Population: 5784538 },

    { Country: "Denmark", Population: 5711837 },

    { Country: "Finland", Population: 5541274 },

    { Country: "Turkmenistan", Population: 5502586 },

    { Country: "Eritrea", Population: 5481906 },

    { Country: "Slovakia", Population: 5432157 },

    { Country: "Norway", Population: 5330800 },

    { Country: "Central African Republic", Population: 5098826 },

    { Country: "State of Palestine", Population: 4928225 },

    { Country: "Costa Rica", Population: 4905626 },

    { Country: "Congo", Population: 4866243 },

    { Country: "Ireland", Population: 4749153 },

    { Country: "Oman", Population: 4741305 },

    { Country: "Liberia", Population: 4730437 },

    { Country: "New Zealand", Population: 4604871 },

    { Country: "Mauritania", Population: 4266448 },

    { Country: "Croatia", Population: 4209815 },

    { Country: "Kuwait", Population: 4099932 },

    { Country: "Republic of Moldova", Population: 4054640 },

    { Country: "Panama", Population: 4051284 },

    { Country: "Georgia", Population: 3972532 },

    { Country: "Bosnia and Herzegovina", Population: 3792759 },

    { Country: "Puerto Rico", Population: 3679086 },

    { Country: "Uruguay", Population: 3456877 },

    { Country: "Mongolia", Population: 3051900 },

    { Country: "Armenia", Population: 3031670 },

    { Country: "Albania", Population: 2911428 },

    { Country: "Lithuania", Population: 2830582 },

    { Country: "Jamaica", Population: 2813285 },

    { Country: "Namibia", Population: 2568569 },

    { Country: "Botswana", Population: 2343981 },

    { Country: "Qatar", Population: 2338085 },

    { Country: "Lesotho", Population: 2185159 },

    { Country: "Gambia", Population: 2120418 },

    { Country: "TFYR Macedonia", Population: 2083308 },

    { Country: "Slovenia", Population: 2071252 },

    { Country: "Latvia", Population: 1944565 },

    { Country: "Guinea-Bissau", Population: 1932871 },

    { Country: "Gabon", Population: 1801232 },

    { Country: "Bahrain", Population: 1418895 },

    { Country: "Trinidad and Tobago", Population: 1369157 },

    { Country: "Swaziland", Population: 1320356 },

    { Country: "Estonia", Population: 1305755 },

    { Country: "Mauritius", Population: 1281353 },

    { Country: "Timor-Leste", Population: 1237251 },

    { Country: "Cyprus", Population: 1187575 },

    { Country: "Djibouti", Population: 911382 },

    { Country: "Fiji", Population: 902547 },

    { Country: "Equatorial Guinea", Population: 894464 },

    { Country: "Réunion", Population: 873356 },

    { Country: "Comoros", Population: 825920 },

    { Country: "Bhutan", Population: 792877 },

    { Country: "Guyana", Population: 774407 },

    { Country: "Montenegro", Population: 626250 },

    { Country: "China Macao SAR", Population: 606384 },

    { Country: "Solomon Islands", Population: 606215 },

    { Country: "Western Sahara", Population: 596021 },

    { Country: "Luxembourg", Population: 584103 },

    { Country: "Suriname", Population: 552112 },

    { Country: "Cabo Verde", Population: 533468 },

    { Country: "Guadeloupe", Population: 472462 },

    { Country: "Brunei Darussalam", Population: 434448 },

    { Country: "Malta", Population: 420521 },

    { Country: "Bahamas", Population: 397164 },

    { Country: "Martinique", Population: 396071 },

    { Country: "Maldives", Population: 375867 },

    { Country: "Belize", Population: 374651 },

    { Country: "Iceland", Population: 334303 },

    { Country: "French Polynesia", Population: 288685 },

    { Country: "Barbados", Population: 285744 },

    { Country: "French Guiana", Population: 282761 },

    { Country: "Vanuatu", Population: 276331 },

    { Country: "New Caledonia", Population: 269736 },

    { Country: "Mayotte", Population: 253068 },

    { Country: "Sao Tome and Principe", Population: 198481 },

    { Country: "Samoa", Population: 195743 },

    { Country: "Saint Lucia", Population: 187768 },

    { Country: "Guam", Population: 174214 },

    { Country: "Channel Islands", Population: 165235 },

    { Country: "Curaçao", Population: 159987 },

    { Country: "Kiribati", Population: 116405 },

    { Country: "Saint Vincent and the Grenadines", Population: 109895 },

    { Country: "Grenada", Population: 107850 },

    { Country: "Tonga", Population: 107797 },

    { Country: "United States Virgin Islands", Population: 106574 },

    { Country: "Micronesia (Fed. States of)", Population: 105566 },

    { Country: "Aruba", Population: 104588 },

    { Country: "Seychelles", Population: 97539 },

    { Country: "Antigua and Barbuda", Population: 93659 },
];
export let CarSales: object[] = [
    { "color": "#DEB887", Continent: "China", Company: "Volkswagen", Sales: 3005994 },
    { "color": "#DEB887", Continent: "China", Company: "General Motors", Sales: 1230044 },
    { "color": "#DEB887", Continent: "China", Company: "Honda", Sales: 1197023 },
    { "color": "#5F9EA0", Continent: "United States", Company: "General Motors", Sales:3042775  },
    { "color": "#5F9EA0", Continent: "United States", Company: "Ford", Sales:2599193  },
    { "color": "#5F9EA0", Continent: "United States", Company: "Toyota", Sales:2449587  },
    { "color": "#DC143C", Continent: "Japan",Company: "Toyota", Sales:1527977  },
    { "color": "#DC143C", Continent: "Japan", Company: "Honda", Sales:706982 },
    { "color": "#DC143C", Continent: "Japan", Company: "Suzuki", Sales:623041  },
    { "color": "#FF8C00", Continent: "Germany",Company: "Volkswagen", Sales:655977  },
    { "color": "#FF8C00", Continent: "Germany", Company: "Mercedes", Sales:310845  },
    { "color": "#FF8C00", Continent: "Germany", Company: "BMW", Sales:261931  },
    { "color": "#E9967A", Continent: "United Kingdom", Company: "Ford ", Sales:319442  },
	{ "color": "#E9967A", Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
    { "color": "#E9967A", Continent: "United Kingdom", Company: "Volkswagen", Sales:206994  },
    { "color": "#483D8B", Continent: "India", Company: "Maruti Suzuki", Sales:1443654  },
    { "color": "#483D8B", Continent: "India", Company: "Hyundai", Sales:476241  },
    { "color": "#483D8B", Continent: "India", Company: "Mahindra", Sales:205041  },
    { "color": "#DAA520", Continent: "France", Company: "Renault", Sales:408183 },
    { "color": "#DAA520", Continent: "France", Company: "Peugeot", Sales:336242 },
    { "color": "#DAA520", Continent: "France", Company: "Citroen", Sales:194986  },
    { "color": "#CD5C5C", Continent: "Brazil", Company: "Flat Chrysler", Sales:368842  },
    { "color": "#CD5C5C", Continent: "Brazil", Company: "General Motors", Sales: 348351 },
    { "color": "#CD5C5C", Continent: "Brazil", Company: "Volkswagen", Sales: 245895 },
    { "color": "#556B2F", Continent: "Italy", Company: "Flat Chrysler", Sales:386260  },
    { "color": "#556B2F", Continent: "Italy", Company: "Volkswagen", Sales: 138984 },
    { "color": "#556B2F", Continent: "Italy", Company: "Ford", Sales: 125144 },
    { "color": "#8FBC8F", Continent: "Canada", Company: "Ford", Sales:  278011},
    { "color": "#8FBC8F", Continent: "Canada", Company: "FCA", Sales:305086 },
    { "color": "#8FBC8F", Continent: "Canada", Company: "GM", Sales: 266884 },       
];