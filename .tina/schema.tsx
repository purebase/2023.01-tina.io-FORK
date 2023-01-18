import React from 'react'

import {defineSchema} from 'tinacms'
import {pageCollection} from "./schema/pageCollection";
import {postCollection} from "./schema/postCollection";
import {docCollection} from "./schema/docCollection";
import {testCollection} from "./schema/testCollection";

export const schema = defineSchema({
  collections: [
    pageCollection,
    postCollection,
    docCollection,
    testCollection
  ],
})
