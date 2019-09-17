// const TYPE_OF_INDUSTRY_OPTIONS = [
//     { value: "accounting", label: "Accounting" },
//     { value: 'A&G-bikeRentals', label: 'Activity & Games - Bike Rentals' },
//     { value: 'A&G-boating ', label: 'Activity & Games - Boating' },
//     { value: 'A&G-dancing&A ', label: 'Activity & Games - Dancing & Aerobics' },
//     { value: 'A&G-gun&R ', label: 'Activity & Games - Gun & Rifle Ranges' },
//     { value: 'A&G-gymnastics ', label: 'Activity & Games - Gymnastics' },
//     { value: 'A&G-horseRacing ', label: 'Activity & Games - Horse Racing' },
//     { value: 'A&G-horsebackRiding ', label: 'Activity & Games - Horseback Riding' },
//     { value: 'A&G-lakes ', label: 'Activity & Games - Lakes' },
//     { value: 'A&G-other ', label: 'Activity & Games - Other' },
// ];
//
// const VISUAL_BRAND_STYLE_OPTIONS=
// [
//     { value: 'techy', label: 'Techy' },
//     { value: 'fun', label: 'Fun' },
//     { value: 'fancy', label: 'Fancy' },
//     { value: 'minimal', label: 'Minimal' },
//     { value: 'brickMortar', label: 'Brick & Mortar' },
//     { value: 'photoBased', label: 'Photo-based' },
// ];
//
// const PREFERENCE_FOR_NAME_OPTIONS=
//     [
//         { value: 'techy', label: 'Techy' },
//         { value: 'fun', label: 'Fun' },
//         { value: 'fancy', label: 'Fancy' },
//         { value: 'minimal', label: 'Minimal' },
//         { value: 'brickMortar', label: 'Brick & Mortar' },
//         { value: 'photoBased', label: 'Photo-based' },
//     ];
//
// const PREFERENCE_FOR_TAGLINE_OPTIONS=
//     [
//         { value: 'classic', label: 'Classic' },
//         { value: 'fun', label: 'Fun' },
//         { value: 'powerful', label: 'Powerful' },
//         { value: 'descriptive', label: 'Descriptive' },
//         { value: 'modern', label: 'Modern' },
//         { value: 'any', label: 'Any' },
//     ];
//
// const TYPE_OF_NAME_OPTIONS=
//     [
//         { value: "company", label: "Company" },
//         { value: 'product', label: 'Product' },
//         { value: 'project', label: 'Project' },
//     ];

const TYPE_OF_INDUSTRY_OPTIONS = [
    {value: "Accounting", label: "Accounting"},
    {value: 'Activity & Games - Bike Rentals', label: 'Activity & Games - Bike Rentals'},
    {value: 'Activity & Games - Boating', label: 'Activity & Games - Boating'},
    {value: 'Activity & Games - Dancing & Aerobics', label: 'Activity & Games - Dancing & Aerobics'},
    {value: 'Activity & Games - Gun & Rifle Ranges ', label: 'Activity & Games - Gun & Rifle Ranges'},
    {value: 'Activity & Games - Gymnastics', label: 'Activity & Games - Gymnastics'},
    {value: 'Activity & Games - Horse Racing', label: 'Activity & Games - Horse Racing'},
    {value: 'Activity & Games - Horseback Riding', label: 'Activity & Games - Horseback Riding'},
    {value: 'Activity & Games - Lakes', label: 'Activity & Games - Lakes'},
    {value: 'Activity & Games - Other', label: 'Activity & Games - Other'},
];

const VISUAL_BRAND_STYLE_OPTIONS =
    [
        {value: 'Techy', label: 'Techy'},
        {value: 'Fun', label: 'Fun'},
        {value: 'Fancy', label: 'Fancy'},
        {value: 'Minimal', label: 'Minimal'},
        {value: 'Brick & Mortar', label: 'Brick & Mortar'},
        {value: 'Photo-based', label: 'Photo-based'},
    ];

const PREFERENCE_FOR_NAME_OPTIONS =
    [
        {value: 'Techy', label: 'Techy'},
        {value: 'Fun', label: 'Fun'},
        {value: 'Fancy', label: 'Fancy'},
        {value: 'Minimal', label: 'Minimal'},
        {value: 'Brick & Mortar', label: 'Brick & Mortar'},
        {value: 'Photo-based', label: 'Photo-based'},
    ];

const PREFERENCE_FOR_TAGLINE_OPTIONS =
    [
        {value: 'Classic', label: 'Classic'},
        {value: 'Fun', label: 'Fun'},
        {value: 'Powerful', label: 'Powerful'},
        {value: 'Descriptive', label: 'Descriptive'},
        {value: 'Modern', label: 'Modern'},
        {value: 'Any', label: 'Any'},
    ];

const TYPE_OF_NAME_OPTIONS =
    [
        {value: "Company", label: "Company"},
        {value: 'Product', label: 'Product'},
        {value: 'Project', label: 'Project'},
    ];


const LOGO = {
    fields: [
        {
            type: "text",
            name: "titleOfContest",
            component: "renderField",
            placeholder: "e.g. Need a name for Social Networking website",
            label: "Title of your contest"
        },
        {
            type: "text",
            name: "typeOfIndustry",
            component: "renderFieldSelect",
            placeholder: "Select Your Industry",
            label: "Select the industry associated with your venture",
            isMulti: true,
            options: TYPE_OF_INDUSTRY_OPTIONS
        },
        {
            type: "text",
            name: "inputNameOfTheirVenture",
            component: "renderField",
            placeholder: "e.g. Google",
            label: "Input name of their venture"
        },
        {
            type: "text",
            name: "whatVentureDoes",
            component: "renderField",
            placeholder: "e.g. Marketing Platform for Small Businesses",
            label: "What your venture does "
        },
        {
            type: "text",
            name: "targetCustomers",
            component: "renderField",
            placeholder: "i.e. designers, developers",
            label: "Who are your target customers?"
        },
        {
            type: "text",
            name: "visualBrandStyle",
            component: "renderFieldSelect",
            isMulti: true,
            placeholder: "Select visual style",
            label: "Select visual style of your brand",
            options: VISUAL_BRAND_STYLE_OPTIONS,
        },
        {
            type: "file",
            name: "uploadFile",
            component: "renderFileInput",
            label: "Do you have any documents that might be helpful (Optional)?",
            multiple: true
        },

    ],
    required: ['titleOfContest', 'typeOfIndustry', 'inputNameOfTheirVenture', 'whatVentureDoes', "visualBrandStyle"]
};

const NAME = {
    fields: [
        {
            type: "text",
            name: "titleOfContest",
            component: "renderField",
            placeholder: "e.g. Need a name for Social Networking website",
            label: "Title of your contest"
        },
        {
            type: "text",
            name: "typeOfName",
            component: "renderFieldSelect",
            placeholder: "Select Type",
            label: "Select the type of name you are looking for",
            isMulti: false,
            options: TYPE_OF_NAME_OPTIONS,
        },
        {
            type: "text",
            name: "typeOfIndustry",
            component: "renderFieldSelect",
            placeholder: "Select Your Industry",
            label: "Select the industry associated with your venture",
            isMulti: true,
            options: TYPE_OF_INDUSTRY_OPTIONS,
        },
        {
            type: "text",
            name: "whatVentureDoes",
            component: "renderField",
            placeholder: "e.g. Marketing Platform for Small Businesses",
            label: "What your venture does "
        },
        {
            type: "text",
            name: "targetCustomers",
            component: "renderField",
            placeholder: "i.e. designers, developers",
            label: "Who are your target customers?"
        },
        {
            type: "text",
            name: "preferenceForName",
            component: "renderFieldSelect",
            isMulti: true,
            placeholder: "Select preference(s)",
            label: "Select preference(s) for name style",
            options: PREFERENCE_FOR_NAME_OPTIONS,
        },
        {
            type: "file",
            name: "uploadFile",
            component: "renderFileInput",
            label: "Do you have any documents that might be helpful (Optional)?",
            multiple: true
        },
    ],
    required: ['titleOfContest', 'typeOfName', 'typeOfIndustry', 'whatVentureDoes', "targetCustomers"]
};

const TAGLINE_OR_SLOGAN = {
    fields: [
        {
            type: "text",
            name: "titleOfContest",
            component: "renderField",
            placeholder: "e.g. Need a name for Social Networking website",
            label: "Title of your contest"
        },
        {
            type: "text",
            name: "typeOfIndustry",
            component: "renderFieldSelect",
            placeholder: "Select Your Industry",
            label: "Select the industry associated with your venture",
            isMulti: true,
            options: TYPE_OF_INDUSTRY_OPTIONS
        },
        {
            type: "text",
            name: "inputNameOfTheirVenture",
            component: "renderField",
            placeholder: "e.g. Google",
            label: "Input name of their venture"
        },
        {
            type: "text",
            name: "whatVentureDoes",
            component: "renderField",
            placeholder: "e.g. Marketing Platform for Small Businesses",
            label: "What your venture does "
        },
        {
            type: "text",
            name: "targetCustomers",
            component: "renderField",
            placeholder: "i.e. designers, developers",
            label: "Who are your target customers?"
        },
        {
            type: "text",
            name: "preferenceForTagline",
            component: "renderFieldSelect",
            isMulti: true,
            placeholder: "Select preference(s)",
            label: "Select preference(s) for name style",
            options: PREFERENCE_FOR_TAGLINE_OPTIONS,
        },
        {
            type: "file",
            name: "uploadFile",
            component: "renderFileInput",
            label: "Do you have any documents that might be helpful (Optional)?",
            multiple: true
        },

    ],
    required: ['titleOfContest', 'typeOfIndustry', 'inputNameOfTheirVenture', 'whatVentureDoes', "targetCustomers", "preferenceForTagline"]
};

const ARRAY_OF_OPTIONS = {
    'preferenceForTagline': PREFERENCE_FOR_TAGLINE_OPTIONS,
    'typeOfIndustry': TYPE_OF_INDUSTRY_OPTIONS,
    'preferenceForName': PREFERENCE_FOR_NAME_OPTIONS,
    'typeOfName': TYPE_OF_NAME_OPTIONS,
    'visualBrandStyle': VISUAL_BRAND_STYLE_OPTIONS
};

module.exports =
    {
        LOGO,
        NAME,
        TAGLINE_OR_SLOGAN,
        TYPE_OF_INDUSTRY_OPTIONS,
        VISUAL_BRAND_STYLE_OPTIONS,
        PREFERENCE_FOR_NAME_OPTIONS,
        PREFERENCE_FOR_TAGLINE_OPTIONS,
        TYPE_OF_NAME_OPTIONS,
        ARRAY_OF_OPTIONS
    };


/* {
          type:"text",
          name:"contestDuration",
          component:"renderFieldSelect",
          defaultValue: { value: '3d', label: '3 days' },
          isMulti:false,
          //placeholder:"Select Contest time duration",
          label:"Set up contest duration",
          options:[
              { value: '3d', label: '3 days' },
              { value: '5d', label: '5 days' },
              { value: '7d', label: '7 days' },
              { value: '10d', label: '10 days' },
              { value: '12d', label: '12 days' },
          ]
      },

       required:['titleOfContest','typeOfIndustry','whatVentureDoes',"targetCustomers",'typeOfName']

       required:['titleOfContest','typeOfIndustry','inputNameOfTheirVenture','whatVentureDoes',"targetCustomers","preferenceForTagline"]

       required:['titleOfContest','typeOfIndustry','inputNameOfTheirVenture','whatVentureDoes',"visualBrandStyle"]

      */