const FIRST_PAGE={
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
            options:[
                { value: 'accounting', label: 'Accounting' },
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
    ]
};

const SECOND_PAGE={
    fields:[

    ]
};

const THIRD_PAGE={
    fields:[

    ]
};

module.exports =
    {
        FIRST_PAGE,
        SECOND_PAGE,
        THIRD_PAGE,
    };
//options