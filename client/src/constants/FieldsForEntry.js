const FIELDS= {
    NAME: {
        type: "text",
        name: "nameEntry",
        component: "renderField",
        placeholder: "e.g. Need a name for Social Networking website",
        label: "Title of your contest"
    },
    TAGLINE_OR_SLOGAN: {
        type: "text",
        name: "taglineOrSloganEntry",
        component: "renderField",
        placeholder: "e.g. Need a name for Social Networking website",
        label: "Title of your contest"
    },
    LOGO: {
        type: "file",
        name: "logoEntry",
        component: "renderFileInput",
        label: "Please upload file here",
        multiple:false
    },
};

module.exports =
    {
        FIELDS
    };