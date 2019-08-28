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
            name:"typeOfIndustry",
            component:"renderFieldSelect",
            placeholder:"Select Your Industry",
            label:"Select the industry associated with your venture",
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
            name:"inputNameOfTheirVenture",
            component:"renderField",
            placeholder:"e.g. Google",
            label:"Input name of their venture"
        },
        {
            type:"text",
            name:"whatVentureDoes",
            component:"renderField",
            placeholder:"e.g. Marketing Platform for Small Businesses",
            label:"What your venture does "
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
            isMulti:true,
            placeholder:"Select visual style",
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
        {
            type:"file",
            name:"uploadFile",
            component:"renderFileInput",
            label:"Do you have any documents that might be helpful (Optional)?"
        },

    ],
    required:['titleOfContest','typeOfIndustry','inputNameOfTheirVenture','whatVentureDoes',"visualBrandStyle"]
};

const NAME={
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
            name:"typeOfName",
            component:"renderFieldSelect",
            placeholder:"Select Type",
            label:"Select the type of name you are looking for",
            isMulti:false,
            options:[
                { value: "company", label: "Company" },
                { value: 'product', label: 'Product' },
                { value: 'project', label: 'Project' },
            ]
        },
        {
            type:"text",
            name:"typeOfIndustry",
            component:"renderFieldSelect",
            placeholder:"Select Your Industry",
            label:"Select the industry associated with your venture",
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
            name:"whatVentureDoes",
            component:"renderField",
            placeholder:"e.g. Marketing Platform for Small Businesses",
            label:"What your venture does "
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
            name:"preferenceForName",
            component:"renderFieldSelect",
            isMulti:true,
            placeholder:"Select preference(s)",
            label:"Select preference(s) for name style",
            options:[
                { value: 'techy', label: 'Techy' },
                { value: 'fun', label: 'Fun' },
                { value: 'fancy', label: 'Fancy' },
                { value: 'minimal', label: 'Minimal' },
                { value: 'brickMortar', label: 'Brick & Mortar' },
                { value: 'photoBased', label: 'Photo-based' },
            ]
        },
        {
            type:"file",
            name:"uploadFile",
            component:"renderFileInput",
            label:"Do you have any documents that might be helpful (Optional)?"
        },
    ],
    required:['titleOfContest','typeOfName','typeOfIndustry','whatVentureDoes',"targetCustomers"]
};

const TAGLINE_OR_SLOGAN={
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
            name:"typeOfIndustry",
            component:"renderFieldSelect",
            placeholder:"Select Your Industry",
            label:"Select the industry associated with your venture",
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
            name:"inputNameOfTheirVenture",
            component:"renderField",
            placeholder:"e.g. Google",
            label:"Input name of their venture"
        },
        {
            type:"text",
            name:"whatVentureDoes",
            component:"renderField",
            placeholder:"e.g. Marketing Platform for Small Businesses",
            label:"What your venture does "
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
            name:"preferenceForTagline",
            component:"renderFieldSelect",
            isMulti:true,
            placeholder:"Select preference(s)",
            label:"Select preference(s) for name style",
            options:[
                { value: 'classic', label: 'Classic' },
                { value: 'fun', label: 'Fun' },
                { value: 'powerful', label: 'Powerful' },
                { value: 'descriptive', label: 'Descriptive' },
                { value: 'modern', label: 'Modern' },
                { value: 'any', label: 'Any' },
            ]
        },
        {
            type:"file",
            name:"uploadFile",
            component:"renderFileInput",
            label:"Do you have any documents that might be helpful (Optional)?"
        },

    ],
    required:['titleOfContest','typeOfIndustry','inputNameOfTheirVenture','whatVentureDoes',"targetCustomers","preferenceForTagline"]
};

module.exports =
    {
        LOGO,
        NAME,
        TAGLINE_OR_SLOGAN,
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