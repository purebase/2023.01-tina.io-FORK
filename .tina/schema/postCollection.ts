import {Collection} from "tinacms";

export const postCollection: Collection = {
    name: 'post',
    label: 'Blog Posts',
    path: 'content/blog',
    format: 'md',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
            list: false,
            ui: {
                validate: (value) => {
                    if (value?.length > 70) {
                        return 'Title can not be more then 70 characters long'
                    }
                },
            },
        },
        {
            // note: default to current date/time
            type: 'datetime',
            name: 'date',
            label: 'Date Created',
        },
        {
            // note: this should be a hidden field that auto-updates
            type: 'datetime',
            name: 'last_edited',
            label: 'Last Edited',
        },
        {
            // TODO create an authors collection and make this a relation field
            type: 'string',
            name: 'author',
            label: 'Author',
        },
        {
            type: 'reference',
            name: 'prev',
            label: 'Previous Post',
            description:
                '(Optional) link to an earlier post at the bottom of this one',
            collections: ['post'],
        },
        {
            type: 'reference',
            name: 'next',
            label: 'Next Post',
            description:
                '(Optional) link to a later post at the bottom of this one',
            collections: ['post'],
        },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
                {
                    name: 'Youtube',
                    label: 'Youtube Embed',
                    fields: [
                        {
                            type: 'string',
                            name: 'embedSrc',
                            label: 'Embed URL',
                        },
                    ],
                },
                {
                    name: 'Iframe',
                    label: 'Embeded an Iframe',
                    fields: [
                        { name: 'iframeSrc', type: 'string' },
                        {
                            name: 'height',
                            type: 'number',
                            label: 'Height',
                            description: 'The hight of the iframe (in px) ',
                        },
                    ],
                },
                {
                    name: 'CreateAppCta',
                    label: '"Create Tina App" Call-to-action',
                    fields: [
                        {
                            type: 'string',
                            name: 'ctaText',
                            label: 'Button Text',
                        },
                        {
                            type: 'string',
                            name: 'cliText',
                            label: 'CLI Command Example',
                        },
                    ],
                },
                {
                    name: 'Callout',
                    label: 'Callout',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            label: 'Title',
                        },
                        {
                            type: 'string',
                            name: 'description',
                            label: 'Description',
                        },
                        {
                            type: 'string',
                            name: 'url',
                            label: 'URL',
                        },
                        {
                            type: 'string',
                            name: 'buttonText',
                            label: 'Button Text',
                        },
                    ],
                },
                {
                    name: 'Codesandbox',
                    label: 'Codesandbox embed',
                    fields: [
                        {
                            type: 'string',
                            name: 'embedSrc',
                            label: 'Embed URL',
                        },
                        {
                            type: 'string',
                            name: 'title',
                            label: 'A11y Title',
                        },
                    ],
                },
                {
                    name: 'Diagram',
                    label: 'Diagram',
                    fields: [
                        {
                            type: 'string',
                            name: 'src',
                        },
                        {
                            type: 'string',
                            name: 'alt',
                        },
                    ],
                },
                {
                    name: 'CustomFieldComponentDemo',
                    label: 'Field Component Demo [do not use]',
                    fields: [{ type: 'string', name: 'test' }],
                },
            ],
        },
    ],
};