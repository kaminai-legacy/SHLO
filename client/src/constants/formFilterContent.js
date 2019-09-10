const TYPE_OF_INDUSTRY_OPTIONS = [
	{ value: "All Industries", label: "All Industries" },
	{ value: "Accounting", label: "Accounting" },
	{ value: 'Activity & Games - Bike Rentals', label: 'Activity & Games - Bike Rentals' },
	{ value: 'Activity & Games - Boating', label: 'Activity & Games - Boating' },
	{ value: 'Activity & Games - Dancing & Aerobics', label: 'Activity & Games - Dancing & Aerobics' },
	{ value: 'Activity & Games - Gun & Rifle Ranges ', label: 'Activity & Games - Gun & Rifle Ranges' },
	{ value: 'Activity & Games - Gymnastics', label: 'Activity & Games - Gymnastics' },
	{ value: 'Activity & Games - Horse Racing', label: 'Activity & Games - Horse Racing' },
	{ value: 'Activity & Games - Horseback Riding', label: 'Activity & Games - Horseback Riding' },
	{ value: 'Activity & Games - Lakes', label: 'Activity & Games - Lakes' },
	{ value: 'Activity & Games - Other', label: 'Activity & Games - Other' },
];

const TYPE_OF_CATEGORY_OPTIONS = [
	{ value: "All Categories", label: "All Categories" },
	{ value: "Naming only", label: "Naming only" },
	{ value: "Logo only", label: "Logo only" },
	{ value: "Tagline only", label: "Tagline only" },
];


const FILTERS=[
	{
		title:'Filter Result',
		fields:[

			{
				title:"By Contest Id",
				type:"text",
				name:"contestId",
				component:"renderField",
			},

			{
				type:"text",
				name:"typeOfIndustry",
				component:"renderFieldSelect",
				defaultValue: { value: "All Industries", label: "All Industries" },
				isMulti:false,
				options:TYPE_OF_INDUSTRY_OPTIONS
			},
			{
				type:"text",
				name:"typeOfCategory",
				component:"renderFieldSelect",
				defaultValue: { value: "All Categories", label: "All Categories" },
				isMulti:false,
				options:TYPE_OF_CATEGORY_OPTIONS
			},

		]
	},
	{
		title:'By Status',
		fields:[

			{
				type:"checkbox",
				name:"contestIsActive",
				component:"renderFieldCheckbox",
				placeholder:"e.g. Need a name for Social Networking website",
				label:"Active"
			},

			{
				type:"checkbox",
				name:"contestIsClosed",
				component:"renderFieldCheckbox",
				placeholder:"All Industries",
				label:"Closed",
				isMulti:false,
				options:TYPE_OF_INDUSTRY_OPTIONS
			},
		]
	},
];

module.exports={
	FILTERS
};