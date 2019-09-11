import {TYPE_OF_INDUSTRY_OPTIONS} from './ContestsFormContet';

const TYPE_OF_INDUSTRY_OPTIONS_FOR_FILTER = [
	{ value: "All Industries", label: "All Industries" },
	 ...TYPE_OF_INDUSTRY_OPTIONS,
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
				name:"id",
				component:"renderField",
			},

			{
				type:"text",
				name:"Industries",
				component:"renderFieldSelect",
				defaultValue: { value: "All", label: "All Industries" },
				isMulti:false,
				options:TYPE_OF_INDUSTRY_OPTIONS_FOR_FILTER
			},
			{
				type:"text",
				name:"Categories",
				component:"renderFieldSelect",
				defaultValue: { value: "All", label: "All Categories" },
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
				name:"Active",
				component:"renderFieldCheckbox",
				label:"Active"
			},

			{
				type:"checkbox",
				name:"Closed",
				component:"renderFieldCheckbox",
				label:"Closed",
			},
		]
	},
];

export default {
	FILTERS
};