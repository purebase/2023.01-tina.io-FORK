import {Collection} from "tinacms";

export const testCollection: Collection = {
    label: 'AB Test',
    name: 'abtest',
    path: 'content/ab-tests',
    format: 'json',
    fields: [
        {
            type: 'object',
            label: 'tests',
            name: 'tests',
            list: true,
            ui: {
                itemProps: (item) => {
                    // Field values are accessed by title?.<Field name>
                    return { label: item.testId }
                },
            },
            fields: [
                { type: 'string', label: 'Id', name: 'testId' },
                {
                    type: 'string',
                    label: 'Page',
                    name: 'href',
                    description:
                        'This is the root page that will be conditionally swapped out',
                },
                {
                    type: 'object',
                    name: 'variants',
                    label: 'Variants',
                    list: true,
                    fields: [
                        { type: 'string', label: 'Id', name: 'testId' },
                        {
                            type: 'string',
                            label: 'Page',
                            name: 'href',
                            description:
                                'This is the variant page that will be conditionally used instead of the original',
                        },
                    ],
                },
            ],
        },
    ],
}
