import { createClient } from "@sanity/client";
import imageBuilder from '@sanity/image-url'

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-18'
})

const builder = imageBuilder(client);

export const urlFor = source => builder.image(source);

export default client;