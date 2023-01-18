import {Collection, Template} from "tinacms";
import {heroTemplate} from "../../components/blocks/Hero.template";
import {featuresTemplate} from "../../components/blocks/Features.template";
import {flyingTemplate} from "../../components/blocks/Flying.template";
import {pricingTemplate} from "../../components/blocks/Pricing.template";
import {faqTemplate} from "../../components/blocks/FAQ.template";
import {contentTemplate} from "../../components/blocks/Content.template";
import {showcaseTemplate} from "../../components/blocks/Showcase.template";
import {columnsTemplate} from "../../components/blocks/Columns.template";
import {storyTemplate} from "../../components/blocks/Story.template";
import {featureGridTemplate} from "../../components/blocks/FeatureGrid.template";
import {logoGridTemplate} from "../../components/blocks/LogoGrid.template";
import {roadmapGridTemplate} from "../../components/blocks/RoadmapGrid.template";
import {recentPostsTemplate} from "../../components/blocks/RecentPosts.template";

export const pageCollection: Collection = {
    label: 'Pages',
    name: 'page',
    path: 'content/blocksPages',
    format: 'json',
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'home') {
                return `/`
            }
            return `/${document._sys.filename}`
        },
    },
    fields: [
        {
            type: 'object',
            name: 'seo',
            label: 'SEO Information',
            fields: [
                { type: 'string', label: 'Title', name: 'title' },
                {
                    type: 'string',
                    label: ' Description',
                    name: 'description',
                    ui: {
                        component: 'textarea',
                    },
                },
            ],
        },
        {
            label: 'Page Sections',
            name: 'blocks',
            type: 'object',
            list: true,
            ui: {
                visualSelector: true,
            },
            templates: [
                heroTemplate as Template,
                featuresTemplate as Template,
                flyingTemplate as Template,
                pricingTemplate as Template,
                faqTemplate as Template,
                contentTemplate as Template,
                showcaseTemplate as Template,
                columnsTemplate as Template,
                storyTemplate as Template,
                featureGridTemplate as Template,
                logoGridTemplate as Template,
                roadmapGridTemplate as Template,
                recentPostsTemplate as Template,
            ],
        },
    ],
};
