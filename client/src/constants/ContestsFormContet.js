const LOGO={
    fields:[
        {
            type:"text",
            name:"titleOfContest",
            component:"renderField",
            placeholder:"e.g. Need a name for Social Networking website",
            label:"Title of your contest"
        },
        {
            type:"text",
            name:"whatDoesCompanyOrBusinessDo",
            component:"renderField",
            placeholder:"e.g. Marketing Platform for Small Businesses",
            label:"What does your company or business do?"
        },
        {
            type:"text",
            name:"nameOfCompanyBusiness",
            component:"renderField",
            placeholder:"e.g. Marketing Platform for Small Businesses",
            label:"Name of the company / business?"
        },
        {
            type:"text",
            name:"websiteUrl",
            component:"renderField",
            placeholder:"e.g. http://www.google.com/",
            label:"Your website url (if you have one)?"
        },
        {
            type:"text",
            name:"TypeOfIndustry",
            component:"renderFieldSelect",
            placeholder:"Select Your Industry",
            label:"Type of Industry",
            isMulti:true,
            options:[
                { value: "accounting", label: "Accounting" },
                { value: 'A&G-bikeRentals', label: 'Activity & Games - Bike Rentals' },
                { value: 'A&G-boating ', label: 'Activity & Games - Boating' },
                { value: 'A&G-dancing&A ', label: 'Activity & Games - Dancing & Aerobics' },
                { value: 'A&G-gun&R ', label: 'Activity & Games - Gun & Rifle Ranges' },
                { value: 'A&G-gymnastics ', label: 'Activity & Games - Gymnastics' },
                { value: 'A&G-horseRacing ', label: 'Activity & Games - Horse Racing' },
                { value: 'A&G-horsebackRiding ', label: 'Activity & Games - Horseback Riding' },
                { value: 'A&G-lakes ', label: 'Activity & Games - Lakes' },
                { value: 'A&G-other ', label: 'Activity & Games - Other' },
            ]
        },
        {
            type:"text",
            name:"targetCustomers",
            component:"renderField",
            placeholder:"i.e. designers, developers",
            label:"Who are your target customers?"
        },
        {
            type:"text",
            name:"visualBrandStyle",
            component:"renderFieldSelect",
            //defaultValue: { value: '3d', label: '3 days' },
            isMulti:true,
            //placeholder:"Select Contest time duration",
            label:"Select visual style of your brand",
            options:[
                { value: 'techy', label: 'Techy' },
                { value: 'fun', label: 'Fun' },
                { value: 'fancy', label: 'Fancy' },
                { value: 'minimal', label: 'Minimal' },
                { value: 'brickMortar', label: 'Brick & Mortar' },
                { value: 'photoBased', label: 'Photo-based' },
            ]
        },
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
        },*/
    ],
    required:['titleOfContest','TypeOfIndustry','nameOfCompanyBusiness','whatDoesCompanyOrBusinessDo']
};

const NAME={
    fields:[

    ]
};

const TAGLINE_OR_SLOGAN={
    fields:[

    ]
};

module.exports =
    {
        LOGO,
        NAME,
        TAGLINE_OR_SLOGAN,
    };
//options