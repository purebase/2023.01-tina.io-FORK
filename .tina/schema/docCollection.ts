import {Collection} from "tinacms";

export const docCollection: Collection = {
    name: 'doc',
    label: 'Docs',
    path: 'content/docs',
    format: 'md',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
        },
        {
            // note: this should be a hidden field that auto-updates
            type: 'datetime',
            name: 'last_edited',
            label: 'Last Edited',
        },
        {
            name: 'prev',
            label: 'Prev',
            type: 'string',
        },
        {
            name: 'next',
            label: 'Next',
            type: 'string',
        },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
        },
    ],
}
